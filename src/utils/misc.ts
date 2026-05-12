import { FloorProp } from "@/types/Rooms";

/** Calculate the delta (difference) */
export function getDelta(val: number, length: number) {
    return Math.abs(val - length);
}

/** Clamp number */
export function clamp(val: number, min: number, max: number) {
    return Math.max(Math.min(val, max), min)
}

/** Fills inn missing numbers in an array, used for generating a full floor list based on missing entryes */
export function fillFloorNumbers(floors: FloorProp[]) {
    const floorNumbers = floors.map(floor => floor.floor)
    const min = Math.min(...floorNumbers)
    const max = Math.max(...floorNumbers)

    const missingFloors = Array.from({ length: max - min + 1 }, (_, i) => ({ floor: min + i, rooms: [] }) as FloorProp).filter(floor => !floorNumbers.includes(floor.floor))
    const filledFloors = [...floors, ...missingFloors].sort((cur, prev) => cur.floor - prev.floor)

    return filledFloors
}