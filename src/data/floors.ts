import { FloorProp } from "@/types/Rooms";

export const floors: FloorProp[] = [
  {
    floor: 0,
    label: "kjeller",
    shape: "M0 375 H300 V375 H850 V675 H0 Z",
    rooms: [
      {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325, },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0, }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325, },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0, }
        ],
      }, {
        id: "stair-1",
        type: "stair",
        origin: { x: 350, y: 275, },
        points: [
          { x: 0, y: 0 },
          { x: 150, y: 0 },
          { x: 150, y: 100 },
          { x: 0, y: 100 }
        ],
        doors: [
          { x: 95, y: 100, type: "double", angle: 0 }
        ]
      }, {
        id: "room-1",
        type: "room",
        origin: { x: 0, y: 500, },
        points: [
          { x: 0, y: 0 },
          { x: 300, y: 0 },
          { x: 300, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 200, y: 0, type: "left", angle: 270, },
          { x: 250, y: 0, type: "left", angle: 180, }
        ],
      }, {
        id: "room-2",
        type: "room",
        origin: { x: 300, y: 500, },
        points: [
          { x: 0, y: 0 },
          { x: 300, y: 0 },
          { x: 300, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 50, y: 0, type: "left", angle: 270, },
          { x: 100, y: 0, type: "left", angle: 180, }
        ],
      }, {
        id: "room-3",
        type: "room",
        origin: { x: 600, y: 500, },
        points: [
          { x: 0, y: 0 },
          { x: 250, y: 0 },
          { x: 250, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 50, y: 0, type: "left", angle: 270, },
          { x: 100, y: 0, type: "left", angle: 180, }
        ],
      }, {
        id: "room-4",
        type: "room",
        origin: { x: 500, y: 275, },
        points: [
          { x: 0, y: 0 },
          { x: 350, y: 0 },
          { x: 350, y: 100 },
          { x: 0, y: 100 }
        ],
        doors: [
          { x: 175, y: 100, type: "right", angle: 90 },
          { x: 200, y: 125, type: "right", angle: 180 }
        ]
      }, {
        id: "utility-1",
        origin: { x: 0, y: 375 },
        type: "utility",
        points: [
          { x: 0, y: 0 },
          { x: 100, y: 0 },
          { x: 100, y: 125 },
          { x: 0, y: 125 }
        ],
      },
    ]
  },
  {
    floor: 1,
    label: "Lobby",
    shape: "M0 275 H300 V375 H850 V675 H0 Z",
    rooms: [
      {
        id: "room-1",
        type: "room",
        label: "lounge",
        origin: { x: 0, y: 500 },
        points: [
          { x: 0, y: 0 },
          { x: 300, y: 0 },
          { x: 300, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 150, y: 0, type: "double", angle: 0 }
        ],
      }, {
        id: "room-2",
        type: "room",
        origin: { x: 300, y: 500 },
        points: [
          { x: 0, y: 0 },
          { x: 300, y: 0 },
          { x: 300, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 50, y: 0, type: "double", angle: 0 }
        ],
      }, {
        id: "room-3",
        type: "room",
        origin: { x: 600, y: 500 },
        points: [
          { x: 0, y: 0 },
          { x: 250, y: 0 },
          { x: 250, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 50, y: 0, type: "double", angle: 0 }
        ],
      }, {
        id: "room-4",
        type: "room",
        origin: { x: 500, y: 200 },
        points: [
          { x: 0, y: 0 },
          { x: 350, y: 0 },
          { x: 350, y: 175 },
          { x: 0, y: 175 }
        ],
        doors: [
          { x: 150, y: 175, type: "double", angle: 0 },
        ],
      }, {
        id: "utility-1",
        type: "utility",
        origin: { x: 0, y: 275 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 100 },
          { x: 0, y: 100 }
        ],
      }, {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 350, y: 275 },
        points: [
          { x: 0, y: 0 },
          { x: 150, y: 0 },
          { x: 150, y: 100 },
          { x: 0, y: 100 }
        ],
        doors: [
          { x: 50, y: 100, type: "double", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      },

      {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      },
    ],
  }, {
    floor: 2,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 200, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { x: 0, y: 35, type: "left", angle: 0 },
          { x: 0, y: 65, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        origin: { x: 350, y: 275 },
        points: [
          { x: 0, y: 0 },
          { x: 150, y: 0 },
          { x: 150, y: 100 },
          { x: 0, y: 100 }
        ],
        doors: [
          { x: 0, y: 100, type: "double", angle: 0 }
        ],
      }, {
        id: "stair-4",
        type: "stair",
        origin: { x: 200, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 0, y: 20, type: "right", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      },
    ],
  }, {
    floor: 3,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 200, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { x: 0, y: 35, type: "left", angle: 0 },
          { x: 0, y: 65, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        origin: { x: 200, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 0, y: 20, type: "right", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      },
    ],
  }, {
    floor: 4,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 200, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { x: 0, y: 35, type: "left", angle: 0 },
          { x: 0, y: 65, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        origin: { x: 200, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 0, y: 20, type: "right", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      },
    ],
  },
  {
    floor: 5,
    label: "Mini-con",
    rooms: [
      {
        id: "room-1",
        type: "room",
        origin: { x: 0, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 260 },
          { x: 150, y: 260 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "left", x: 150, y: 120, angle: 0 }
        ],
      }, {
        id: "room-2",
        type: "room",
        origin: { x: 0, y: 350 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 325 },
          { x: 150, y: 325 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 150, y: 100, angle: 0 }
        ],
      }, {
        id: "room-3",
        type: "room",
        origin: { x: 150, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 150, y: 125 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 30, y: 0, angle: 270 }
        ],
      }, {
        id: "room-4",
        type: "room",
        origin: { x: 300, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 25, y: 0, angle: 270 }
        ],
      }, {
        id: "room-5",
        type: "room",
        origin: { x: 500, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 100, y: -25, angle: 0 }
        ],
      }, {
        id: "room-6",
        type: "room",
        origin: { x: 700, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 150, y: 125 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 25, y: -25, angle: 0 }
        ],
      }, {
        id: "room-7",
        type: "room",
        origin: { x: 550, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 100, y: 125, angle: 90 }
        ],
      }, {
        id: "room-8",
        type: "room",
        origin: { x: 200, y: 200 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 75 },
          { x: 0, y: 75 }
        ],
        doors: [
          { type: "right", x: 0, y: 50, angle: 180 }
        ],
      }, {
        id: "room-9",
        type: "room",
        origin: { x: 200, y: 50 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 150 },
          { x: 0, y: 150 }
        ],
        doors: [
          { type: "right", x: -25, y: 95, angle: 270 }
        ],
      }, {
        id: "utility-1",
        type: "utility",
        origin: { x: 100, y: 500 },
        points: [
          { x: 20, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 100 },
          { x: 20, y: 100 },
          { x: 20, y: 75 },
          { x: 0, y: 75 },
          { x: 0, y: 50 },
          { x: 20, y: 50 }
        ],
        doors: [
          { type: "right", x: 50, y: 10, angle: 0 }
        ],
      }, {
        id: "utility-2",
        type: "utility",
        origin: { x: 475, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 75, y: 0 },
          { x: 75, y: 125 },
          { x: 25, y: 125 },
          { x: 25, y: 75 },
          { x: 0, y: 75 }
        ],
        doors: [
          { type: "right", x: 65, y: 125, angle: 90 }
        ],
      }, {
        id: "utility-3",
        type: "utility",
        origin: { x: 450, y: 450 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { type: "left", x: 35, y: 50, angle: 90 }
        ],
      }, {
        id: "utility-4",
        type: "utility",
        origin: { x: 400, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 75, y: 0 },
          { x: 75, y: 75 },
          { x: 50, y: 75 },
          { x: 50, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { type: "right", x: 35, y: 125, angle: 90 }
        ],
      }, {
        id: "utility-5",
        type: "utility",
        origin: { x: 200, y: 275 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { type: "left", x: 0, y: 15, angle: 90 }
        ],
      }, {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 200, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { x: 0, y: 35, type: "left", angle: 0 },
          { x: 0, y: 65, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        origin: { x: 200, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 0, y: 20, type: "right", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "toilet-1",
        type: "bathroom",
        origin: { x: 0, y: 260 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 90 },
          { x: 150, y: 90 },
          { x: 150, y: 0 }
        ],
        doors: [
          { x: 150, y: 50, type: "left", angle: 0 },
          { x: 50, y: 40, type: "left", angle: 90 },
          { x: 80, y: 40, type: "left", angle: 90 },
          { x: 110, y: 40, type: "left", angle: 90 },
          { x: 140, y: 40, type: "right", angle: 90 }
        ],
      }, {
        id: "toilet-2",
        type: "bathroom",
        origin: { x: 750, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 40, y: 150, type: "right", angle: 180 }
        ]
      }
    ]
  },
  {
    floor: 6,
    label: "Hoved område",
    rooms: [
      {
        id: "room-1",
        type: "room",
        origin: { x: 0, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 260 },
          { x: 150, y: 260 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "left", x: 150, y: 120, angle: 0 }
        ],
      }, {
        id: "room-2",
        type: "room",
        origin: { x: 0, y: 350 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 325 },
          { x: 150, y: 325 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 150, y: 100, angle: 0 }
        ],
      }, {
        id: "room-3",
        type: "room",
        origin: { x: 150, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 150, y: 125 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 30, y: 0, angle: 270 }
        ],
      }, {
        id: "room-4",
        type: "room",
        origin: { x: 300, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 25, y: 0, angle: 270 }
        ],
      }, {
        id: "room-5",
        type: "room",
        origin: { x: 500, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 100, y: -25, angle: 0 }
        ],
      }, {
        id: "room-6",
        type: "room",
        origin: { x: 700, y: 550 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 150, y: 125 },
          { x: 150, y: 0 }
        ],
        doors: [
          { type: "right", x: 25, y: -25, angle: 0 }
        ],
      }, {
        id: "room-7",
        type: "room",
        origin: { x: 550, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 200, y: 125 },
          { x: 200, y: 0 }
        ],
        doors: [
          { type: "right", x: 100, y: 125, angle: 90 }
        ],
      }, {
        id: "room-8",
        type: "room",
        origin: { x: 200, y: 200 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 75 },
          { x: 0, y: 75 }
        ],
        doors: [
          { type: "right", x: 0, y: 50, angle: 180 }
        ],
      }, {
        id: "room-9",
        type: "room",
        origin: { x: 200, y: 50 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 150 },
          { x: 0, y: 150 }
        ],
        doors: [
          { type: "right", x: -25, y: 95, angle: 270 }
        ],
      }, {
        id: "utility-1",
        type: "utility",
        origin: { x: 100, y: 500 },
        points: [
          { x: 20, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 100 },
          { x: 20, y: 100 },
          { x: 20, y: 75 },
          { x: 0, y: 75 },
          { x: 0, y: 50 },
          { x: 20, y: 50 }
        ],
        doors: [
          { type: "right", x: 50, y: 10, angle: 0 }
        ],
      }, {
        id: "utility-2",
        type: "utility",
        origin: { x: 475, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 75, y: 0 },
          { x: 75, y: 125 },
          { x: 25, y: 125 },
          { x: 25, y: 75 },
          { x: 0, y: 75 }
        ],
        doors: [
          { type: "right", x: 65, y: 125, angle: 90 }
        ],
      }, {
        id: "utility-3",
        type: "utility",
        origin: { x: 450, y: 450 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { type: "left", x: 35, y: 50, angle: 90 }
        ],
      }, {
        id: "utility-4",
        type: "utility",
        origin: { x: 400, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 75, y: 0 },
          { x: 75, y: 75 },
          { x: 50, y: 75 },
          { x: 50, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { type: "right", x: 35, y: 125, angle: 90 }
        ],
      }, {
        id: "utility-5",
        type: "utility",
        origin: { x: 200, y: 275 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { type: "left", x: 0, y: 15, angle: 90 }
        ],
      }, {
        id: "stair-1",
        type: "stair",
        origin: { x: 800, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 5, y: 100, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-2",
        type: "stair",
        origin: { x: 200, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 200, y: 0 },
          { x: 200, y: 125 },
          { x: 0, y: 125 }
        ],
        doors: [
          { x: 0, y: 35, type: "left", angle: 0 },
          { x: 0, y: 65, type: "right", angle: 0 }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        origin: { x: 200, y: 0 },
        points: [
          { x: 0, y: 0 },
          { x: 125, y: 0 },
          { x: 125, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 0, y: 20, type: "right", angle: 0 }
        ],
      }, {
        id: "elevator-1",
        type: "elevator",
        origin: { x: 200, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "elevator-2",
        type: "elevator",
        origin: { x: 250, y: 325 },
        points: [
          { x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }
        ],
        doors: [
          { x: 10, y: 50, type: "sliding", angle: 0 }
        ],
      }, {
        id: "toilet-1",
        type: "bathroom",
        origin: { x: 0, y: 260 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 90 },
          { x: 150, y: 90 },
          { x: 150, y: 0 }
        ],
        doors: [
          { x: 150, y: 50, type: "left", angle: 0 },
          { x: 50, y: 40, type: "left", angle: 90 },
          { x: 80, y: 40, type: "left", angle: 90 },
          { x: 110, y: 40, type: "left", angle: 90 },
          { x: 140, y: 40, type: "right", angle: 90 }
        ],
      }, {
        id: "toilet-2",
        type: "bathroom",
        origin: { x: 750, y: 375 },
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 125 },
          { x: 50, y: 125 },
          { x: 50, y: 0 }
        ],
        doors: [
          { x: 40, y: 150, type: "right", angle: 180 }
        ]
      }
    ]
  }
];
