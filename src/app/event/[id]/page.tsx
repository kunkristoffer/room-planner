import { testEvents } from "@/data/events";
import { Suspense } from "react";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import Image from "next/image";
import Link from "next/link";
import { FloorDialog } from "@/components/ui/modals/FloorDialog";

export async function generateStaticParams() {
  return testEvents.map((event) => ({
    id: event.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = testEvents.find((event) => event.id === id);
  if (!event) return null;

  return (
    <main className="flex-1 container mx-auto flex flex-col gap-4 p-4">
      <div className="relative aspect-3/1 rounded-md mb-12">
        <Image
          src={event.media.coverImage}
          alt="game picture"
          fill
          loading="eager"
          className="z-0"
        />
        <div className="md:absolute left-1/2 bottom-0 md:max-w-2/3 md:-translate-x-1/2 translate-y-1/2 flex flex-col p-4 bg-background rounded-md">
          <h1 className="text-center text-4xl">{event.title}</h1>
          <p className="">{event.description}</p>
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
            {event.content.map((para, i) => (
              <p key={`${event.id}-para-${i}`}>{para}</p>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-4 p-4 bg-foreground rounded-md">
            <p className="text-slate-500">Detaljer om arrangement</p>
            <span>
              <p className="font-bold">Arrangør</p>
              <p>{event.metadata.authorId}</p>
            </span>
            <span>
              <p className="font-bold">{event.metadata.type}</p>
              <p>{event.metadata.subtype}</p>
            </span>
            <span>
              <p className="font-bold">Pulje(r)</p>
              {event.slots.map((slot) => (
                <p key={slot}>{slot}</p>
              ))}
            </span>
            <hr />
            <span className="flex flex-col gap-2 text-xl">
              <p>Varer fra {event.metadata.durationHours} timer</p>
              <p>Plass til {event.metadata.maxPlayers} spillere</p>
              <p>Egnet for {event.metadata.audience}</p>
              <p>
                {event.metadata.beginnerFriendly
                  ? "Nybegynnervennlig"
                  : "Viderekommende"}
              </p>
              <p>
                {event.metadata.englishFriendly
                  ? "Can be run in english"
                  : "Kun tilgjengelig som Norsk"}
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-foreground rounded-md">
            <Link
              href={`/full?floor=${event.metadata.floor}&room=${event.metadata.roomId}`}
              className="p-2 w-full text-center rounded-md bg-foreground hover:brightness-110 border border-gray-600 shadow-md hover:shadow-gray-900/80"
            >
              Åpne rom i permalink
            </Link>
            <FloorDialog
              floor={event.metadata.floor}
              room={event.metadata.roomId}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
