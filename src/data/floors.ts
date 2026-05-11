import { FloorProp } from "@/types/Rooms";

export const floors: FloorProp[] = [
    {
        floor: -1,
        label: "kjeller",
        rooms: [
            {
                id: "elevator-1",
                type: "elevator",
                points: [
                    { x: 200, y: 325 },
                    { x: 250, y: 325 },
                    { x: 250, y: 375 },
                    { x: 200, y: 375 },
                ],
            }, {
                id: "elevator-2",
                type: "elevator",
                points: [
                    { x: 250, y: 325 },
                    { x: 300, y: 325 },
                    { x: 300, y: 375 },
                    { x: 250, y: 375 },
                ],
            }, {
                id: "stair-1",
                type: "stair",
                points: [
                    { x: 200, y: 375 },
                    { x: 400, y: 375 },
                    { x: 400, y: 500 },
                    { x: 200, y: 500 },
                ],
            }
        ],
    }, {
        floor: 0,
        label: "Lobby",
        rooms: [
            {
                id: "elevator-1",
                type: "elevator",
                points: [
                    { x: 200, y: 325 },
                    { x: 250, y: 325 },
                    { x: 250, y: 375 },
                    { x: 200, y: 375 },
                ],
            }, {
                id: "elevator-2",
                type: "elevator",
                points: [
                    { x: 250, y: 325 },
                    { x: 300, y: 325 },
                    { x: 300, y: 375 },
                    { x: 250, y: 375 },
                ],
            }, {
                id: "stair-1",
                type: "stair",
                points: [
                    { x: 200, y: 375 },
                    { x: 400, y: 375 },
                    { x: 400, y: 500 },
                    { x: 200, y: 500 },
                ],
            }
        ],
    }, {
        floor: 6,
        label: "test",
        rooms: [
            {
                id: "room-1",
                label: "Pølsevev",
                type: "room",
                points: [
                    { x: 0, y: 0 },
                    { x: 0, y: 260 },
                    { x: 150, y: 260 },
                    { x: 150, y: 0 },
                ],
            }, {
                id: "room-2",
                type: "room",
                points: [
                    { x: 0, y: 350 },
                    { x: 0, y: 675 },
                    { x: 150, y: 675 },
                    { x: 150, y: 350 },
                ],
            }, {
                id: "room-3",
                type: "room",
                points: [
                    { x: 150, y: 550 },
                    { x: 150, y: 675 },
                    { x: 300, y: 675 },
                    { x: 300, y: 550 },
                ],
            }, {
                id: "room-4",
                type: "room",
                points: [
                    { x: 300, y: 550 },
                    { x: 300, y: 675 },
                    { x: 500, y: 675 },
                    { x: 500, y: 550 },
                ],
            }, {
                id: "room-5",
                type: "room",
                points: [
                    { x: 500, y: 550 },
                    { x: 500, y: 675 },
                    { x: 700, y: 675 },
                    { x: 700, y: 550 },
                ],
            }, {
                id: "room-6",
                type: "room",
                points: [
                    { x: 700, y: 550 },
                    { x: 700, y: 675 },
                    { x: 850, y: 675 },
                    { x: 850, y: 550 },
                ],
            }, {
                id: "room-7",
                type: "room",
                points: [
                    { x: 550, y: 375 },
                    { x: 550, y: 500 },
                    { x: 750, y: 500 },
                    { x: 750, y: 375 },
                ],
            }, {
                id: "room-8",
                type: "room",
                points: [
                    { x: 200, y: 200 },
                    { x: 325, y: 200 },
                    { x: 325, y: 275 },
                    { x: 200, y: 275 },
                ],
            }, {
                id: "room-9",
                type: "room",
                points: [
                    { x: 200, y: 50 },
                    { x: 325, y: 50 },
                    { x: 325, y: 200 },
                    { x: 200, y: 200 },
                ],
            }, {
                id: "utility-1",
                type: "utility",
                points: [
                    { x: 475, y: 375 },
                    { x: 550, y: 375 },
                    { x: 550, y: 500 },
                    { x: 500, y: 500 },
                    { x: 500, y: 450 },
                    { x: 475, y: 450 },
                ],
            }, {
                id: "utility-2",
                type: "utility",
                points: [
                    { x: 450, y: 450 },
                    { x: 500, y: 450 },
                    { x: 500, y: 500 },
                    { x: 450, y: 500 },
                ],
            }, {
                id: "utility-3",
                type: "utility",
                points: [
                    { x: 400, y: 375 },
                    { x: 475, y: 375 },
                    { x: 475, y: 450 },
                    { x: 450, y: 450 },
                    { x: 450, y: 500 },
                    { x: 400, y: 500 },
                ],
            }, {
                id: "utility-4",
                type: "utility",
                points: [
                    { x: 200, y: 275 },
                    { x: 325, y: 275 },
                    { x: 325, y: 325 },
                    { x: 200, y: 325 },
                ],
            }, {
                id: "elevator-1",
                type: "elevator",
                points: [
                    { x: 200, y: 325 },
                    { x: 250, y: 325 },
                    { x: 250, y: 375 },
                    { x: 200, y: 375 },
                ],
            }, {
                id: "elevator-2",
                type: "elevator",
                points: [
                    { x: 250, y: 325 },
                    { x: 300, y: 325 },
                    { x: 300, y: 375 },
                    { x: 250, y: 375 },
                ],
            }, {
                id: "stair-1",
                type: "stair",
                points: [
                    { x: 800, y: 375 },
                    { x: 800, y: 500 },
                    { x: 850, y: 500 },
                    { x: 850, y: 375 },
                ],
            }, {
                id: "stair-2",
                type: "stair",
                points: [
                    { x: 200, y: 375 },
                    { x: 400, y: 375 },
                    { x: 400, y: 500 },
                    { x: 200, y: 500 },
                ],
            }, {
                id: "stair-3",
                type: "stair",
                points: [
                    { x: 200, y: 0 },
                    { x: 325, y: 0 },
                    { x: 325, y: 50 },
                    { x: 200, y: 50 },
                ],
            }, {
                id: "toilet-1",
                type: "bathroom",
                points: [
                    { x: 0, y: 260 },
                    { x: 0, y: 350 },
                    { x: 150, y: 350 },
                    { x: 150, y: 260 },
                ],
            }, {
                id: "toilet-2",
                type: "bathroom",
                points: [
                    { x: 750, y: 375 },
                    { x: 750, y: 500 },
                    { x: 800, y: 500 },
                    { x: 800, y: 375 },
                ],
            }
        ],
    },
];