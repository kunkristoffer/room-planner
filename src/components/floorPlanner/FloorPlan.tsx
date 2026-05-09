import { Floor1 } from "@/data/loadFloors";
import { FloorNumberSlider } from "../ui/inputs/FloorNumber";
import { useState } from "react";
import { DebugSlider } from "../ui/inputs/DebugSlider";
import { generateFloorStyles, type ViewMode } from "@/utils/styles";

interface FloorPlanProps {
  floor: number;
  room: string;
  handleClick: (id: string, type: "floor" | "room") => void;
}

/** Notes:
 * Needs two views: top-down and angled, needs to be stored in state
 */

export function FloorPlan({ floor, handleClick }: FloorPlanProps) {
  const floors = Array.from({ length: 10 }, (_, i) => i);

  // Mode select
  const [viewMode, setViewMode] = useState<ViewMode>("3D");

  // Transform svgs
  const [translateX, settranslateX] = useState(-10);
  const [translateY, settranslateY] = useState(0);
  const [translateZ, settranslateZ] = useState(130);
  const [rotateX, setRotateX] = useState(5);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  // Transform container
  const [rotateViewX, setRotateViewX] = useState(67);
  const [rotateViewY, setRotateViewY] = useState(5);
  const [rotateViewZ, setRotateViewZ] = useState(18);
  const [distance, setDistance] = useState(2000);

  return (
    <div className="relative size-full flex flex-row! gap-2 bg-white">
      <div
        className="perspective-origin-center perspective-distant flex-1"
        style={{ perspective: `${distance}px` }}
      >
        <div
          className="relative transform-3d h-[50svw]"
          style={{
            transform: `rotateX(${rotateViewX}deg) rotateY(${rotateViewY}deg) rotateZ(${rotateViewZ}deg)`,
          }}
        >
          {floors.map((_, i) => (
            <Floor1
              key={i}
              data-floor={i}
              className={`absolute ${floor === i ? "" : ""} transition-all duration-500`}
              style={generateFloorStyles({
                floor: i,
                curFloor: floor,
                maxFloors: floors.length,
                mode: viewMode,
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
      <div className="absolute right-0 flex flex-col gap-2 text-black z-50 w-36 p-4">
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
          min={0}
          max={360}
          onChange={(val) => setRotateX(val)}
        />
        <DebugSlider
          label="Rotate Y"
          value={rotateY}
          min={0}
          max={360}
          onChange={(val) => setRotateY(val)}
        />
        <DebugSlider
          label="Rotate Z"
          value={rotateZ}
          min={0}
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
        floor={floor}
        floors={floors}
        handleFloor={handleClick}
      />
    </div>
  );
}
