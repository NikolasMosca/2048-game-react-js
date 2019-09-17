
/*********************************************
 ******************** LEFT *******************
 *********************************************/
const MoveLeft = [
    {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 2, value: 2}
        ], 
        result: [ 
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 1, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 3, value: 2}
        ],
        result: [ 
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 1, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 3, position: 6, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 0, value: 2},
            {id: 2, position: 1, value: 2},
            {id: 3, position: 4, value: 2},
            {id: 4, position: 8, value: 2},
            {id: 5, position: 12, value: 2},
        ]
    }
];

const FusionLeft = [
    {
        cells: [
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 1, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 0, value: 4 }
        ]
    }, {
        cells: [
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 2, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 2, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 6, position: 2, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 1, value: 4},
            {id: 2, position: 3, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ]
    }
]

/**********************************************
 ******************** RIGHT *******************
 **********************************************/
const MoveRight = [
    {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 2, value: 2}
        ], 
        result: [ 
            { id: 1, position: 2, value: 2 },
            { id: 2, position: 3, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 3, value: 2}
        ],
        result: [ 
            { id: 1, position: 2, value: 2 },
            { id: 2, position: 3, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 3, position: 6, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 2, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 3, position: 7, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 15, value: 2},
        ]
    }
];

const FusionRight = [
    {
        cells: [
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 1, value: 2 } 
        ], 
        result: [ 
            { id: 2, position: 1, value: 4 }
        ]
    }, {
        cells: [
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 2, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 0, value: 2 },
            { id: 2, position: 2, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 6, position: 2, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 1, value: 2},
            {id: 2, position: 3, value: 4},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ]
    }
]

/*******************************************
 ******************** UP *******************
 *******************************************/
const MoveUp = [
    {
        cells: [
            {id: 1, position: 9, value: 2},
            {id: 2, position: 13, value: 2}
        ], 
        result: [ 
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 5, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 5, value: 2},
            {id: 2, position: 13, value: 2}
        ],
        result: [ 
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 5, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 6, position: 2, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 1, value: 2},
            {id: 6, position: 2, value: 2},
            {id: 2, position: 3, value: 2},
            {id: 7, position: 0, value: 2},
            {id: 8, position: 5, value: 4},
            {id: 3, position: 6, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 7, value: 2},
            {id: 5, position: 4, value: 2},
        ]
    }
];

const FusionUp = [
    {
        cells: [
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 5, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 1, value: 4 }
        ]
    }, {
        cells: [
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 9, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 9, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 6, position: 5, value: 2},
            {id: 2, position: 9, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 8, value: 4},
            {id: 3, position: 12, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ],
        result: [ 
            {id: 1, position: 1, value: 4},
            {id: 2, position: 9, value: 2},
            {id: 7, position: 4, value: 2},
            {id: 8, position: 8, value: 4},
            {id: 3, position: 12, value: 2},
            {id: 9, position: 9, value: 2},
            {id: 4, position: 11, value: 2},
            {id: 5, position: 12, value: 2},
        ]
    }
]

/*********************************************
 ******************** DOWN *******************
 *********************************************/
const MoveDown = [
    {
        cells: [
            {id: 1, position: 1, value: 2},
            {id: 2, position: 5, value: 2}
        ], 
        result: [ 
            { id: 1, position: 9, value: 2 },
            { id: 2, position: 13, value: 2 } 
        ]
    }, {
        cells: [
            {id: 1, position: 5, value: 2},
            {id: 2, position: 13, value: 2}
        ],
        result: [ 
            { id: 1, position: 9, value: 2 },
            { id: 2, position: 13, value: 2 } 
        ]
    }
];

const FusionDown = [
    {
        cells: [
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 5, value: 2 } 
        ], 
        result: [ 
            { id: 2, position: 5, value: 4 }
        ]
    }, {
        cells: [
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 9, value: 2 } 
        ], 
        result: [ 
            { id: 1, position: 1, value: 2 },
            { id: 2, position: 9, value: 2 } 
        ]
    }, {
        cells: [
            {id:104,value:64,position:10},
            {id:129,value:32,position:5},
            {id:161,value:8,position:14},
            {id:173,value:16,position:13},
            {id:175,value:8,position:11},
            {id:187,value:8,position:9},
            {id:197,value:8,position:6},
            {id:199,value:16,position:1},
            {id:201,value:2,position:15},
            {id:205,value:4,position:12},
            {id:211,value:2,position:8},
            {id:213,value:2,position:7},
            {id:217,value:4,position:4},
            {id:223,value:8,position:0},
            {id:225,value:2,position:3},
            {id:227,value:4,position:2}
        ],
        result: [ 
            {id:104,value:64,position:10},
            {id:129,value:32,position:5},
            {id:161,value:8,position:14},
            {id:173,value:16,position:13},
            {id:175,value:8,position:11},
            {id:187,value:8,position:9},
            {id:197,value:8,position:6},
            {id:199,value:16,position:1},
            {id:201,value:2,position:15},
            {id:205,value:4,position:12},
            {id:211,value:2,position:8},
            {id:213,value:4,position:7},
            {id:217,value:4,position:4},
            {id:223,value:8,position:0},
            {id:227,value:4,position:2}
        ]
    }
]

const CheckGameOver = [
    {
        cells: [
            { id: 163, value: 128, position: 6 },
            { id: 241, value: 64, position: 9 },
            { id: 275, value: 16, position: 1 },
            { id: 277, value: 16, position: 7 },
            { id: 285, value: 32, position: 8 },
            { id: 289, value: 32, position: 10 },
            { id: 313, value: 4, position: 5 },
            { id: 315, value: 8, position: 0 },
            { id: 323, value: 8, position: 11 },
            { id: 329, value: 4, position: 13 },
            { id: 335, value: 8, position: 14 },
            { id: 339, value: 2, position: 2 },
            { id: 341, value: 2, position: 4 },
            { id: 345, value: 4, position: 15 },
            { id: 347, value: 2, position: 12 },
            { id: 349, value: 2, position: 3 }
        ],
        result: false
    }, {
        cells: [
            {id:145,value:128,position:6},
            {id:179,value:8,position:9},
            {id:199,value:16,position:10},
            {id:213,value:16,position:7},
            {id:235,value:16,position:1},
            {id:249,value:8,position:2},
            {id:255,value:4,position:4},
            {id:257,value:2,position:13},
            {id:259,value:2,position:5},
            {id:261,value:4,position:14},
            {id:263,value:2,position:3},
            {id:267,value:8,position:11},
            {id:269,value:2,position:0},
            {id:271,value:4,position:12},
            {id:273,value:2,position:15},
            {id:275,value:2,position:8}
        ],
        result: true
    }, {
        cells: [
            {id:115,value:128,position:5},
            {id:193,value:64,position:6},
            {id:237,value:32,position:10},
            {id:257,value:16,position:11},
            {id:275,value:16,position:4},
            {id:297,value:2,position:9},
            {id:299,value:16,position:2},
            {id:301,value:8,position:13},
            {id:311,value:8,position:15},
            {id:313,value:4,position:8},
            {id:323,value:4,position:7},
            {id:325,value:4,position:1},
            {id:327,value:2,position:12},
            {id:331,value:2,position:3},
            {id:333,value:2,position:0},
            {id:335,value:2,position:14}
        ],
        result: true
    }
]

export {
    MoveLeft,
    FusionLeft,
    MoveRight,
    FusionRight,
    MoveUp,
    FusionUp,
    MoveDown,
    FusionDown,
    CheckGameOver
}