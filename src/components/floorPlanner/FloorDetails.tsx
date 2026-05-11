"use client";

import { useSearchParams } from "next/navigation";

export function FloorDetails() {
  const searchParams = useSearchParams();

  const floor = Number(searchParams.get("floor")) ?? "1";
  const room = searchParams.get("room") ?? "";

  return (
    <div>
      <p>Current floor: {floor}</p>
      <p>Current room: {room}</p>
    </div>
  );
}
