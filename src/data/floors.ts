import { FloorProp } from "@/types/Rooms";

export const floors: FloorProp[] = [
  {
    floor: 0,
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
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }, {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }, {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 350, y: 275 },
          { x: 500, y: 275 },
          { x: 500, y: 375 },
          { x: 350, y: 375 },
        ],
        doors: [
          {
            x: 445,
            y: 375,
            type: "double",
            angle: 0
          }
        ]
      },
      {
        id: "room-1",
        label: "",
        type: "room",
        points: [
          { x: 0, y: 500 },
          { x: 300, y: 500 },
          { x: 300, y: 675 },
          { x: 0, y: 675 },
        ],
        doors: [
          {
            x: 200,
            y: 500,
            type: "left",
            angle: 270
          }, {
            x: 250,
            y: 500,
            type: "left",
            angle: 180
          }
        ]
      },
      {
        id: "room-2",
        label: "",
        type: "room",
        points: [
          { x: 300, y: 500 },
          { x: 600, y: 500 },
          { x: 600, y: 675 },
          { x: 300, y: 675 },
        ],
        doors: [
          {
            x: 350,
            y: 500,
            type: "left",
            angle: 270
          }, {
            x: 400,
            y: 500,
            type: "left",
            angle: 180
          }
        ]
      },
      {
        id: "room-3",
        label: "",
        type: "room",
        points: [
          { x: 600, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 675 },
          { x: 600, y: 675 },
        ],
        doors: [
          {
            x: 650,
            y: 500,
            type: "left",
            angle: 270
          }, {
            x: 700,
            y: 500,
            type: "left",
            angle: 180
          }
        ]
      },
      {
        id: "room-4",
        label: "",
        type: "room",
        points: [
          { x: 500, y: 275 },
          { x: 850, y: 275 },
          { x: 850, y: 375 },
          { x: 500, y: 375 },
        ],
        doors: [
          {
            x: 675,
            y: 375,
            type: "right",
            angle: 90
          }, {
            x: 700,
            y: 400,
            type: "right",
            angle: 180
          }
        ]
      },
      {
        id: "utility-1",
        label: "",
        type: "utility",
        points: [
          { x: 0, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 375 },
          { x: 300, y: 375 },
          { x: 300, y: 325 },
          { x: 200, y: 325 },
          { x: 200, y: 375 },
          { x: 0, y: 375 },
        ],
      },
      {
        id: "utility-2",
        label: "",
        type: "utility",
        points: [
          { x: 0, y: 375 },
          { x: 100, y: 375 },
          { x: 100, y: 500 },
          { x: 0, y: 500 },
        ],
      },
    ],
  },
  {
    floor: 1,
    label: "Lobby",
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 350, y: 275 },
          { x: 500, y: 275 },
          { x: 500, y: 375 },
          { x: 350, y: 375 },
        ],
        doors: [
          {
            x: 400,
            y: 375,
            type: "double",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }, {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }
    ],
  }, {
    floor: 2,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      },
      {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 200, y: 375 },
          { x: 400, y: 375 },
          { x: 400, y: 500 },
          { x: 200, y: 500 },
        ],
        doors: [
          {
            x: 200,
            y: 410,
            type: "left",
            angle: 0,
          }, {
            x: 200,
            y: 440,
            type: "right",
            angle: 0,
          }
        ],
      }, {
        id: "stair-3",
        type: "stair",
        points: [
          { x: 350, y: 275 },
          { x: 500, y: 275 },
          { x: 500, y: 375 },
          { x: 350, y: 375 },
        ],
        doors: [
          {
            x: 350,
            y: 375,
            type: "double",
            angle: 0
          }
        ]
      },
      {
        id: "stair-4",
        type: "stair",
        points: [
          { x: 200, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 50 },
          { x: 200, y: 50 },
        ],
        doors: [
          {
            x: 200,
            y: 20,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }
    ],
  },
  {
    floor: 3,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      },
      {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 200, y: 375 },
          { x: 400, y: 375 },
          { x: 400, y: 500 },
          { x: 200, y: 500 },
        ],
        doors: [
          {
            x: 200,
            y: 410,
            type: "left",
            angle: 0,
          }, {
            x: 200,
            y: 440,
            type: "right",
            angle: 0,
          }
        ],
      },
      {
        id: "stair-3",
        type: "stair",
        points: [
          { x: 200, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 50 },
          { x: 200, y: 50 },
        ],
        doors: [
          {
            x: 200,
            y: 20,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      }
    ],
  },
  {
    floor: 4,
    rooms: [
      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      },
      {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 200, y: 375 },
          { x: 400, y: 375 },
          { x: 400, y: 500 },
          { x: 200, y: 500 },
        ],
        doors: [
          {
            x: 200,
            y: 410,
            type: "left",
            angle: 0,
          }, {
            x: 200,
            y: 440,
            type: "right",
            angle: 0,
          }
        ],
      },
      {
        id: "stair-3",
        type: "stair",
        points: [
          { x: 200, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 50 },
          { x: 200, y: 50 },
        ],
        doors: [
          {
            x: 200,
            y: 20,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
    ],
  },
  {
    floor: 5,
    label: "Mini-con",
    rooms: [
      {
        id: "room-1",
        label: "",
        type: "utility",
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 260 },
          { x: 150, y: 260 },
          { x: 150, y: 0 },
        ],
        doors: [{ type: "left", x: 150, y: 120, angle: 0 }],
      },
      {
        id: "room-2",
        type: "room",
        points: [
          { x: 0, y: 350 },
          { x: 0, y: 675 },
          { x: 150, y: 675 },
          { x: 150, y: 350 },
        ],
        doors: [{ type: "right", x: 150, y: 450, angle: 0 }],
      },
      {
        id: "room-3",
        type: "room",
        points: [
          { x: 150, y: 550 },
          { x: 150, y: 675 },
          { x: 300, y: 675 },
          { x: 300, y: 550 },
        ],
        doors: [{ type: "right", x: 180, y: 550, angle: 270 }],
      },
      {
        id: "room-4",
        type: "room",
        points: [
          { x: 300, y: 550 },
          { x: 300, y: 675 },
          { x: 500, y: 675 },
          { x: 500, y: 550 },
        ],
        doors: [{ type: "right", x: 325, y: 550, angle: 270 }],
      },
      {
        id: "room-5",
        type: "utility",
        points: [
          { x: 500, y: 550 },
          { x: 500, y: 675 },
          { x: 700, y: 675 },
          { x: 700, y: 550 },
        ],
        doors: [{ type: "right", x: 600, y: 525, angle: 0 }],
      },
      {
        id: "room-6",
        type: "utility",
        points: [
          { x: 700, y: 550 },
          { x: 700, y: 675 },
          { x: 850, y: 675 },
          { x: 850, y: 550 },
        ],
        doors: [{ type: "right", x: 725, y: 525, angle: 0 }],
      },
      {
        id: "room-7",
        type: "utility",
        points: [
          { x: 550, y: 375 },
          { x: 550, y: 500 },
          { x: 750, y: 500 },
          { x: 750, y: 375 },
        ],
        doors: [{ type: "right", x: 650, y: 500, angle: 90 }],
      },
      {
        id: "room-8",
        type: "utility",
        points: [
          { x: 200, y: 200 },
          { x: 325, y: 200 },
          { x: 325, y: 275 },
          { x: 200, y: 275 },
        ],
        doors: [{ type: "right", x: 200, y: 250, angle: 180 }],
      },
      {
        id: "room-9",
        type: "utility",
        points: [
          { x: 200, y: 50 },
          { x: 325, y: 50 },
          { x: 325, y: 200 },
          { x: 200, y: 200 },
        ],
        doors: [{ type: "right", x: 175, y: 145, angle: 270 }],
      },
      {
        id: "utility-1",
        type: "utility",
        points: [
          { x: 120, y: 500 },
          { x: 150, y: 500 },
          { x: 150, y: 600 },
          { x: 120, y: 600 },
          { x: 120, y: 575 },
          { x: 100, y: 575 },
          { x: 100, y: 550 },
          { x: 120, y: 550 },
        ],
        doors: [{
          type: "right", x: 150, y: 510, angle: 0
        }],
      },
      {
        id: "utility-2",
        type: "utility",
        points: [
          { x: 475, y: 375 },
          { x: 550, y: 375 },
          { x: 550, y: 500 },
          { x: 500, y: 500 },
          { x: 500, y: 450 },
          { x: 475, y: 450 },
        ],
        doors: [{
          type: "right", x: 540, y: 500, angle: 90
        }],
      },
      {
        id: "utility-3",
        type: "utility",
        points: [
          { x: 450, y: 450 },
          { x: 500, y: 450 },
          { x: 500, y: 500 },
          { x: 450, y: 500 },
        ],
        doors: [{
          type: "left", x: 485, y: 500, angle: 90
        }],
      },
      {
        id: "utility-4",
        type: "utility",
        points: [
          { x: 400, y: 375 },
          { x: 475, y: 375 },
          { x: 475, y: 450 },
          { x: 450, y: 450 },
          { x: 450, y: 500 },
          { x: 400, y: 500 },
        ],
        doors: [{
          type: "right", x: 435, y: 500, angle: 90
        }],
      },
      {
        id: "utility-5",
        type: "utility",
        points: [
          { x: 200, y: 275 },
          { x: 325, y: 275 },
          { x: 325, y: 325 },
          { x: 200, y: 325 },
        ],
        doors: [{
          type: "left", x: 200, y: 290, angle: 90
        }],
      },
      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      },
      {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 200, y: 375 },
          { x: 400, y: 375 },
          { x: 400, y: 500 },
          { x: 200, y: 500 },
        ],
        doors: [
          {
            x: 200,
            y: 410,
            type: "left",
            angle: 0,
          }, {
            x: 200,
            y: 440,
            type: "right",
            angle: 0,
          }
        ],
      },
      {
        id: "stair-3",
        type: "stair",
        points: [
          { x: 200, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 50 },
          { x: 200, y: 50 },
        ],
        doors: [
          {
            x: 200,
            y: 20,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "toilet-1",
        type: "bathroom",
        points: [
          { x: 0, y: 260 },
          { x: 0, y: 350 },
          { x: 150, y: 350 },
          { x: 150, y: 260 },
        ],
        doors: [
          {
            x: 150,
            y: 310,
            type: "left",
            angle: 0
          }, {
            x: 50,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 80,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 110,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 140,
            y: 300,
            type: "right",
            angle: 90
          }
        ]
      },
      {
        id: "toilet-2",
        type: "bathroom",
        points: [
          { x: 750, y: 375 },
          { x: 750, y: 500 },
          { x: 800, y: 500 },
          { x: 800, y: 375 },
        ],
        doors: [
          {
            x: 790,
            y: 525,
            type: "right",
            angle: 180
          }
        ]
      },
    ],
  },
  {
    floor: 6,
    label: "Hoved område",
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
        doors: [{ type: "left", x: 150, y: 120, angle: 0 }],
      },
      {
        id: "room-2",
        type: "room",
        points: [
          { x: 0, y: 350 },
          { x: 0, y: 675 },
          { x: 150, y: 675 },
          { x: 150, y: 350 },
        ],
        doors: [{ type: "right", x: 150, y: 450, angle: 0 }],
      },
      {
        id: "room-3",
        type: "room",
        points: [
          { x: 150, y: 550 },
          { x: 150, y: 675 },
          { x: 300, y: 675 },
          { x: 300, y: 550 },
        ],
        doors: [{ type: "right", x: 180, y: 550, angle: 270 }],
      },
      {
        id: "room-4",
        type: "room",
        points: [
          { x: 300, y: 550 },
          { x: 300, y: 675 },
          { x: 500, y: 675 },
          { x: 500, y: 550 },
        ],
        doors: [{ type: "right", x: 325, y: 550, angle: 270 }],
      },
      {
        id: "room-5",
        type: "room",
        points: [
          { x: 500, y: 550 },
          { x: 500, y: 675 },
          { x: 700, y: 675 },
          { x: 700, y: 550 },
        ],
        doors: [{ type: "right", x: 600, y: 525, angle: 0 }],
      },
      {
        id: "room-6",
        type: "room",
        points: [
          { x: 700, y: 550 },
          { x: 700, y: 675 },
          { x: 850, y: 675 },
          { x: 850, y: 550 },
        ],
        doors: [{ type: "right", x: 725, y: 525, angle: 0 }],
      },
      {
        id: "room-7",
        type: "room",
        points: [
          { x: 550, y: 375 },
          { x: 550, y: 500 },
          { x: 750, y: 500 },
          { x: 750, y: 375 },
        ],
        doors: [{ type: "right", x: 650, y: 500, angle: 90 }],
      },
      {
        id: "room-8",
        type: "room",
        points: [
          { x: 200, y: 200 },
          { x: 325, y: 200 },
          { x: 325, y: 275 },
          { x: 200, y: 275 },
        ],
        doors: [{ type: "right", x: 200, y: 250, angle: 180 }],
      },
      {
        id: "room-9",
        type: "room",
        points: [
          { x: 200, y: 50 },
          { x: 325, y: 50 },
          { x: 325, y: 200 },
          { x: 200, y: 200 },
        ],
        doors: [{ type: "right", x: 175, y: 145, angle: 270 }],
      },
      {
        id: "utility-1",
        type: "utility",
        points: [
          { x: 120, y: 500 },
          { x: 150, y: 500 },
          { x: 150, y: 600 },
          { x: 120, y: 600 },
          { x: 120, y: 575 },
          { x: 100, y: 575 },
          { x: 100, y: 550 },
          { x: 120, y: 550 },
        ],
        doors: [{
          type: "right", x: 150, y: 510, angle: 0
        }],
      },
      {
        id: "utility-2",
        type: "utility",
        points: [
          { x: 475, y: 375 },
          { x: 550, y: 375 },
          { x: 550, y: 500 },
          { x: 500, y: 500 },
          { x: 500, y: 450 },
          { x: 475, y: 450 },
        ],
        doors: [{
          type: "right", x: 540, y: 500, angle: 90
        }],
      },
      {
        id: "utility-3",
        type: "utility",
        points: [
          { x: 450, y: 450 },
          { x: 500, y: 450 },
          { x: 500, y: 500 },
          { x: 450, y: 500 },
        ],
        doors: [{
          type: "left", x: 485, y: 500, angle: 90
        }],
      },
      {
        id: "utility-4",
        type: "utility",
        points: [
          { x: 400, y: 375 },
          { x: 475, y: 375 },
          { x: 475, y: 450 },
          { x: 450, y: 450 },
          { x: 450, y: 500 },
          { x: 400, y: 500 },
        ],
        doors: [{
          type: "right", x: 435, y: 500, angle: 90
        }],
      },
      {
        id: "utility-5",
        type: "utility",
        points: [
          { x: 200, y: 275 },
          { x: 325, y: 275 },
          { x: 325, y: 325 },
          { x: 200, y: 325 },
        ],
        doors: [{
          type: "left", x: 200, y: 290, angle: 90
        }],
      },

      {
        id: "stair-1",
        type: "stair",
        points: [
          { x: 800, y: 375 },
          { x: 800, y: 500 },
          { x: 850, y: 500 },
          { x: 850, y: 375 },
        ],
        doors: [
          {
            x: 805,
            y: 475,
            type: "right",
            angle: 0
          }
        ]
      },
      {
        id: "stair-2",
        type: "stair",
        points: [
          { x: 200, y: 375 },
          { x: 400, y: 375 },
          { x: 400, y: 500 },
          { x: 200, y: 500 },
        ],
        doors: [
          {
            x: 200,
            y: 410,
            type: "left",
            angle: 0,
          }, {
            x: 200,
            y: 440,
            type: "right",
            angle: 0,
          }
        ],
      },
      {
        id: "stair-3",
        type: "stair",
        points: [
          { x: 200, y: 0 },
          { x: 325, y: 0 },
          { x: 325, y: 50 },
          { x: 200, y: 50 },
        ],
        doors: [
          {
            x: 200,
            y: 20,
            type: "right",
            angle: 0
          }
        ]
      }, {
        id: "elevator-1",
        type: "elevator",
        points: [
          { x: 200, y: 325 },
          { x: 250, y: 325 },
          { x: 250, y: 375 },
          { x: 200, y: 375 },
        ],
        doors: [
          {
            x: 210,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "elevator-2",
        type: "elevator",
        points: [
          { x: 250, y: 325 },
          { x: 300, y: 325 },
          { x: 300, y: 375 },
          { x: 250, y: 375 },
        ],
        doors: [
          {
            x: 260,
            y: 375,
            type: "sliding",
            angle: 0
          }
        ]
      },
      {
        id: "toilet-1",
        type: "bathroom",
        points: [
          { x: 0, y: 260 },
          { x: 0, y: 350 },
          { x: 150, y: 350 },
          { x: 150, y: 260 },
        ],
        doors: [
          {
            x: 150,
            y: 310,
            type: "left",
            angle: 0
          }, {
            x: 50,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 80,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 110,
            y: 300,
            type: "left",
            angle: 90
          }, {
            x: 140,
            y: 300,
            type: "right",
            angle: 90
          }
        ]
      },
      {
        id: "toilet-2",
        type: "bathroom",
        points: [
          { x: 750, y: 375 },
          { x: 750, y: 500 },
          { x: 800, y: 500 },
          { x: 800, y: 375 },
        ],
        doors: [
          {
            x: 790,
            y: 525,
            type: "right",
            angle: 180
          }
        ]
      },
    ],
  },
];
