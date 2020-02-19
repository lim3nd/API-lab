const region = new ZingTouch.Region(document.body);
const knob = document.getElementById("knob");
const bulb = document.getElementById("bulb");
let angle = 0;
let currentRotateEventAngle = 0;
region.bind(knob, "rotate", function(e) {
  //Actions here
  const rotateEventAngle = e.detail.angle;
  if (rotateEventAngle > currentRotateEventAngle) {
    angle += 5;
  } else {
    angle -= 5;
  }
});
