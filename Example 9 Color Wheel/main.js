const region = new ZingTouch.Region(document.body);
const rotatableElement = document.getElementById("rotatable");
const car = document.getElementById("pointer");

let angle = 0;
let currentRotateEventAngle = 0;

region.bind(
  
  rotatableElement, "rotate", function(e) {

    const rotateEventAngle = e.detail.angle;
    if (rotateEventAngle > currentRotateEventAngle) {
      angle += 5;
    } else {
      angle -= 5;
    }
    currentRotateEventAngle = rotateEventAngle;

    rotatableElement.style.transform = `rotate(${-angle}deg)`;

  },

  false

);