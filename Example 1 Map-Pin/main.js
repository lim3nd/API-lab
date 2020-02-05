//Set the pin position
let currentX = document.getElementById("child").style.left = 200;
document.getElementById("child").style.top = 200;



var region = new ZingTouch.Region(document.getElementById('parent'));
var target = document.getElementById('child');

region.bind(target, 'pan', function(e){
    let xPos = e.detail.events[0].x;
    let yPos = e.detail.events[0].y;

    console.log(e.detail.events[0]);
    //console.log(`X = ${xPos} / Y = ${yPos}`)
})

//let currentposx = document.getElementById('child').style;
    //let leftY = event.detail.data[0].distanceFromOrigin;
    //let newPos = currentX + leftY;

    //console.log(newPos);
    

    //document.getElementById("child").style.left = newPos;
    //currentX = newPos;


    //let x = e.x
  //move element
    //target.style.left = currentposx