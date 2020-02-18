//Set the pin position
//let currentX = document.getElementById("child").style.left = 200;
//document.getElementById("child").style.top = 200;
//
/*
var region = new ZingTouch.Region(document.getElementById('parent'));
var target = document.getElementById('child');

function getDiff() {
    let mapWidth = 400;
  
    let diff = {
        xDiff: (window.innerWidth - mapWidth)/2,
        yDiff: (window.innerHeight - mapWidth)/2,
    }
    return diff;
}


region.bind(target, 'pan', function(e){

    let xPos = e.detail.events[0].x - getDiff().xDiff;
    //detail.data[0].changeX???
    let yPos = e.detail.events[0].y - getDiff().yDiff;;
    
    let posdata = "translate(" + xPos + "px, " + yPos + "px)";

    console.log(posdata);

    target.style.transform = posdata;
})

*/

//V2
let parent = document.getElementById('parent');
var region = new ZingTouch.Region(parent);
var target = document.getElementById('child');

//Set map size
let mapWidth = document.getElementById('parent').style.width = "350px";
let mapHeight = document.getElementById('parent').style.height = "400px";

//Set pin size = 
let pinSize = document.getElementById('pin').style.width = "50px";

//Center pin
let pinX = target.style.left = (parseInt(mapWidth)/2) - (parseInt(pinSize) / 2) + "px";
let pinY = target.style.top = (parseInt(mapHeight)/2) - (parseInt(pinSize) / 1.5) + "px";

function getOffset() {
    let wi =  window.innerWidth - parseInt(mapWidth);
    wi = Math.floor(wi/2);
    let hi =  window.innerHeight - parseInt(mapHeight);
    hi = Math.floor(hi/2);
    
    //Make sure they are not negative.......
    if (wi < 0) {
        wi = 0;
    } 
    if (hi < 0) {
        hi = 0;
    } 

    //Export
    let offset = {
        x: wi,
        y: hi,
    }
    return offset;
}

function movePin(x, y) {
    target.style.left = x - getOffset().x + "px";
    target.style.top = y - getOffset().y + "px"; 
    
    //Show debug
    document.getElementById("debug").innerHTML = "Pin position: x = " + parseInt(target.style.left) + "px, y = " + parseInt(target.style.top) + "px"; 
}

region.bind(parent, 'pan', function(e){
    let xPos = e.detail.events[0].x;
    let yPos = e.detail.events[0].y;

    movePin(xPos, yPos);
})
