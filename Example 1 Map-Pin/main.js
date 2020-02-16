//Set the pin position
//let currentX = document.getElementById("child").style.left = 200;
//document.getElementById("child").style.top = 200;

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

