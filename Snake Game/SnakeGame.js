var s;
var sc1 = 20;

var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / sc1);
    var rows = floor(height / sc1);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(sc1);
}

function mousePressed() {
    s.total++;
}

function draw() {
    background(51);
    
    if (s.eat(food)) {
        s.death();
        s.update();
        s.show();
    }
    fill(255);
    rect(food.x, food.y, sc1, sc1);
}



function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}