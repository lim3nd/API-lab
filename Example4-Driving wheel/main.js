const region = new ZingTouch.Region(document.body);
const myRotateElement = document.getElementById("my-rotate");
let angle = 0;
let currentRotateEventAngle = 0;
region.bind(
  myRotateElement,
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

    myRotateElement.style.transform = `rotate(${-angle}deg)`;
  },
  false
);
