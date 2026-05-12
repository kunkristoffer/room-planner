"use client";

import { type ViewMode } from "@/types/Rooms";
import { useEffect, useRef, useState } from "react";

interface FloorSliderProps {
  curFloor: number;
  availableFloors: number[];
  floors: number[];
  onChange: (floor: number, id: string, mode: ViewMode) => void;
}

// Todo remove change event and just handle updating url here

export function FloorSlider({
  curFloor,
  availableFloors,
  floors,
  onChange,
}: FloorSliderProps) {
  // States
  const [isDraging, setIsDraging] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculations
  const minFloor = Math.min(...floors);
  const floorRange = floors.length;

  function getPercentFromFloor(floor: number, min: number, range: number) {
    const percent = ((floor - min + 1) / range) * 100;
    return 100 - percent;
  }

  function getFloorFromPercent(percent: number, range: number) {
    const percentToFloor = Math.round((percent / 100) * (range - 1));
    const floorNumber = floors[percentToFloor];
    return floorNumber;
  }
  useEffect(() => {
    if (!isDraging) return;

    function handleMove(e: PointerEvent) {
      if (!trackRef.current) return;
      const containerSize = trackRef.current.getBoundingClientRect();
      const relativeHeight = e.clientY - containerSize.top;
      const relativeToPercent =
        100 -
        Math.min(
          Math.max((relativeHeight / containerSize.height) * 100, 0),
          100,
        );

      const floor = getFloorFromPercent(relativeToPercent, floors.length);

      // limit to closest floor?

      if (floor !== curFloor) {
        onChange(floor, "", "3D");
      }
    }

    function handleRelease() {
      setIsDraging(false);
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleRelease);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleRelease);
    };
  }, [isDraging]);

  return (
    <div ref={trackRef} className="relative flex h-48 cursor-pointer">
      <p className="absolute left-24 text-black text-nowrap bg-white p-2 border">
        is draging: {isDraging ? "true" : "false"}
      </p>
      <span className="h-full w-3 rounded-md bg-gray-300 border border-slate-500"></span>
      <button
        type="button"
        className="absolute left-1/2 -translate-x-1/2 size-6 bg-blue-600 rounded-full active:bg-blue-500"
        style={{
          top: `${getPercentFromFloor(curFloor, minFloor, floorRange)}%`,
        }}
        onPointerDown={() => setIsDraging(true)}
      ></button>
    </div>
  );
}
