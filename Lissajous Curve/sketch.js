let diameter, cols, rows;
let horzCircles = [];
let vertCircles = [];
let curves = [];

const space = 50;
const speed = 0.005;

function setup() {
    createCanvas(950, 950);
    cols = floor(width / 100);
    rows = floor(height / 100);
    diameter = cols * 10;

    for (let i = 1; i <= cols; i++) {
        horzCircles = [
            ...horzCircles,
            new Circle((i + 1) * diameter - space, diameter / 2, diameter - 10, speed * i, true)
        ];

        vertCircles = [
            ...vertCircles,
            new Circle(diameter / 2, (i + 1) * diameter - space, diameter - 10, speed * i, false)
        ];
    }
}

function draw() {
    background(0);
    stroke(255);
    horzCircles.map((c, i) => {    
        c.draw();
    });

    vertCircles.map((c, i) => {
        c.draw();
    });
}