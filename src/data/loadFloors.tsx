import { ComponentProps } from "react";

type RoomType = "room" | "bathroom";

interface Room {
  id: string;
  type: RoomType;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function Floor1(props: ComponentProps<"svg">) {
  const rooms: Room[] = [
    { id: "room-1", type: "room", x: 50, y: 50, width: 150, height: 100 },
    { id: "room-2", type: "room", x: 50, y: 150, width: 150, height: 100 },
    { id: "room-3", type: "bathroom", x: 50, y: 250, width: 75, height: 100 },
    { id: "room-4", type: "bathroom", x: 125, y: 250, width: 75, height: 100 },
    { id: "room-5", type: "room", x: 200, y: 300, width: 125, height: 150 },
    { id: "room-6", type: "room", x: 325, y: 300, width: 125, height: 150 },
    { id: "room-7", type: "room", x: 450, y: 300, width: 125, height: 150 },
    { id: "room-8", type: "room", x: 575, y: 300, width: 125, height: 150 },
    { id: "room-9", type: "room", x: 200, y: 200, width: 100, height: 100 },
    { id: "room-10", type: "room", x: 300, y: 200, width: 100, height: 100 },
    { id: "room-11", type: "room", x: 400, y: 200, width: 100, height: 100 },
    { id: "room-12", type: "room", x: 500, y: 200, width: 100, height: 100 },
    { id: "room-13", type: "room", x: 600, y: 200, width: 100, height: 100 },
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
      <rect x={200} y={50} width={100} height={200} />
      <rect x={200} y={200} width={500} height={100} />

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
            ${room.type === "bathroom" ? "fill-green-100" : ""}
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
