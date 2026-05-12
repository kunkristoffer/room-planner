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
  return (
    <div className="absolute left-5 top-1/2 -translate-y-1/2">
      <div className="relative bg-red-400">
        <input
          type="range"
          value={floors.indexOf(floor)}
          min={0}
          max={floors.length - 1}
          onChange={(e) =>
            handleFloor(floors[Number(e.currentTarget.value)], "")
          }
          step={1}
          className="absolute -rotate-90 origin-bottom-left translate-y-16"
          id="myRange"
        />
      </div>
    </div>
  );
}
