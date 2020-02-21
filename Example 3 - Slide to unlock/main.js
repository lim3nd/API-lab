let parent = document.getElementsByClassName("container")[0];
var region = new ZingTouch.Region(parent);
let slider = document.getElementById("arrow");

//Load slider
setTimeout(function() {
    document.getElementsByClassName("container")[0].style.opacity = 1;
}, 500);
 
function moveSlider(movement) {
    //accepted range of movement 
    if (movement > 7 && movement < 312) {
        slider.style.marginLeft = movement + "px";  
    } else if (movement == 0) {
    //If slider is at start, make sure it does not touch the edge
        slider.style.marginLeft = movement + "7px";  
    } else if (movement >= 312) {
    //If slider moves to end, start over
        slider.style.marginLeft = "312px";
        setTimeout(function() {startOver()}, 1000);
    }
}

//Function to reset slider
function resetSlider() {
    slider.style.marginLeft = "7px"; 
}

function startOver() {
    document.getElementsByClassName("container")[0].style.opacity = 0;
    document.getElementsByClassName("container")[0].style.transform = "scale(0.25, 0.25)";
    
    setTimeout(function() {
        location.reload();
    }, 1500);

    
}
region.bind(parent, 'swipe', function(e){
    console.log(e.target.offsetLeft);
    //moveSlider(e.target.offsetLeft);
}, false);


//Debugging
let action = {
    unlock() {
        moveSlider(500);
    },
    reset() {
        startOver();

    },
};