import { useState } from "react";
import { type FloorProp } from "@/types/Rooms";
import { fillFloorNumbers } from "@/utils/misc";
import { GenerateFloor } from "@/utils/generateFloor";
import { generateFloorStyles, type ViewMode } from "@/utils/styles";
import { FloorNumberSlider } from "../ui/inputs/FloorNumber";
import { DebugSlider } from "../ui/inputs/DebugSlider";
import { ViewModeSelect } from "../ui/inputs/ViewMode";

interface FloorPlanProps {
  curFloor: number;
  curRoom: string;
  floors: FloorProp[];
  viewMode: ViewMode;
  handleClick: (floor: number, id: string, mode?: ViewMode) => void;
}

/** Notes:
 * Needs two views: top-down and angled, needs to be stored in state
 */

export function FloorPlan({
  curFloor,
  curRoom,
  floors,
  viewMode,
  handleClick,
}: FloorPlanProps) {
  // Transform svgs
  const [translateX, settranslateX] = useState(-10);
  const [translateY, settranslateY] = useState(0);
  const [translateZ, settranslateZ] = useState(130);
  const [rotateX, setRotateX] = useState(-5);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  // Transform container
  const [rotateViewX, setRotateViewX] = useState(65);
  const [rotateViewY, setRotateViewY] = useState(5);
  const [rotateViewZ, setRotateViewZ] = useState(10);
  const [distance, setDistance] = useState(2000);

  // Calculations
  const availableFloors = floors.map((floor) => floor.floor);
  const filledFloors = fillFloorNumbers(floors);
  const floorLabel = filledFloors.find((floor) => floor.floor === curFloor);

  return (
    <div className="relative size-full flex flex-row! gap-2 bg-white overflow-hidden rounded-lg">
      <div
        className="perspective-origin-center perspective-distant flex-1"
        style={{ perspective: `${distance}px` }}
      >
        <div
          className="relative  h-full w-full transform-3d transition-all duration-1000"
          style={{
            transform:
              viewMode === "3D"
                ? `rotateX(${rotateViewX}deg) rotateY(${rotateViewY}deg) rotateZ(${rotateViewZ}deg)`
                : "",
          }}
        >
          {filledFloors.map(({ floor, rooms }) => (
            <GenerateFloor
              key={floor}
              floor={floor}
              curFloor={curFloor}
              curRoom={curRoom}
              rooms={rooms}
              className={`absolute ${curFloor === floor ? "" : ""} transition-all duration-1000 hover:bg-gray-900/30`}
              handleClick={handleClick}
              style={generateFloorStyles({
                floor,
                curFloor: curFloor,
                maxFloors: filledFloors.length,
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
      <div className="absolute right-0 flex flex-col gap-2 text-black z-50 w-36 p-4 hidden">
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
        floors={availableFloors}
        handleFloor={handleClick}
      />
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
