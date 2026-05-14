import type { RoomType, Room, ViewMode } from "@/types/Rooms";
import { ComponentProps, MouseEvent } from "react";
interface FloorProps extends ComponentProps<"svg"> {
  rooms: Room[];
  floor: number;
  curFloor: number;
  curRoom: string;
  handleClick: (floor: number, id: string, mode: ViewMode) => void;
}

export function GenerateFloor({
  curFloor,
  curRoom,
  floor,
  rooms,
  handleClick,
  ...props
}: FloorProps) {
  function updateCurrent(event: MouseEvent<SVGSVGElement>) {
    const targetElement = event.target;

    if (targetElement instanceof SVGPolygonElement && curFloor === floor) {
      handleClick(floor, targetElement.id, "2D");
    } else {
      handleClick(floor, "", "3D");
    }
  }

  function getRoomColor(
    type: RoomType,
  ): ComponentProps<"polygon">["className"] {
    switch (type) {
      case "room":
        return "fill-purple-100 hover:fill-purple-300";
      case "bathroom":
        return "fill-green-100 hover:fill-green-300";
      case "utility":
        return "fill-gray-100 hover:fill-gray-300";
      case "elevator":
        return "fill-yellow-100 hover:fill-yellow-300";
      case "stair":
        return "fill-blue-100 hover:fill-blue-300";
      default:
        return "";
    }
  }

  return (
    <svg
      viewBox="-50 -50 950 775"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      stroke="black"
      strokeWidth="2"
      {...props}
      onClick={updateCurrent}
    >
      {/**Outer shape (L building)*/}
      <path d="M0 0 H325 V375 H850 V675 H0 Z"></path>

      {/* Legend */}
      <g
        className={`${curFloor === floor ? "opacity-100" : "opacity-0"} duration-1000`}
      >
        <rect
          x={400}
          y={0}
          width={100}
          height={100}
          className="fill-yellow-100"
        />
        <text x="525" y="50" className="text-2xl fill">
          Heis
        </text>
        <rect
          x={400}
          y={125}
          width={100}
          height={100}
          className="fill-blue-100"
        />
        <text x="525" y="175" className="text-2xl fill">
          Trapp
        </text>
        {rooms.length > 3 && (
          <>
            <rect
              x={650}
              y={125}
              width={100}
              height={100}
              className="fill-purple-100"
            />
            <text x="775" y="175" className="text-2xl fill">
              Rom
            </text>
          </>
        )}
      </g>

      {/* Rooms */}
      {rooms.map((room) => (
        <polygon
          key={room.id}
          id={room.id}
          points={room.points.map((p) => p.x + "," + p.y).join(",")}
          strokeWidth={room.wallThickness ?? 2}
          className={`
            ${getRoomColor(room.type)}
            ${room.type === "room" && curRoom === room.id ? "fill-red-100 hover:fill-red-200 animate-pulse" : ""}
          `}
        />
      ))}
    </svg>
  );
}
