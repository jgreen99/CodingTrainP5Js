var counter = 0;
var timeLeft = 65;
function convertSeconds(s) {
    var min = s / 60;
}

function setup() {
    noCanvas();
    
    var timer = select('#timer');
    timer.html(counter);
    
    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }
    setInterval(timeIt, 1000);
    
}
