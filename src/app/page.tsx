"use client";

import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import Image from "next/image";
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
    <main className="flex-1 container mx-auto grid grid-cols-3 gap-4">
      <div className="relative aspect-3/1 col-span-3 rounded-md overflow-hidden mb-12">
        <Image src="/game.png" alt="game picture" fill />
        <div className="absolute left-1/5 bottom-0 translate-y-1/2 bg-background p-8 rounded-md">
          <h1 className="text-center text-4xl">Event title</h1>
          <p>
            This is a one sentence subtitle that is used on the cards, repeated
            here as a lead-in
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 col-span-2">
        <FloorPlan floor={floor} room={room} handleClick={handleClick} />
        <FloorDetails floor={floor} room={room} />
      </div>
      <div className="flex flex-col gap-3 col-span-1 p-4 bg-foreground rounded-md">
        <p className="text-slate-500">Detaljer om arrangement</p>
        <span>
          <p className="font-bold">Arrangør</p>
          <p>Elminister Aumar</p>
        </span>
      </div>
    </main>
  );
}
