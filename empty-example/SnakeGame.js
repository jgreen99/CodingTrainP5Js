var s;

function setup() {
createCanvas(600, 600);
    background(51);
    s = new Snake();
}

function draw() {
    background(51);
    s.update();
    s.show();
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    
    this.update = function() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }
    
    this.show = function() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}