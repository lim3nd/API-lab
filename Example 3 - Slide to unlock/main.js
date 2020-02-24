// Setup

let parent = document.getElementsByClassName("container")[0];       //Select the slider container
var region = new ZingTouch.Region(parent);           //Enable Zingtouch library for the slider container
let slider = document.getElementById("arrow");       //Select the arrow 

let customPan = new ZingTouch.Pan();        //Create pan gesture 

//Load slider, adding 200ms fade
setTimeout(function() {
    document.getElementsByClassName("container")[0].style.opacity = 1;
}, 200);
 
//Function for moving the slider
function moveSlider(movement) {
    //accepted range of movement 
    if (movement > 7 && movement < 312) {
        slider.style.marginLeft = movement + "px";  
    } 

    //If slider is at start, make sure it does not touch the edge
    else if (movement == 0) {
        slider.style.marginLeft = movement + "7px";  
    } 

    //If slider moves to end, start over
    else if (movement >= 312) {
        slider.style.marginLeft = "312px";
    
        //Animation, scale down and fade
        document.getElementsByClassName("container")[0].style.opacity = 0;
        document.getElementsByClassName("container")[0].style.transform = "scale(0.25, 0.25)";
        
        //Small delay, don't reload before animation is done
        setTimeout(function() {
            location.reload();
        }, 500);
    }
}

//Move the slider
region.bind(parent, customPan, function(e){
    let xData = e.detail.data[0].distanceFromOrigin;
    let xMove = Math.floor(xData);

    moveSlider(xMove);

    //Make sure the slider isn't animated
    slider.style.transition = "0s all"; 

}, true);

//Return slider to start when pan ends
customPan.end = function() {
    //Add animation 
    slider.style.transition = "all 1s";

    //Return slider 
    moveSlider(0); 
};
