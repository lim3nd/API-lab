let parent = document.getElementsByClassName("volume-box")[0];
let slider = document.getElementByClassName("volume");

var region = new ZingTouch.Region(parent);

setTimeout(function() {
    document.getElementsByClassName("volume-box")[0];
}, );
 
function moveSlider(movement) {

    if (movement > 10 && movement < 490) {
        slider.style.marginLeft = movement + "10px";  

    } else if (movement == 0) {

        slider.style.marginLeft = movement + "10px";   

    } else if (movement >= 312) {

        slider.style.marginLeft = "312px";
        
        setTimeout(function() {startOver()}, 1000);

    }
}

function resetSlider() {

    slider.style.marginLeft = "10px"; 

}

function startOver() {

    document.getElementsByClassName("volume-box")[0];
    
    setTimeout(function() {
        location.reload();
    }, 1500);
    
}

region.bind(parent, 'swipe', function(e){
    console.log(e.target.offsetLeft);
 
}, false);
