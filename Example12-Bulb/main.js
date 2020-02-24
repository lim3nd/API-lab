//Create region instance that cover the whole document body.
const region = new ZingTouch.Region(document.body);
//Get the knob element that we will rotate.
const knob = document.getElementById("knob");
//Get the bulb element that we will change the color.
const bulb = document.getElementById("bulb");
//Set the initial rotation angles to zero.
let angle = 0;
let currentRotateEventAngle = 0;
//Listen to rotate event.
region.bind(
  knob,
  "rotate",
  function(e) {
    //Get the angle of rotation from rotate event.
    const rotateEventAngle = e.detail.angle;
    //Check whether the rotation is clockwise or anticlockwise.
    if (rotateEventAngle > currentRotateEventAngle) {
      angle += 5;
    } else {
      angle -= 5;
    }
    currentRotateEventAngle = rotateEventAngle;
    //Limit the rotation to 180 degree up to down.
    if (angle > 180 || angle < 0) {
      return;
    }
    knob.style.setProperty("transform", `rotate(${-angle}deg)`);
    //prepare the yellow color according to the current knob angle.
    const r = 255;
    const g = Math.max(Math.min(angle, 255), 247);
    const b = Math.max(Math.min(angle, 194), 0);
    //Assign the yellow color to the bulb element.
    bulb.style.setProperty("background-color", `rgb(${r},${g},${b})`);
  },
  false
);
