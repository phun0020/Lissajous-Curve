let diameter, cols, rows;
let horzCircles = [];
let vertCircles = [];
let curves;

const space = 50;
const speed = 0.005;

function make2DArray(rows, cols) {
    var arr = new Array(rows); //like arr[]; but with number of columns hardcoded
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

function setup() {
    createCanvas(950, 950);
    cols = floor(width / 100);
    rows = floor(height / 100);
    diameter = cols * 10;
    curves = make2DArray(rows, cols);
    
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            curves[j][i] = new Curve();
        }
    }

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
        // point x
        let x = horzCircles[i].point.x;
        
        for(let j = 0; j < rows; j++) {
            // point y
            let y = vertCircles[j].point.y;
            
            curves[j][i].setX(x);
            curves[j][i].setY(y);
        }
    }

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            curves[j][i].addPoint();
            curves[j][i].show();
        }
    }
}
