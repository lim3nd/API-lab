console.log("Running....");

//document.body.onload = createObject;
let x = 0;
let y = 0;
let check = false;

const activeRegion = new ZingTouch.Region(document.body);
let childElement1 = document.getElementById('dragObj1');
let touchArea = document.getElementById("toucharea");
const pan = new ZingTouch.Pan({
  treshold: 0

});

//const pan = new ZingTouch.Pan();

/*
const canvas = document.getElementById("graphics");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
const ctx = canvas.getContext("2d");
*/

let obj1 = dragObj1.getBoundingClientRect();
console.log(obj1);
let objX = obj1.x;
let objY = obj1.y;
let objWidth = obj1.width;
let objHeight = obj1.height;
console.log("X: " + objX + ", Y: " + objY + ", Width: " + objWidth + ", Height: " + objHeight);

let destinationObj = container.getBoundingClientRect();
let destX = destinationObj.x;
let destY = destinationObj.y;
let destWidth = destinationObj.width;
let destHeight = destinationObj.height;
console.log("X: " + destX + ", Y:" + destY + ", Width: " + destWidth + ", Height: " + destHeight);




window.onresize = function(){
  obj1 = dragObj1.getBoundingClientRect();
  console.log(obj1);
  objX = obj1.x;
  objY = obj1.y;
  objWidth = obj1.width;
  objHeight = obj1.height;
  console.log("X: " + objX + ", Y: " + objY + ", Width: " + objWidth + ", Height: " + objHeight);

  destinationObj = container.getBoundingClientRect();
  destX = destinationObj.x;
  destY = destinationObj.y;
  destWidth = destinationObj.width;
  destHeight = destinationObj.height;
  console.log("X: " + destX + ", Y:" + destY + ", Width: " + destWidth + ", Height: " + destHeight);


}
function travelDistX(){
  let obj = childElement1.getBoundingClientRect();
  let posX = obj.x;
  let trvX = destX - posX;
  return trvX;
}
function travelDistY(){
  let obj = childElement1.getBoundingClientRect();
  let posY = obj.y;
  let trvY = destY - posY;
  return trvY;
}

function objectX(){
  let o = dragObj1.getBoundingClientRect();
  let objPosX = o.x;
  return objPosX;
}

function objectY(){
  let o = dragObj1.getBoundingClientRect();
  let objPosY = o.y;
  return objPosY;
}
function checkPos(){
  if(objectX() >=(destX) && objectY() >= (destY)){
    childElement1.style.visibility = "hidden";
  }
}

console.log(travelDistX(), + " " + travelDistY());
console.log(childElement1.directionFromOrigin);

activeRegion.bind(touchArea, pan, function (event){
    console.log(event.detail);
    x += event.detail.data[0].change.x;
    y += event.detail.data[0].change.y;
  
      
    //activeRegion.style.transform = "touch-action: pan-x, pan-y";
    //childElement.style.transform = 'pan';
      
    childElement1.style.left = `${x}px`;
    childElement1.style.top = `${y}px`;
      
    //console.log(objectX() + " " + objectY());
    //console.log(destX + " " + destY);

    //objectX() >=(destX) && objectY() >= (destY)
    //childElement1.style.display = "none";
    checkPos();
}, false);

let dropArea = document.getElementById("container");
dropArea.addEventListener("click", function(event){
  console.log(objectX() + ", " + destX);
  console.log(objectY() + ", " + destY);
  if(objectX() == 0 && objectY() == 0){
    childElement1.style.left = "8px";
    childElement1.style.top = "8px";
    childElement1.style.visibility = "visible"
    childElement1.style.backgroundColor = "rgb(148, 164, 228)";
    childElement1.style.width = "100px";
    childElement1.style.height = "100px";
    console.log("Check")
    /*background-color: rgb(148, 164, 228);
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%; */
  }

});
