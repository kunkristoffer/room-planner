import Image from "next/image";
import { testEvents } from "@/data/events";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto flex flex-col gap-4 p-4">
      <h2>Click links to open events</h2>
      {testEvents.map((event) => (
        <Link key={event.id} href={`/event/${event.id}`}>
          {event.title}
        </Link>
      ))}
    </main>
  );
}
