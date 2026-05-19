import Image from "next/image";
import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import { floors } from "@/data/floors";
import { Suspense } from "react";
import { FloorDialog } from "@/components/ui/modals/FloorDialog";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto flex flex-col gap-4 p-4">
      <div className="relative aspect-3/1 rounded-md mb-12">
        <Image
          src="/game.png"
          alt="game picture"
          fill
          loading="eager"
          className="z-0"
        />
        <div className="md:absolute left-1/2 bottom-0 md:max-w-2/3 md:-translate-x-1/2 translate-y-1/2 flex flex-col p-4 bg-background rounded-md">
          <h1 className="text-center text-4xl">Event title</h1>
          <p className="">
            This is a one sentence subtitle that is used on the cards, repeated
            here as a lead-in
          </p>
        </div>
      </div>
      <div className="flex gap-4 max-sm:flex-col">
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
            <Suspense>
              <FloorPlan floors={floors} />
            </Suspense>
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
          <div className="border rounded-md p-4 flex flex-col gap-4">
            <FloorDialog floors={floors} />
            <Link
              target="_blank"
              href="/full?floor=7&room=room-1"
              className="p-2 w-full text-center rounded-md bg-foreground hover:brightness-110 border border-gray-600 shadow-md hover:shadow-gray-900/80"
            >
              Open permalink to room
            </Link>
            <Suspense>
              <FloorDetails />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
