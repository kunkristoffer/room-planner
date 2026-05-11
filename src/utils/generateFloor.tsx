import { type Room } from "@/types/Rooms";
import { ComponentProps, MouseEvent } from "react";
interface FloorProps extends ComponentProps<"svg"> {
  rooms: Room[];
  floor: number;
  curFloor: number;
  curRoom: string;
  handleClick: (floor: number, id: string) => void;
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
    let roomID = "";

    if (targetElement instanceof SVGPolygonElement) {
      roomID = targetElement.id;
    }

    handleClick(floor, roomID);
  }

  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      stroke="black"
      strokeWidth="2"
      {...props}
      onClick={updateCurrent}
    >
      {/**Outer shape (L building)*/}
      <path d="M50 50 H300 V250 H700 V450 H50 Z"></path>

      {/* Hallways */}
      <rect x={200} y={50} width={100} height={200} fill="white" />
      <rect x={200} y={200} width={500} height={100} fill="white" />

      {/* Rooms */}
      {rooms.map((room) => (
        <polygon
          key={room.id}
          id={room.id}
          points={room.points.map((p) => p.x + "," + p.y).join(",")}
          strokeWidth={room.wallThickness ?? 2}
          className={`
            ${room.type === "room" ? "fill-purple-100 hover:fill-purple-300" : ""}
            ${room.id === curRoom && floor === curFloor ? "fill-red-300" : ""}
            ${room.type === "bathroom" ? "fill-green-100 hover:fill-green-300" : ""}
          `}
        />
      ))}

      {/**Vertical hallway doors*/}
      <line
        x1="200"
        y1="100"
        x2="200"
        y2="130"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="200"
        y1="180"
        x2="200"
        y2="210"
        stroke="white"
        strokeWidth="4"
      ></line>

      {/**Bottom hallway doors*/}
      <line
        x1="250"
        y1="300"
        x2="280"
        y2="300"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="375"
        y1="300"
        x2="405"
        y2="300"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="500"
        y1="300"
        x2="530"
        y2="300"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="625"
        y1="300"
        x2="655"
        y2="300"
        stroke="white"
        strokeWidth="4"
      ></line>

      {/**Top hallway doors*/}
      <line
        x1="250"
        y1="200"
        x2="280"
        y2="200"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="350"
        y1="200"
        x2="380"
        y2="200"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="450"
        y1="200"
        x2="480"
        y2="200"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="550"
        y1="200"
        x2="580"
        y2="200"
        stroke="white"
        strokeWidth="4"
      ></line>
      <line
        x1="650"
        y1="200"
        x2="680"
        y2="200"
        stroke="white"
        strokeWidth="4"
      ></line>
    </svg>
  );
}
