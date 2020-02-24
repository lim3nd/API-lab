// 

const region = new ZingTouch.Region(document.body);
const rotatableElement = document.getElementById("rotatable");      // Color Wheel.
const pointer = document.getElementById("pointer");                 // Arrow.

// Variables //

let currentRotateEventAngle = 0;                                    // Set rotation to 0.
let angle = 0;

// Assign Rotate Motion to Color Wheel //

region.bind( 
 
  rotatableElement, "rotate", function(e) {

    console.log(e.detail);                                          // Display rotation of color wheel.

    const rotateEventAngle = e.detail.angle;                        // Rotation degree.

// Rotation (Clockwise & Counter-Clockwise) //

    if (rotateEventAngle > currentRotateEventAngle) {
      angle += 1;
    } 
    
    else {
      angle -= 1;
    }

    currentRotateEventAngle = angle;                                // Value for middle circle color change.

    rotatableElement.style.transform = `rotate(${-angle}deg)`;

    const circle = document.getElementById("circle");               // Middle Circle.

    if (angle > 360) {                                              // Restart rotation degrees.
      angle = angle - 360
    }

// Change Color of Middle Circle //

    else if (angle >= 0 && angle < 30) {
      circle.style.backgroundColor = "#FD5308";
    }

    else if (angle >= 30 && angle < 60) {
      circle.style.backgroundColor = "#FB9902";
    }

    else if (angle >= 60 && angle < 90) {
      circle.style.backgroundColor = "#FABC02";
    }

    else if (angle >= 90 && angle < 120) {
      circle.style.backgroundColor = "#FEFE33";
    }

    else if (angle >= 120 && angle < 150) {
      circle.style.backgroundColor = "#D0EA2B";
    }

    else if (angle >= 150 && angle < 180) {
      circle.style.backgroundColor = "#66B032";
    }

    else if (angle >= 180 && angle < 210) {
      circle.style.backgroundColor = "#0391CE";
    }

    else if (angle >= 210 && angle < 240) {
      circle.style.backgroundColor = "#0247FE";
    }

    else if (angle >= 240 && angle < 270) {
      circle.style.backgroundColor = "#3D01A4";
    }

    else if (angle >= 270 && angle < 300) {
      circle.style.backgroundColor = "#8601AF";
    }

    else if (angle >= 300 && angle < 330) {
      circle.style.backgroundColor = "#A7194B";
    }

    else if (angle >= 330 && angle < 360) {
      circle.style.backgroundColor = "#FE2712";
    }

},

  false

);