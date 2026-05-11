import { ComponentProps } from "react";

type RoomType = "room" | "bathroom";
type Coordinate = { x: number; y: number };
type Door = "left" | "right" | "double" | "sliding";

interface Room {
  id: string;
  type: RoomType;
  points: Coordinate[];
  doors: (Coordinate & { angle: number; type?: Door })[];
  windows?: (Coordinate & { angle: number; width?: number })[];
  wallThickness?: number;
}

interface FloorProps extends ComponentProps<"svg"> {
  floor: number;
  curFloor: number;
  curRoom: string;
  handleClick: (floor: number, id: string) => void;
}

export function Floor1({
  curFloor,
  curRoom,
  floor,
  handleClick,
  ...props
}: FloorProps) {
  const rooms: Room[] = [
    {
      id: "room-1",
      type: "room",
      points: [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
      ],
      doors: [{ x: 2, y: 3, angle: 90, type: "left" }],
      windows: [{ x: 10, y: 5, angle: 90 }],
      wallThickness: 10,
    },
  ];

  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="black"
      strokeWidth="2"
      {...props}
    >
      {/**Outer shape (L building)*/}
      <path d="M50 50 H300 V250 H700 V450 H50 Z"></path>

      {/* Hallways */}
      <rect x={200} y={50} width={100} height={200} fill="white" />
      <rect x={200} y={200} width={500} height={100} fill="white" />

      {/* Rooms */}
      {rooms.map((room) => (
        <rect
          key={room.id}
          id={room.id}
          x={room.x}
          y={room.y}
          width={room.width}
          height={room.height}
          className={`
            ${room.type === "room" ? "fill-purple-100 hover:fill-purple-300" : ""}
            ${room.id === curRoom && floor === curFloor ? "fill-red-300" : ""}
            ${room.type === "bathroom" ? "fill-green-100 hover:fill-green-300" : ""}
          `}
          onClick={() => handleClick(floor, room.id)}
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
