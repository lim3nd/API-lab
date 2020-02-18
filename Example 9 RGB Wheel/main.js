 /*
 this.renderMouseCircle = function(x, y) {
        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.lineWidth = '2';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
    };

    this.setupBindings = function() {
        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');
        var self = this;

        canvas.addEventListener('click', function(e) {
            var x = e.offsetX || e.clientX - this.offsetLeft;
            var y = e.offsetY || e.clientY - this.offsetTop;

            var imgData = ctx.getImageData(x, y, 1, 1).data;
            console.log(imgData[0], imgData[1], imgData[2])
            self.renderMouseCircle(x, y);
        }, false);
    };

function initRotatingPicker() {

    var currentAngle = 15;
let object = document.getElementById('color-point');
object.style.transform = 'rotate(15deg)';

*/
const region = new ZingTouch.Region(document.body);
const target = document.getElementById('color-point');


region.bind(target, 'rotate', function(e) {
    console.log(e.detail)
 
  currentAngle += e.detail.angle;
  target.style.transform = `rotate(${S}deg)`;
  console.log("rotating");

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

}, false);
/*
function setOutput(data) {
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++) {
    outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}

  
}
*/