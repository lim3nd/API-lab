//Create region instance that cover the whole document body.
const region = new ZingTouch.Region(document.body);
//Get the element that we will rotate.
const myRotateElement = document.getElementById("my-rotate");
// Get the car element.
const car = document.getElementById("car");
//Set the initial rotation angles to zero.
let angle = 0;
let currentRotateEventAngle = 0;

//Listen to rotate event.
region.bind(
  myRotateElement,
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

    //Interacting with element's transform
    myRotateElement.style.setProperty("transform", `rotate(${-angle}deg)`);
    car.style.setProperty("transform", `rotate(${-angle / 3}deg)`);
  },
  false
);
