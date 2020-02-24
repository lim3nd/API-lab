const region = new ZingTouch.Region(document.body);
const rotatableElement = document.getElementById("rotatable");
const pointer = document.getElementById("pointer");

let currentRotateEventAngle = 0;
let angle = 0;

region.bind( 
 
  rotatableElement, "rotate", function(e) {

    console.log(e.detail);

    const rotateEventAngle = e.detail.angle;
    if (rotateEventAngle > currentRotateEventAngle) {
      angle += 1;
    } else {
      angle -= 1;
    }
    currentRotateEventAngle = rotateEventAngle;

    rotatableElement.style.transform = `rotate(${-angle}deg)`;

    const circle = document.getElementById("circle");

    if (currentRotateEventAngle > 360) {
      currentRotateEventAngle = currentRotateEventAngle - 360
    }

    else if (rotateEventAngle >= 0 && rotateEventAngle < 30) {
      circle.style.backgroundColor = "#FD5308";
    }

    else if (rotateEventAngle >= 30 && rotateEventAngle < 60) {
      circle.style.backgroundColor = "#FB9902";
    }

    else if (rotateEventAngle >= 60 && rotateEventAngle < 90) {
      circle.style.backgroundColor = "#FABC02";
    }

    else if (rotateEventAngle >= 90 && rotateEventAngle < 120) {
      circle.style.backgroundColor = "#FEFE33";
    }

    else if (rotateEventAngle >= 120 && rotateEventAngle < 150) {
      circle.style.backgroundColor = "#D0EA2B";
    }

    else if (rotateEventAngle >= 150 && rotateEventAngle < 180) {
      circle.style.backgroundColor = "#66B032";
    }

    else if (rotateEventAngle >= 180 && rotateEventAngle < 210) {
      circle.style.backgroundColor = "#0391CE";
    }

    else if (rotateEventAngle >= 210 && rotateEventAngle < 240) {
      circle.style.backgroundColor = "#0247FE";
    }

    else if (rotateEventAngle >= 240 && rotateEventAngle < 270) {
      circle.style.backgroundColor = "#3D01A4";
    }

    else if (rotateEventAngle >= 270 && rotateEventAngle < 300) {
      circle.style.backgroundColor = "#8601AF";
    }

    else if (rotateEventAngle >= 300 && rotateEventAngle < 330) {
      circle.style.backgroundColor = "#A7194B";
    }

    else if (rotateEventAngle >= 330 && rotateEventAngle < 360) {
      circle.style.backgroundColor = "#FE2712";
    }

  },

  false

);