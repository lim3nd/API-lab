let parent = document.getElementById("volume-box");
let slider = document.getElementById("volume-bar");
let counter = document.getElementById("volume-counter");
let x=0;

var region = new ZingTouch.Region(document.body);

let object = parent.getBoundingClientRect();

function sliderPos(){

    let dragObj = slider.getBoundingClientRect();
    let sliderX = dragObj.x;
    return sliderX;

}

let positionX = object.x;
let width = object.width;

var stopPositionMax = positionX + width - 30;
var stopPositionMin = positionX + 10;

setTimeout(function() {

    document.getElementById("volume-box");

}, );
 
region.bind(parent, "pan",function (event){

    if (sliderPos() >= stopPositionMin && sliderPos() <= stopPositionMax) {
    
    x += event.detail.data[0].change.x;
    slider.style.left = `${x}px`;

    console.log(sliderPos());

    if (sliderPos() < stopPositionMin) {

        x = 0;
        slider.style.left = `${x}px`;

        }
        
    else if (sliderPos() > stopPositionMax) {
      
        x = width - 40;
        slider.style.left = `${x}px`;
    
        }

    }

}, false);



