let slider = document.getElementById("arrow");

function moveSlider(x) {
    let movement = x;
    //accepted range
    if (movement > 7 && movement < 312) {
        slider.style.marginLeft = movement + "px";  
    } 

    //debug
    if (x == "max") {
        slider.style.marginLeft = "312px";
    }
    /* else {
        slider.style.margin-left = movement "312px";
    }
    */
}
function resetSlider() {
    slider.style.marginLeft = "7px"; 
}