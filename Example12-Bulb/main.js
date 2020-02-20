const region = new ZingTouch.Region(document.body);
const knob = document.getElementById("knob");
const bulb = document.getElementById("bulb");
let angle = 0;
let currentRotateEventAngle = 0;
region.bind(
  knob,
  "rotate",
  function(e) {
    //Actions here
    const rotateEventAngle = e.detail.angle;
    if (rotateEventAngle > currentRotateEventAngle) {
      angle += 5;
    } else {
      angle -= 5;
    }
    currentRotateEventAngle = rotateEventAngle;
    if (angle > 180 || angle < 0) {
      return;
    }
    knob.style.setProperty("transform", `rotate(${-angle}deg)`);
    const r = 255;
    const g = Math.max(Math.min(angle, 255), 247);
    const b = Math.max(Math.min(angle, 194), 0);
    bulb.style.setProperty("background-color", `rgb(${r},${g},${b})`);
  },
  false
);
