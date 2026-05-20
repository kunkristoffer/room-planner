"use client";

import { MouseEvent, useRef } from "react";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";

interface FloorDialogProps {
  floor?: number;
  room?: string;
}

export function FloorDialog({ floor, room }: FloorDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleToggle(e: MouseEvent<HTMLDialogElement | HTMLButtonElement>) {
    e.stopPropagation();

    if (dialogRef.current) {
      const isOpen = dialogRef.current.open;
      if (isOpen) {
        dialogRef.current.close();
      } else {
        dialogRef.current.showModal();
      }
    }
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className="p-2 w-full rounded-md bg-foreground hover:brightness-110 border border-gray-600 shadow-md hover:shadow-gray-900/80"
      >
        Show room in dialog
      </button>
      <dialog
        className="fixed w-auto max-w-full h-auto max-h-full p-4 bg-transparent open:grid place-items-center backdrop-blur-xs backdrop-brightness-50"
        ref={dialogRef}
        closedby="any"
      >
        <div className="relative mx-auto container flex aspect-square lg:aspect-video bg-foreground rounded-md">
          <FloorPlan floor={floor} room={room} />
          <button
            type="button"
            className="absolute top-2 right-2 bg-background text-white rounded-full size-8 hover:brightness-110 z-50"
            onClick={handleToggle}
          >
            x
          </button>
        </div>
      </dialog>
    </>
  );
}
