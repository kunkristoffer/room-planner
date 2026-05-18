import type { RoomType, Room, ViewMode } from "@/types/Rooms";
import { type ComponentProps, type MouseEvent, Fragment } from "react";
import { coordsToPath } from "./misc";

interface FloorProps extends ComponentProps<"svg"> {
  rooms: Room[];
  floor: number;
  shape?: string;
  curFloor: number;
  curRoom: string;
  handleClick: (floor: number, id: string, mode: ViewMode) => void;
}

function GenerateDoor({
  x,
  y,
  angle,
  type,
}: NonNullable<Room["doors"]>[number]) {
  if (type === "sliding" || type === "double")
    return (
      <g transform={`translate(${x} ${y}) rotate(${angle})`}>
        <line
          x1="0"
          y1="0"
          x2={type === "double" ? 50 : 30}
          y2="0"
          stroke="lightgray"
          strokeWidth={2}
        />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="gray" />
        <line
          x1={type === "double" ? 50 : 30}
          x2={type === "double" ? 50 : 30}
          y1="-5"
          y2="5"
          stroke="gray"
        />
      </g>
    );

  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <line
        x1="0"
        y1={type === "left" ? "0" : "25"}
        x2="25"
        y2={type === "left" ? "0" : "25"}
        stroke="gray"
      />
      <line x1="0" y1="0" x2="0" y2="25" stroke="gray" />
      <path
        d={type === "left" ? "M 0 25 q 25 0 25 -25" : "M 25 25 q 0 -25 -25 -25"}
        fill="none"
        stroke="black"
        strokeDasharray="2 2"
      />
    </g>
  );
}

export function GenerateFloor({
  curFloor,
  curRoom,
  floor,
  rooms,
  shape,
  handleClick,
  ...props
}: FloorProps) {
  function updateCurrent(event: MouseEvent<SVGSVGElement>) {
    const targetElement = event.target;

    if (targetElement instanceof SVGPolygonElement && curFloor === floor) {
      const room = rooms.find((room) => room.id === targetElement.id);
      if (room?.type === "room" && curRoom !== room.id) {
        handleClick(floor, room.id, "2D");
      } else {
        handleClick(floor, "", "2D");
      }
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
      case "disabled":
        return "fill-white";
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
      <path d={shape ?? "M0 0 H325 V375 H850 V675 H0 Z"} />

      {/* Legend */}
      {/* <g
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
      </g> */}

      {/* Rooms */}
      {rooms.map((room) => (
        <g
          key={room.id}
          transform={`translate(${room?.origin?.x ?? 0} ${room?.origin?.y ?? 0})`}
        >
          {/* Room shape */}
          <polygon
            key={room.id}
            id={room.id}
            points={room.points.map((p) => p.x + "," + p.y).join(",")}
            strokeWidth={room.wallThickness ?? 2}
            className={
              room.type === "room" && curRoom === room.id
                ? "fill-red-100 hover:fill-red-200 animate-pulse"
                : getRoomColor(room.type)
            }
          />

          {/* Doors */}
          {room.type !== "disabled" &&
            (curRoom.length ? (curRoom === room.id ? true : false) : true) &&
            room.doors?.map((door, i) => (
              <GenerateDoor key={`${room.id}-${i}`} {...door} />
            ))}

          {/* Pathfinding */}
          {curRoom === room.id && room?.path && room.path.length >= 2 && (
            <g className="z-10">
              <path
                d={coordsToPath(room.path)}
                fill="none"
                stroke="WhiteSmoke"
                strokeWidth="10"
              />
              <path
                d={coordsToPath(room.path)}
                fill="none"
                stroke="red"
                strokeWidth="4"
                strokeDasharray="10 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="30"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </path>
              <circle
                cx={room.path.at(-1)?.x}
                cy={room.path.at(-1)?.y}
                r={10}
                fill="red"
                stroke="none"
              />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
