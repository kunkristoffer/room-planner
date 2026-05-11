import { FloorProp } from "@/types/Rooms";

export const floors: FloorProp[] = [
    {
        floor: -2,
        label: "kjeller",
        rooms: [
            {
                id: "room-1",
                label: "Pølsevev",
                type: "room",
                points: [
                    { x: 0, y: 0 },
                    { x: 0, y: 200 },
                    { x: 200, y: 200 },
                    { x: 200, y: 0 },
                ],
                doors: [{ x: 2, y: 3, angle: 90, type: "left" }],
                windows: [{ x: 10, y: 5, angle: 90 }],
                wallThickness: 10,
            },
        ],
    }, {
        floor: 0,
        label: "Lobby",
        rooms: []
    }, {
        floor: 6,
        label: "test",
        rooms: [
            {
                id: "room-1",
                label: "Ompalompa",
                type: "room",
                points: [
                    { x: 0, y: 0 },
                    { x: 0, y: 200 },
                    { x: 200, y: 200 },
                    { x: 200, y: 0 },
                ],
                doors: [{ x: 2, y: 3, angle: 90, type: "left" }],
                windows: [{ x: 10, y: 5, angle: 90 }],
                wallThickness: 10,
            },
        ],
    },
];