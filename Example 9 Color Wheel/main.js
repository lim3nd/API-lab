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

    if (currentRotateEventAngle >= 360) {
      currentRotateEventAngle = currentRotateEventAngle - 360
    }

    else if (rotateEventAngle >= 345 && rotateEventAngle <= 15) {
      circle.style.backgroundColor = "#FD5308";
    }

    else if (rotateEventAngle >= 15 && rotateEventAngle <= 45) {
      circle.style.backgroundColor = "#FB9902";
    }

    else if (rotateEventAngle >= 45 && rotateEventAngle <= 75) {
      circle.style.backgroundColor = "#FABC02";
    }

    else if (rotateEventAngle >= 75 && rotateEventAngle <= 105) {
      circle.style.backgroundColor = "#FEFE33";
    }

    else if (rotateEventAngle >= 105 && rotateEventAngle <= 135) {
      circle.style.backgroundColor = "#D0EA2B";
    }

    else if (rotateEventAngle >= 135 && rotateEventAngle <= 165) {
      circle.style.backgroundColor = "#66B032";
    }

    else if (rotateEventAngle >= 165 && rotateEventAngle <= 195) {
      circle.style.backgroundColor = "#0391CE";
    }

    else if (rotateEventAngle >= 195 && rotateEventAngle <= 225) {
      circle.style.backgroundColor = "#0247FE";
    }

    else if (rotateEventAngle >= 225 && rotateEventAngle <= 255) {
      circle.style.backgroundColor = "#3D01A4";
    }

    else if (rotateEventAngle >= 255 && rotateEventAngle <= 285) {
      circle.style.backgroundColor = "#8601AF";
    }

    else if (rotateEventAngle >= 285 && rotateEventAngle <= 315) {
      circle.style.backgroundColor = "#A7194B";
    }

    else if (rotateEventAngle >= 315 && rotateEventAngle <= 345) {
      circle.style.backgroundColor = "#FE2712";
    }

  },

  false

);