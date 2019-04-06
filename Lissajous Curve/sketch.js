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
    horzCircles.map(c => c.draw());
    vertCircles.map(c => c.draw());
    
    for(let i = 0; i < cols; i++) {
        let x = horzCircles[i].point.x;
        strokeWeight(8);
        for(let j = 0; j < rows; j++) {
            let y = vertCircles[j].point.y;
            point(x, y);
        }
        strokeWeight(1);
    }
}
