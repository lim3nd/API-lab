// Variables

let parent = document.getElementById("volume-box");
let slider = document.getElementById("volume-bar");
let counter = document.getElementById("volume-counter");
let x=0;
let object = parent.getBoundingClientRect();
let positionX = object.x;
let width = object.width;

// Regions

var stopPositionMax = positionX + width - 30;
var stopPositionMin = positionX + 10;
var region = new ZingTouch.Region(document.body);

// Get Position of the Volume Bar (x)

function sliderPos(){

    let dragObj = slider.getBoundingClientRect();
    let sliderX = dragObj.x;
    return sliderX;

}
 
// Assign Pan to Parent

region.bind(parent, "pan",function (event){

    if (sliderPos() >= stopPositionMin && sliderPos() <= stopPositionMax) {         // Allow the bar to move if it is inside the region.
    
    x += event.detail.data[0].change.x;
    slider.style.left = `${x}px`;

    console.log(sliderPos());           // Show position of volume bar.

// Volume Value Display - (+10 volume / 100px)

    if (sliderPos() <= 530) {                                      

        counter.innerHTML = "0";

    }

    else if (sliderPos() >= 531 && sliderPos() <=630 ) { 

        counter.innerHTML = "10";

    }

    else if (sliderPos() >= 631 && sliderPos() <=730 ) { 

        counter.innerHTML = "20";

    }

    else if (sliderPos() >= 731 && sliderPos() <=830 ) { 

        counter.innerHTML = "30";

    }

    else if (sliderPos() >= 831 && sliderPos() <=930 ) { 

        counter.innerHTML = "40";

    }

    else if (sliderPos() >= 931 && sliderPos() <=1030 ) { 

        counter.innerHTML = "50";

    }

    else if (sliderPos() >= 1031 && sliderPos() <=1130 ) { 

        counter.innerHTML = "60";

    }

    else if (sliderPos() >= 1131 && sliderPos() <=1230 ) { 

        counter.innerHTML = "70";

    }

    else if (sliderPos() >= 1231 && sliderPos() <=1330 ) { 

        counter.innerHTML = "80";

    }

    else if (sliderPos() >= 1331 && sliderPos() <=1430 ) { 

        counter.innerHTML = "90";

    }

    else if (sliderPos() >= 1431 && sliderPos() <=1530 ) { 

        counter.innerHTML = "100";

    }

// Region Limits

    if (sliderPos() < stopPositionMin) {            // Left limit

        x = 0;
        slider.style.left = `${x}px`;

        }
        
    else if (sliderPos() > stopPositionMax) {       // Right limit
      
        x = width - 40;
        slider.style.left = `${x}px`;
    
        }

    }

}, false);



