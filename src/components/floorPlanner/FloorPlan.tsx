import { Floor1 } from "@/data/loadFloors";
import { FloorNumberSlider } from "../ui/inputs/FloorNumber";
import { useState } from "react";
import { DebugSlider } from "../ui/inputs/DebugSlider";

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

  // Transform svgs
  const [translateX, settranslateX] = useState(0);
  const [translateY, settranslateY] = useState(180);
  const [translateZ, settranslateZ] = useState(235);

  // Transform container
  const [rotateX, setRotateX] = useState(67);
  const [rotateY, setRotateY] = useState(5);
  const [rotateZ, setRotateZ] = useState(18);

  function getDelta(i: number) {
    return i - floor;
  }

  function getOpacity(
    index: number,
    selectedIndex: number,
    maxDistance: number,
  ) {
    const distance = Math.abs(index - selectedIndex);

    const minOpacity = 0;
    const maxOpacity = 0.9;

    const normalized = Math.min(distance / maxDistance, 1);

    // Ease-out curve (fast increase, slow towards max)
    const eased = 1 - Math.pow(normalized, 2);

    return minOpacity + (maxOpacity - minOpacity) * eased;
  }

  return (
    <div className="relative size-full flex flex-row! gap-2 bg-white overflow-clip">
      <div className="perspective-distantes flex-1">
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
              style={{
                transform: `
                  translateX(${getDelta(i) * translateX}px)
                  translateY(${getDelta(i) * translateY}px)
                  translateZ(${getDelta(i) * translateZ}px)
                  `,
                opacity: Math.max(0.15, 1 - Math.abs(getDelta(i)) * 0.2),
                scale: 1 - Math.abs(getDelta(i) * 0.03),
                // zIndex: 100 - Math.abs(offset(i)),
              }}
            />
          ))}

          {/* {floors.map((item, i) => (
            
            <Image
              key={i}
              src={item}
              alt={`Image of floor ${i + 1}`}
              className="absolute origin-center inset-0 w-full"
              style={{
                backgroundColor: floor === i ? "red" : "",
                transform: `
                  translateZ(${Math.abs(floor - i) * 40}px)
                  translateY(${Math.abs(floor - i) - 20}px)
                  scale(${1 - Math.abs(getOffset(i)) * 0.05})
                `,
                opacity: floors.length / Math.abs(floor - i),
                zIndex: 100 - Math.abs(getOffset(i)),
              }}
              width={800}
              height={400}
              unoptimized
              loading="eager"
            />
          ))} */}
        </div>
      </div>
      <div className="absolute right-0 flex flex-col gap-2 text-black z-50 w-36 p-4">
        <DebugSlider
          label="Translate X"
          value={translateX}
          min={0}
          max={500}
          onChange={(val) => settranslateX(val)}
        />
        <DebugSlider
          label="Translate Y"
          value={translateY}
          min={0}
          max={500}
          onChange={(val) => settranslateY(val)}
        />
        <DebugSlider
          label="Translate Z"
          value={translateZ}
          min={0}
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
      </div>
      <FloorNumberSlider
        floor={floor}
        floors={floors}
        handleFloor={handleClick}
      />
    </div>
  );
}
