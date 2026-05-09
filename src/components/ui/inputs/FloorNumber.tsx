import { ChangeEvent } from "react";

interface FloorNumberSliderProps {
  floor: number;
  floors: number[];
  handleFloor: (floor: number, id: string) => void;
}

export function FloorNumberSlider({
  floor,
  floors = [],
  handleFloor,
}: FloorNumberSliderProps) {
  const lowestFloor = floors.length ? floors.at(0) : 0;
  const highestFloor = floors.length ? floors.at(-1) : lowestFloor;

  function handleChange(e: ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    handleFloor(Number(e.currentTarget.value), "");
    console.log(e.currentTarget.value);
  }
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2">
      <div className="relative bg-red-400">
        <input
          type="range"
          value={floor}
          min={lowestFloor}
          max={highestFloor}
          onChange={handleChange}
          step={1}
          className="absolute -rotate-90 origin-bottom-left translate-y-16"
          id="myRange"
        />
      </div>
    </div>
  );
}
