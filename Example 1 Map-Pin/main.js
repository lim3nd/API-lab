//Set up
let parent = document.getElementById('parent');     //Select the parent element 
var region = new ZingTouch.Region(parent);          //Create a new region where the library listens
var target = document.getElementById('child');      //Select the target element 

//Set map size
let mapWidth = document.getElementById('parent').style.width = "350px";
let mapHeight = document.getElementById('parent').style.height = "400px";

//Set pin size
let pinSize = document.getElementById('pin').style.width = "50px";

//Center the pin
let pinX = target.style.left = (parseInt(mapWidth)/2) - (parseInt(pinSize) / 2) + "px";
let pinY = target.style.top = (parseInt(mapHeight)/2) - (parseInt(pinSize) / 1.5) + "px";

//Function to get the offset caused by responsive window dimensions 
function getOffset() {
    let wi =  window.innerWidth - parseInt(mapWidth);   //Windows width - the maps width parseInt removes the "px"
    wi = Math.floor(wi/2);      //Get rid of decimals
    let hi =  window.innerHeight - parseInt(mapHeight);     //Same as earlier but for height 
    hi = Math.floor(hi/2);
    
    //Make sure they are not negative...
    if (wi < 0) {       // If width is negative
        wi = 0;         // Make width 0
    } 
    if (hi < 0) {       // If height is negative 
        hi = 0;         // Make height 0
    } 

    //Export
    let offset = {
        x: wi,
        y: hi,
    }
    return offset;      // Exports object named "offset", containing x and y values
}

//Function for moving the pin
function movePin(x, y) {
    target.style.left = x - getOffset().x + "px";
    target.style.top = y - getOffset().y + "px"; 
    
    //Show debug
    document.getElementById("debug").innerHTML = "Pin position: x = " + parseInt(target.style.left) + "px, y = " + parseInt(target.style.top) + "px"; 
}

//Moving the pin, ZingTouch listens on parent element
region.bind(parent, 'pan', function(e){
    let xPos = e.detail.events[0].x;        //Extract the coordinates
    let yPos = e.detail.events[0].y;

    //Move the pin with new coordinates
    movePin(xPos, yPos);
})