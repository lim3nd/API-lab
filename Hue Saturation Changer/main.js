
var currentAngle = 15;
//Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
document.getElementById('rotatable').style.transform = 'rotate(15deg)';

var target = document.getElementById('interaction');
var region = new ZingTouch.Region(target);

//Variable declarations for the 3 aspects of the saturation changer.
let hue = 0;
let saturation = 0;
let light = 0;

//Allows cycling between the three aspects of the saturation changer.
let btnState = 0;
document.getElementById("rotate-container").addEventListener('click', function() {
  if (btnState == 3) {
    btnState = 0;
  }  
  btnState++;
}, false);

//variable declarations for indicator text using the DOM.
let selectorText = document.getElementById("selector");
let indicatorText = document.getElementById("indicator");

region.bind(target, 'rotate', function(e) {
  var rotatable = document.getElementById('rotatable');
  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
    //Hue bg
    if (btnState == 1) {
      hue = Math.floor(e.detail.angle);
      selectorText.innerHTML = "Hue";
    }  
    else if (btnState == 2) {
      preSat = (e.detail.angle / 360)*100;
      saturation = Math.floor(preSat);
      selectorText.innerHTML = "Saturation";
    } 
    else if (btnState == 3) {
      preLight = (e.detail.angle / 360)*100;
      light = Math.floor(preLight);
      selectorText.innerHTML = "Light";
    }
    let hslExport = "hsl(" + hue + ", " + saturation + "%, " + light + "%)";
    document.getElementById("wrapper").style.backgroundColor = hslExport;
    indicatorText.innerHTML = hslExport;
    console.log(hslExport);
  });

