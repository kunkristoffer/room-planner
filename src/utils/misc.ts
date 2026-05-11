/** Calculate the delta (difference) */
export function getDelta(val: number, length: number) {
    return Math.abs(val - length);
}

/** Fills inn missing numbers in an array, used for generating a full floor list based on missing entryes */
export function fillFloorNumbers(floors: number[]) {
    const min = Math.min(...floors)
    const max = Math.max(...floors)

    return Array.from({ length: max - min + 1 }, (_, i) => min + i)
}