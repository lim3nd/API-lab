var direction = 0;

var canvas = document.createElement('canvas');
var canvasPicker = document.createElement('canvas');
canvas.id = "main-canvas";
canvasPicker.id = "picker-canvas";
canvasPicker.style.visibility = "hidden";
canvasPicker.style.visibility = "hidden";
canvasPicker.style.position = 'fixed';

var container = document.getElementById('container');
container.appendChild(canvas);
container.appendChild(canvasPicker);

var bBox = container.getBoundingClientRect();
canvas.width = canvasPicker.width = bBox.width;
canvas.height = canvasPicker.height = bBox.height;

image = new Image();
image.src = "arrow.png";

window.onresize = function(){
  console.log('fire');
  resizeCanvas();
}

function resizeCanvas(){
  var container = document.getElementById('container');
  container.appendChild(canvas);
  container.appendChild(canvasPicker);

  var bBox = container.getBoundingClientRect();
  canvas.width = canvasPicker.width = bBox.width;
  canvas.height = canvasPicker.height = bBox.height;
}

resizeCanvas();
var canvasRegion = new ZingTouch.Region(document.getElementById('container'));
//SWIPING
canvasRegion.bind(canvas, 'swipe', function(e) {
  var weight = 1.5;

  var canvas = document.getElementById('main-canvas');
  var canvasRect = canvas.getBoundingClientRect();
  var x = e.detail.events[0].x - canvasRect.left;
  var y = e.detail.events[0].y - canvasRect.top;
});

//PANNING
var currentIndex = lastIndex = null;
var customPan = new ZingTouch.Pan({
  threshold: 1
});
var startPan = customPan.start;

customPan.start = function(inputs) {
  var canvas = document.getElementById('main-canvas');
  var canvasRect = canvas.getBoundingClientRect();

  var x = inputs[0].current.x - canvasRect.left;
  var y = inputs[0].current.y - canvasRect.top;
  currentIndex = getIndex(x, y);
  if (currentIndex !== null) {
    point.stopped = true;
  }

  return startPan.call(this, inputs);
}
// setup done ... /CG

// moves the object /CG
canvasRegion.bind(canvas, customPan, function(e) {
  setOutput([
    ['Gesture', 'Pan'],
    ['currentDirection', Math.floor(e.detail.data[0].currentDirection) + "°"],
    ['directionFromOrigin', Math.floor(e.detail.data[0].directionFromOrigin) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.data[0].distanceFromOrigin) + "px"]
  ]);

  direction = e.detail.data[0].currentDirection;

  var originalEvent = e.detail.events[0].originalEvent;
  var canvas = document.getElementById('main-canvas');
  var canvasRect = canvas.getBoundingClientRect();

  var x = e.detail.events[0].x - canvasRect.left;
  var y = e.detail.events[0].y - canvasRect.top;

  var rect = canvas.getBoundingClientRect();
  point.x = (x < 0) ? 0 : (x > rect.width) ? rect.width : x;
  point.y = (y < 0) ? 0 : (y > rect.height) ? rect.height : y;
});

var endPan = customPan.end;
customPan.end = function(inputs) {
  point.stopped = false;
  lastIndex = currentIndex;
  currentIndex = null;
  return endPan.call(this, inputs);
}

function getIndex(x, y) {
  x = Math.floor(x);
  y = Math.floor(y);
  var canvas = document.getElementById('picker-canvas');
  ctx = canvas.getContext('2d');

  var ctx = canvas.getContext("2d");

  var colors = ctx.getImageData(x, y, 1, 1).data;
  var str = "";
  for (var i = 0; i < colors.length - 1; i++) {
    str += colors[i];
  }
  return parseInt(str);
}

var Point = function() {
  this.x = getRandNum(0, canvas.width);
  this.y = getRandNum(0, canvas.height);
  this.vx = getRandNum(-1, 1, 2);
  this.vy = getRandNum(-1, 1, 2);
  this.radius = 40;
  this.minRadius = getRandNum(30, 50);
  this.maxRadius = 50;
  this.stopped = false;
  this.grow = true;
  this.color = 'rgba(' + getRandNum(0, 10) + ',' + getRandNum(0, 250) + ',' + getRandNum(100, 255) + ',' + 0.0   + ')';
  this.rate = getRandNum(0.1, 0.2, 1);
};

Point.prototype = {
  render: function(id) {
    var canvas = document.getElementById('main-canvas');
    var canvasPicker = document.getElementById('picker-canvas');
    ctx = canvas.getContext('2d');
    ctxPicker = canvasPicker.getContext('2d');
    drawOnCanvas(this, ctx, id, false);
    drawOnCanvas(this, ctxPicker, id, true);

    function drawOnCanvas(_this, context, id, picker) {
      id = id + "";
      var arr = id.split('');
      while (arr.length < 3) {
        arr.unshift("0");
      }
      if (picker) { // what is picker?
        var color = arr.join(',');
        context.beginPath();
        context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
        context.fillStyle = 'rgba(' + color + ',1)';
        context.strokeStyle = 'rgba(' + color + ',1)';

        drawImage(ctx, image, _this.x,_this.y, image.width, image.height , 90-direction);
        //console.log("direction: " + direction );

      } else {
        var color = arr.join(',');
        context.beginPath();
        context.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
        context.fillStyle = _this.color;
        context.strokeStyle = (_this.stopped) ? 'rgba(0,0,0,0.0)' : _this.color;
      }
      context.fill();
      context.stroke(); // stroke when clicking/tapping
    }

  },
  update: function() {
    //UPDATABLE
    if (this.stopped) {
      return;
    }

    //MOVEMENT
    var canvas = document.getElementById('main-canvas');
    var canvasRect = canvas.getBoundingClientRect();
    // this.x = this.x + (this.vx * 1);
    // this.y = this.y + (this.vy * 1);

    //Change direction / hit a boundary
    if (this.x > canvasRect.width || this.x < 0) {
      if (this.x < 0) {
        this.x = 0;
      } else {
        this.x = canvasRect.width;
      }
    }

    if (this.y > canvasRect.height || this.y < 0) {
      if (this.y < 0) {
        this.y = 0;
      } else {
        this.y = canvasRect.height;
      }
    }
  }
}

  var point = new Point();
  point.render(0);


window.requestAnimationFrame(eventLoop);

function eventLoop(timestamp) {
  window.requestAnimationFrame(eventLoop);
  var canvas = document.getElementById('main-canvas');
  var canvasPicker = document.getElementById('picker-canvas');
  ctx = canvas.getContext('2d');
  ctxPicker = canvasPicker.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctxPicker.clearRect(0, 0, canvasPicker.width, canvasPicker.height);

    point.update(0);
    point.render(0);
}

function getRandNum(min, max, decimals) {
  decimals = (decimals) ? decimals : 0;
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(decimals));
}

function setOutput(data){
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++){
    outputStr += data[i][0] + ": " + data[i][1] + ((i===data.length-1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}

function drawImage(ctx, image, x, y, w, h, degrees){
  ctx.save();
  ctx.translate(x+w/2, y+h/2);
  ctx.rotate(degrees*Math.PI/180);
  ctx.translate(-x-w/2, -y-h/2);
  ctx.drawImage(image, x, y, w, h);
  ctx.restore();
}
