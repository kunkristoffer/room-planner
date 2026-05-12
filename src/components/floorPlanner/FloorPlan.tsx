"use client";

// Globals
import type { ViewMode, FloorProp } from "@/types/Rooms";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { generateFloorStyles } from "@/utils/styles";
import { fillFloorNumbers } from "@/utils/misc";
import { GenerateFloor } from "@/utils/generateFloor";

// Components
import { FloorNumberSlider } from "../ui/inputs/FloorNumber";
import { DebugSlider } from "../ui/inputs/DebugSlider";
import { ViewModeSelect } from "../ui/inputs/ViewMode";
import { FloorSlider } from "../ui/inputs/FloorSlider";

interface FloorPlanProps {
  floors: FloorProp[];
}

export function FloorPlan({ floors }: FloorPlanProps) {
  // Get state from url
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const viewMode = (searchParams.get("view") as ViewMode) ?? "3D";
  const curFloor = Number(searchParams.get("floor")) ?? "1";
  const curRoom = searchParams.get("room") ?? "";

  // Handle state change
  function handleClick(newFloor: number, id: string, mode?: ViewMode) {
    const params = new URLSearchParams(searchParams);
    const prevURL = `${pathName}?${params.toString()}`;

    params.set("floor", String(newFloor));

    if (id) {
      params.set("room", id);
    } else {
      params.delete("room");
    }

    if (mode) {
      params.set("view", mode);
    }

    const newURL = `${pathName}?${params.toString()}`;
    if (prevURL !== newURL) {
      console.log(prevURL);
      console.log(newURL);

      router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    }
  }

  // Get svg container size
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({
    height: 0,
    width: 0,
  });

  // Transform svgs
  const [translateX, settranslateX] = useState(-10);
  const [translateY, settranslateY] = useState(50);
  const [translateZ, settranslateZ] = useState(20);
  const [rotateX, setRotateX] = useState(10);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  // Transform container
  const [rotateViewX, setRotateViewX] = useState(60);
  const [rotateViewY, setRotateViewY] = useState(0);
  const [rotateViewZ, setRotateViewZ] = useState(15);
  const [distance, setDistance] = useState(2000);

  // Calculations
  const availableFloors = floors.map((floor) => floor.floor);
  const floorsFilled = fillFloorNumbers(floors);
  const floorNumbers = floorsFilled.map((floor) => floor.floor);
  const floorLabel = floorsFilled.find((floor) => floor.floor === curFloor);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerSize({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex-1 flex flex-row! gap-2 bg-white rounded-lg overflow-hidden">
      <div
        className="perspective-origin-center perspective-distant flex-1"
        style={{ perspective: `${distance}px` }}
      >
        <div
          ref={containerRef}
          className="relative  h-full w-full transform-3d transition-all duration-1000"
          style={{
            transform:
              viewMode === "3D"
                ? `rotateX(${rotateViewX}deg) rotateY(${rotateViewY}deg) rotateZ(${rotateViewZ}deg)`
                : "",
          }}
        >
          {floorsFilled.map(({ floor, rooms }) => (
            <GenerateFloor
              key={floor}
              floor={floor}
              curFloor={curFloor}
              curRoom={curRoom}
              rooms={rooms}
              className={`absolute ${curFloor === floor ? "bg-slate-300" : ""} transition-all duration-1000 hover:bg-slate-200`}
              handleClick={handleClick}
              style={generateFloorStyles({
                floor,
                curFloor: curFloor,
                maxFloors: floorsFilled.length,
                mode: viewMode,
                containerSize: containerSize,
                overrides: {
                  transform: {
                    x: translateX,
                    y: translateY,
                    z: translateZ,
                  },
                  rotate: {
                    x: rotateX,
                    y: rotateY,
                    z: rotateZ,
                  },
                },
              })}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-full flex-col gap-2 text-black bg-white z-50 w-36 p-4 flex">
        <DebugSlider
          label="Translate X"
          value={translateX}
          min={-500}
          max={500}
          onChange={(val) => settranslateX(val)}
        />
        <DebugSlider
          label="Translate Y"
          value={translateY}
          min={-500}
          max={500}
          onChange={(val) => settranslateY(val)}
        />
        <DebugSlider
          label="Translate Z"
          value={translateZ}
          min={-500}
          max={500}
          onChange={(val) => settranslateZ(val)}
        />
        <DebugSlider
          label="Rotate X"
          value={rotateX}
          min={-360}
          max={360}
          onChange={(val) => setRotateX(val)}
        />
        <DebugSlider
          label="Rotate Y"
          value={rotateY}
          min={-360}
          max={360}
          onChange={(val) => setRotateY(val)}
        />
        <DebugSlider
          label="Rotate Z"
          value={rotateZ}
          min={-360}
          max={360}
          onChange={(val) => setRotateZ(val)}
        />
        <hr />
        <DebugSlider
          label="Rotate X"
          value={rotateViewX}
          min={0}
          max={360}
          onChange={(val) => setRotateViewX(val)}
        />
        <DebugSlider
          label="Rotate Y"
          value={rotateViewY}
          min={0}
          max={360}
          onChange={(val) => setRotateViewY(val)}
        />
        <DebugSlider
          label="Rotate Z"
          value={rotateViewZ}
          min={0}
          max={360}
          onChange={(val) => setRotateViewZ(val)}
        />
        <DebugSlider
          label="Distance"
          value={distance}
          min={0}
          max={5000}
          onChange={(val) => setDistance(val)}
        />
      </div>
      <FloorNumberSlider
        floor={curFloor}
        floors={floorNumbers}
        handleFloor={handleClick}
      />
      {/* <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <FloorSlider
          curFloor={curFloor}
          availableFloors={availableFloors}
          floors={floorNumbers}
          onChange={handleClick}
        />
      </div> */}
      <span className="absolute p-2 text-black">
        <p>
          {curFloor}. Et {floorLabel?.label ? `(${floorLabel.label})` : ""}
        </p>
      </span>
      <span className="absolute p-2 bottom-0 text-black">
        <ViewModeSelect
          value={viewMode}
          options={["2D", "3D"]}
          onChange={(mode) => handleClick(curFloor, curRoom, mode)}
        />
      </span>
    </div>
  );
}
