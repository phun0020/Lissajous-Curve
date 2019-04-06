class Circle {
    constructor(x, y, d, speed, isHorizontal) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.speed = speed;
        this.isHorizontal = isHorizontal;

        this.angle = 0;
        this.r = d / 2;
        this.point = createVector(0, 0);
    }

    updatePoint = () => {
        this.angle += this.speed;
        let pointX = this.r * cos(this.angle - PI/2);
        let pointY = this.r * sin(this.angle - PI/2);
        this.point = createVector(this.x + pointX, this.y + pointY);
    }

    // the circle itself
    drawCircle = () => {
        noFill();
        ellipse(this.x, this.y, this.d, this.d);
    }

    // point runs around the circle
    drawPoint = () => {
        fill(255);
        ellipse(this.point.x, this.point.y, 8, 8);
    }

    // the line follows the point
    drawLine = () => {
        this.isHorizontal ?
        line(this.point.x, this.point.y, this.point.x, height) :
        line(this.point.x, this.point.y, width, this.point.y);
    }

    draw = () => {
        this.drawCircle();
        this.updatePoint();
        this.drawPoint();
        this.drawLine();
    }
}