

function $(el) {return document.getElementById(el.replace(/#/,''));};

var canvas = $('#canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var context = canvas.getContext('2d');
var start = function(coors) {
    context.beginPath();
    context.moveTo(coors.x, coors.y);
    this.isDrawing = true;
};
var move = function(coors) {
    if (this.isDrawing) {
        context.strokeStyle = "#fff";
        context.lineJoin = "round";
        context.lineWidth = 3;
        context.lineTo(coors.x, coors.y);
        context.stroke();
    }
};
var stop = function(coors) {
    if (this.isDrawing) {
        this.touchmove(coors);
        this.isDrawing = false;
    }
};
var drawer = {
    isDrawing: false,
    mousedown: start,
    mousemove: move,
    mouseup: stop,
    touchstart: start,
    touchmove: move,
    touchend: stop
};
var draw = function(e) {
    var coors = {
        x: e.clientX || e.targetTouches[0].pageX,
        y: e.clientY || e.targetTouches[0].pageY
    };
    drawer[e.type](coors);
}
canvas.addEventListener('mousedown', draw, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', draw, false);
canvas.addEventListener('touchstart', draw, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('touchend', draw, false);
var name;

var go = function(e) {
    name = prompt("Enter a word:", "");
    this.parentNode.removeChild(this);
    draw(e);
    var  myVar = setTimeout(alertFunc, 6000);
    var  myVar = setTimeout(alertFunc, 12000);
    var  myVar = setTimeout(alertFunc, 18000);
    var  myVar = setTimeout(answer, 24000);
   
    
};

function alertFunc() {
    alert("Next Person!");
  
  }

  function answer() {
    alert("Next Person!");
    var answer = prompt("Enter the word:", "");
    if(name == answer){
        alert("You win");
    }
    else{
        alert("You lose");
    }
  
  }

$('#go').addEventListener('mousedown', go, false);
$('#go').addEventListener('touchstart', go, false);

// prevent elastic scrolling
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
// end body:touchmove
window.onresize = function(e) {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
};
