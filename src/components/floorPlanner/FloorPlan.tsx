import { Floor1 } from "@/data/loadFloors";
import { FloorNumberSlider } from "../ui/sliders/FloorNumber";
import { useState } from "react";

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
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(250);
  const [transformZ, setTransformZ] = useState(250);

  // Transform container
  const [rotateX, setRotateX] = useState(70);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(25);

  function offset(i: number) {
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
    <div className="flex flex-row! gap-2 bg-white overflow-clip">
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
                  translateX(${offset(i) * transformX}px)
                  translateY(${offset(i) * transformY}px)
                  translateZ(${offset(i) * transformZ}px)
                `,
                opacity: getOpacity(i, floor, floors.length),
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
      <div className="text-black z-50">
        <label>
          <p>Transform X - {transformX}</p>
          <input
            type="range"
            value={transformX}
            min={0}
            max={500}
            onChange={(e) => setTransformX(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          <p>Transform Y - {transformY}</p>
          <input
            type="range"
            value={transformY}
            min={0}
            max={500}
            onChange={(e) => setTransformY(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          <p>Transform Z - {transformZ}</p>
          <input
            type="range"
            value={transformZ}
            min={0}
            max={500}
            onChange={(e) => setTransformZ(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          <p>Rotate X - {rotateX}</p>
          <input
            type="range"
            value={rotateX}
            min={-360}
            max={360}
            onChange={(e) => setRotateX(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          <p>Rotate Y - {rotateY}</p>
          <input
            type="range"
            value={rotateY}
            min={-360}
            max={360}
            onChange={(e) => setRotateY(e.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          <p>Rotate Z - {rotateZ}</p>
          <input
            type="range"
            value={rotateZ}
            min={-360}
            max={360}
            onChange={(e) => setRotateZ(e.currentTarget.valueAsNumber)}
          />
        </label>
      </div>
      <FloorNumberSlider
        floor={floor}
        floors={floors}
        handleFloor={handleClick}
      />
    </div>
  );
}
