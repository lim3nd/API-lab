
var currentAngle = 15;
//Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
document.getElementById('rotatable').style.transform = 'rotate(15deg)';

//declaration of variables
var target = document.getElementById('interaction');
var region = new ZingTouch.Region(target);

//binds element to gesture
region.bind(target, 'rotate', function(e) {
  var rotatable = document.getElementById('rotatable');
  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
});

//allows timer to be set by degree of rotation + displays message
function setTimer(){
  var numSeconds = (Math.abs(currentAngle) % 360)/360 * 60;
  window.setTimeout(displayAlert, numSeconds * 1000)
}

function displayAlert(){
  alert("Egg(s) are ready!")
}