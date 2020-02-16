function ColorPickerWheel(element) {
    this.element = element;
    
    this.init = function() {
        var diameter = this.element.offsetWidth;

        var canvas = document.createElement('canvas');
        canvas.height = diameter;
        canvas.width = diameter,
        this.canvas = canvas;

        this.renderColorMap();

        element.appendChild(canvas);

        //this.setupBindings();

        //this.renderColorPicker();
    };

    this.renderColorPicker = function() {
        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.beginPath();
        ctx.arc(150, 150, 50 * 0.8, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

    }

    this.renderColorMap = function() {
        var canvas = this.canvas;
        var ctx = canvas.getContext('2d');

        var radius = canvas.width / 2;
        var toRad = (2 * Math.PI) / 360;
        var step = 1 / radius;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for(var i = 0; i < 360; i += step) {
            var rad = i * toRad;
            ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)';
            ctx.beginPath();
            ctx.moveTo(radius, radius);
            ctx.lineTo(radius + radius * Math.cos(rad), radius + radius * Math.sin(rad));
            ctx.stroke();
        }

        // White Circle

        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.beginPath();
        ctx.arc(radius, radius, 150 * 0.8, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        
        // render the rainbow box here ----------
    };

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
            //var selectedColor = new Color(imgData[0], imgData[1], imgData[2]);
            // do something with this

            self.renderMouseCircle(x, y);
        }, false);
    };

    this.init();
}



function initRotatingPicker() {

    var currentAngle = 15;
document.getElementById('color-point').style.transform = 'rotate(15deg)';

var target = document.getElementById('color-picker');
var region = new ZingTouch.Region(target);

region.bind(target, 'rotate', function(e) {
  var rotatable = document.getElementById('color-point');
  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

function setOutput(data) {
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++) {
    outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
}

  
}

function init() {
    new ColorPickerWheel(document.querySelector('.color-wheel'));
    initRotatingPicker();
}

window.onload = init;