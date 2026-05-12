import { FloorDetails } from "@/components/floorPlanner/FloorDetails";
import { FloorPlan } from "@/components/floorPlanner/FloorPlan";
import { floors } from "@/data/floors";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex-1 container mx-auto flex flex-col gap-8 p-4">
      <Suspense>
        <div className="aspect-square">
          <FloorPlan floors={floors} />
        </div>
        <div>
            <FloorDetails />
        </div>
      </Suspense>
    </main>
  );
}
