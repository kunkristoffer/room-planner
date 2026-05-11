type RoomType = "room" | "bathroom";
type Coordinate = { x: number; y: number };
type Door = "left" | "right" | "double" | "sliding";

export interface Room {
    id: string;
    type: RoomType;
    points: Coordinate[];
    doors: (Coordinate & { angle: number; type?: Door })[];
    windows?: (Coordinate & { angle: number; width?: number })[];
    wallThickness?: number;
}

export type FloorProp = { floor: number, rooms: Room[] }