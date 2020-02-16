console.log("Running....");

//document.body.onload = createObject;
let x = 0;
let y = 0;


const activeRegion = new ZingTouch.Region(document.body);
const childElement = document.getElementById('dragObj1');
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
  let obj = childElement.getBoundingClientRect();
  let posX = obj.x;
  let trvX = destX - posX;
  return trvX;
}
function travelDistY(){
  let obj = childElement.getBoundingClientRect();
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

console.log(travelDistX(), + " " + travelDistY());
console.log(childElement.directionFromOrigin);

activeRegion.bind(childElement, pan, function(event){
  //if(objectX() <=destX && objectY() <= destY){
    console.log(event.detail);
    x += event.detail.data[0].change.x;
    y += event.detail.data[0].change.y;

    
    //activeRegion.style.transform = "touch-action: pan-x, pan-y";
    //childElement.style.transform = 'pan';
    
    childElement.style.left = `${x}px`;
    childElement.style.top = `${y}px`;
    //console.log(objectX() + " " + objectY());
    //console.log(destX + " " + destY);
  //}else{
    //childElement.style.display = "none";
  //}
}, false);

/*
if travelDistX/travelDistY === Math.tan(childElement.directionFromOrigin)
*/