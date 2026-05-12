"use client";

import { ViewMode } from "@/utils/styles";
import { useRef, useState } from "react";

interface FloorSliderProps {
  curFloor: number;
  availableFloors: number[];
  floors: number[];
  onChange: (floor: number, id: string, mode: ViewMode) => void;
}

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
  const maxFloor = Math.max(...floors);
  const floorRange = floors.length;

  console.log(availableFloors, floors);

  function getTrackPosition(floor: number) {
    return 10;
  }

  function getClosestAvailableFloor() {}

  return (
    <div ref={trackRef} className="relative flex h-48 cursor-pointer">
      <span className="h-full w-3 rounded-md bg-gray-300 border border-slate-500"></span>
      <button
        type="button"
        className="absolute left-1/2 -translate-x-1/2 size-6 bg-blue-600 rounded-full"
        style={{ top: `${getTrackPosition(curFloor)}%` }}
      ></button>
    </div>
  );
}
