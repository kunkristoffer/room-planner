"use client";

import Image from "next/image";
import { useState } from "react";
import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import { floors } from "@/data/floors";
import { ViewMode } from "@/utils/styles";

export default function Home() {
  const [viewMode, setViewMode] = useState<ViewMode>("3D");
  const [floor, setFloor] = useState(0);
  const [room, setRoom] = useState<string>("");

  function handleClick(newFloor: number, id: string, mode?: ViewMode) {
    console.log(`Setting > floor: ${newFloor}, room: ${id}`);

    setRoom(id);
    setFloor(newFloor);
    if (mode) {
      setViewMode(mode);
    }
  }

  return (
    <main className="flex-1 container mx-auto flex flex-col gap-4">
      <div className="relative aspect-3/1 rounded-md overflow-hidden mb-12">
        <Image src="/game.png" alt="game picture" fill loading="eager" />
        <div className="absolute left-1/5 bottom-0 translate-y-1/2 bg-background p-8 rounded-md">
          <h1 className="text-center text-4xl">Event title</h1>
          <p>
            This is a one sentence subtitle that is used on the cards, repeated
            here as a lead-in
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-2 flex flex-col gap-4">
          <div className="p-4 bg-foreground rounded-md">
            <p className="text-center">
              Ingen av dere har meldt intersse for dette arrangementet
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              By some curious chance one morning long ago in the quiet of the
              world, when there was less noise and more green, and the hobbits
              were still numerous and prosperous, and Bilbo Baggins was standing
              at his door after breakfast smoking an enormous long wooden pipe
              that reached nearly down to his woolly toes (neatly brushed) -
              Gandalf came by. Gandalf!
            </p>
            <p>
              If you had heard only a quarter of what I have heard about him,
              and I have only heard very little of all there is to hear, you
              would be prepared for any sort I of remarkable tale. Tales and
              adventures sprouted up all over the place wherever he went, in the
              most extraordinary fashion.
            </p>
            <p>
              He had not been down that way under The Hill for ages and ages,
              not since his friend the Old Took died, in fact, and the hobbits
              had almost forgotten what he looked like. He had been away over
              The Hill and across The Water on business of his own since they
              were all small hobbit-boys and hobbit-girls.
            </p>
          </div>
          <div className="flex flex-col gap-4 aspect-video w-full rounded-md">
            <FloorPlan
              curFloor={floor}
              curRoom={room}
              floors={floors}
              viewMode={viewMode}
              handleClick={handleClick}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p>
              By some curious chance one morning long ago in the quiet of the
              world, when there was less noise and more green, and the hobbits
              were still numerous and prosperous, and Bilbo Baggins was standing
              at his door after breakfast smoking an enormous long wooden pipe
              that reached nearly down to his woolly toes (neatly brushed) -
              Gandalf came by. Gandalf!
            </p>
            <p>
              If you had heard only a quarter of what I have heard about him,
              and I have only heard very little of all there is to hear, you
              would be prepared for any sort I of remarkable tale. Tales and
              adventures sprouted up all over the place wherever he went, in the
              most extraordinary fashion.
            </p>
            <p>
              He had not been down that way under The Hill for ages and ages,
              not since his friend the Old Took died, in fact, and the hobbits
              had almost forgotten what he looked like. He had been away over
              The Hill and across The Water on business of his own since they
              were all small hobbit-boys and hobbit-girls.
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4 p-4 bg-foreground rounded-md">
            <p className="text-slate-500">Detaljer om arrangement</p>
            <span>
              <p className="font-bold">Arrangør</p>
              <p>Elminister Aumar</p>
            </span>
            <span>
              <p className="font-bold">Rollespill</p>
              <p>Skate wizards TTBG</p>
            </span>
            <span>
              <p className="font-bold">Pulje(r)</p>
              <p>Mandag kveld (18-23)</p>
              <p>Lørdag kveld (18-23)</p>
            </span>
            <hr />
            <span className="flex flex-col gap-2 text-xl">
              <p>Varer fra 4-5 timer</p>
              <p>Plass til 5 spillere</p>
              <p>Egnet for alle aldre</p>
              <p>Nybegynnervennlig</p>
              <p>Can be run in english</p>
            </span>
          </div>
          <div className="border rounded-md p-4">
            <FloorDetails floor={floor} room={room} />
          </div>
        </div>
      </div>
    </main>
  );
}
