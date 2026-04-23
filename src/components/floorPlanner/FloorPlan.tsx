import { Floor1 } from "@/data/loadFloors";
import { FloorNumberSlider } from "../ui/sliders/FloorNumber";

interface FloorPlanProps {
  floor: number;
  room: string;
  handleClick: (id: string, type: "floor" | "room") => void;
}

export function FloorPlan({ floor, handleClick }: FloorPlanProps) {
  const floors = Array.from({ length: 5 }, (_, i) => i);

  function offset(i: number) {
    return i - floor;
  }

  return (
    <div className="flex flex-row! gap-2 bg-white overflow-clip">
      <div className="perspective-distantes flex-1">
        <div
          className="relative transform-3d h-[50svw]"
          style={{ transform: "rotateX(70deg) rotateZ(25deg)" }}
        >
          {floors.map((_, i) => (
            <Floor1
              key={i}
              data-floor={i}
              className={`absolute ${floor === i ? "bg-white" : ""}`}
              style={{
                transform: `
                  translateZ(${offset(i) * 100}px)
                  translateY(-${Math.abs(offset(i)) * 150}px)
                `,
                opacity: 1 - Math.abs(offset(i)) / floors.length,
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
      <FloorNumberSlider
        floor={floor}
        floors={floors}
        handleFloor={handleClick}
      />
    </div>
  );
}
