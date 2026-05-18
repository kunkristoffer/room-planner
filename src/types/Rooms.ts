export type ViewMode = "2D" | "3D";
export type RoomType = "room" | "bathroom" | "stair" | "elevator" | "utility";

type Coordinate = { x: number; y: number };
type Door = "left" | "right" | "double" | "sliding";

/** Room desribes a shape and relevant details can be used to generate svg elements */
export interface Room {
  /** An unique identifier for this room */
  id: string;
  /** Opional human readable label */
  label?: string;
  /** Type of room dictates the shading, coloring and other effects ot the generated svg element */
  type: RoomType;
  /** A set of coordinates for creating rectangles or polygons, must at least have 4 elements */
  points: Coordinate[];
  /** Optional: Any doors related to this room */
  doors?: (Coordinate & { angle: number; type?: Door })[];
  /** Optional: Any windows related to this room */
  windows?: (Coordinate & { angle: number; width?: number })[];
  /** Optional: Override the default wall thickness, defaults to 2 (px) */
  wallThickness?: number;
}

export type FloorProp = {
  floor: number;
  label?: string;
  rooms: Room[],
  /** Optional: Override floor shape with path data */
  shape?: string
};
