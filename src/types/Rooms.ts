export type ViewMode = "2D" | "3D"
export type RoomType = "room" | "bathroom" | "stair" | "elevator" | "utility";
type Coordinate = { x: number; y: number };
type Door = "left" | "right" | "double" | "sliding";
export interface Room {
    id: string;
    label?: string
    type: RoomType;
    points: Coordinate[];
    doors?: (Coordinate & { angle: number; type?: Door })[];
    windows?: (Coordinate & { angle: number; width?: number })[];
    wallThickness?: number;
}

export type FloorProp = { floor: number, label?: string, rooms: Room[] }