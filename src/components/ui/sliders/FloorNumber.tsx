import { ChangeEvent } from "react";

interface FloorNumberSliderProps {
  floor: number;
  floors: number[];
  handleFloor: (id: string, type: "floor" | "room") => void;
}

export function FloorNumberSlider({
  floor,
  floors = [],
  handleFloor,
}: FloorNumberSliderProps) {
  const lowestFloor = floors.length ? floors.at(0) : 0;
  const highestFloor = floors.length ? floors.at(-1) : lowestFloor;

  function handleChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    handleFloor(e.currentTarget.value, "floor");
    console.log(e.currentTarget.value);
  }
  return (
    <div className="relative w-8 h-auto">
      <input
        type="range"
        value={floor}
        min={lowestFloor}
        max={highestFloor}
        onChange={handleChange}
        step={1}
        className="absolute rotate-270 origin-left h-full"
        id="myRange"
      />
    </div>
  );
}
