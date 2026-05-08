import { Floor1 } from "@/data/loadFloors";
import { FloorNumberSlider } from "../ui/inputs/FloorNumber";
import { useState } from "react";
import { DebugSlider } from "../ui/inputs/DebugSlider";
import { generateFloorStyles, ViewMode } from "@/utils/styles";

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
  const [translateX, settranslateX] = useState(0);
  const [translateY, settranslateY] = useState(180);
  const [translateZ, settranslateZ] = useState(235);

  // Transform container
  const [rotateX, setRotateX] = useState(67);
  const [rotateY, setRotateY] = useState(5);
  const [rotateZ, setRotateZ] = useState(18);
  const [distance, setDistance] = useState(2000);

  return (
    <div className="relative size-full flex flex-row! gap-2 bg-white overflow-clip">
      <div
        className="perspective-distant flex-1"
        style={{ perspective: `${distance}px` }}
      >
        <div
          className="relative transform-3d h-[50svw]"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
          }}
        >
          {floors.map((_, i) => (
            <Floor1
              key={i}
              data-floor={i}
              className={`absolute ${floor === i ? "" : ""}`}
              style={generateFloorStyles({
                curFloor: i,
                maxFloors: floors.length,
                mode: viewMode,
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
        <hr />
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
        <DebugSlider
          label="Distance"
          value={distance}
          min={1000}
          max={3000}
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
