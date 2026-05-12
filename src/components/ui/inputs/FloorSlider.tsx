"use client";

import { ViewMode } from "@/utils/styles";
import { useEffect, useRef, useState } from "react";

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

  function getTrackPosition(floor: number, range: number) {
    return (range / 100) * floor;
  }

  function getClosestAvailableFloor(floor: number, avilable: number[]) {}

  useEffect(() => {
    if (!isDraging) return;

    function handleMove(e: PointerEvent) {
      if (!trackRef.current) return;
      const containerSize = trackRef.current.getBoundingClientRect();
      const relativeHeight = e.clientY - containerSize.top;
      const relativeToPercent = Math.min(
        Math.max((relativeHeight / containerSize.height) * 100, 0),
        100,
      );
      console.log(relativeToPercent);
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
        style={{ top: `${getTrackPosition(curFloor, floorRange)}%` }}
        onPointerDown={() => setIsDraging(true)}
      ></button>
    </div>
  );
}
