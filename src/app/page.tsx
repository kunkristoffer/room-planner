"use client";

import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import { useState } from "react";

export default function Home() {
  const [floor, setFloor] = useState(0);
  const [room, setRoom] = useState<string>("");

  function handleClick(id: string, type: "room" | "floor") {
    console.log(`handleClick > type: ${type} >id: ${id}`);

    if (type === "floor") {
      setFloor(Number(id));
    }
  }

  return (
    <main className="w-screen p-4">
      <FloorPlan floor={floor} room={room} handleClick={handleClick} />
      <FloorDetails floor={floor} room={room} />
    </main>
  );
}
