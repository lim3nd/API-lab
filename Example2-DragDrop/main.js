let x = 0;
let y = 0;
let check = false;
let destX = 0;
let destY = 0;
let destWidth = 0;
let destHeight = 0;
let objX = 0;
let objY = 0;
let objWidth = 0;
let objHeight = 0;
let counter = 0;
let slot1 = false;
let slotLock = false;
let slotItem;
let savedArray = [];

const activeRegion = new ZingTouch.Region(document.body);
let childElement1 = document.getElementById('dragObj1');
let touchArea = document.getElementById("toucharea");
const pan = new ZingTouch.Pan({
  treshold: 0

});

function getPos(){
  childElement1 = document.getElementById('dragObj1');
  obj1 = dragObj1.getBoundingClientRect();
  objX = obj1.x;
  objY = obj1.y;
  objWidth = obj1.width;
  objHeight = obj1.height;

  let destinationObj = container.getBoundingClientRect();
  destX = destinationObj.x;
  destY = destinationObj.y;
  destWidth = destinationObj.width;
  destHeight = destinationObj.height;
}

getPos();


window.onresize = function(){
  obj1 = dragObj1.getBoundingClientRect();
  objX = obj1.x;
  objY = obj1.y;
  objWidth = obj1.width;
  objHeight = obj1.height;

  destinationObj = container.getBoundingClientRect();
  destX = destinationObj.x;
  destY = destinationObj.y;
  destWidth = destinationObj.width;
  destHeight = destinationObj.height;
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
    check = true;
    return check;
  }
}
function newPosX(){
  x += x;
  let newX = objX + x;
  return newX;
}
function newPosY(){
  y += y;
  let newY = objY + y;
  return newY;
}
function slot(){
  if(slot1 === true && slotLock === false){
    counter++;
    document.getElementById('output').innerHTML = counter; 
    slotLock = true;
    savedArray.push("item1");
  }
}


activeRegion.bind(touchArea, pan, function (event){
  x += event.detail.data[0].change.x;
  y += event.detail.data[0].change.y;
  childElement1.style.left = `${x}px`;
  childElement1.style.top = `${y}px`;

  if(checkPos() === true){      
      childElement1.style.visibility = "hidden";
      slot1 = true;
      slot();
    }
}, false);

let dropArea = document.getElementById("container");
dropArea.addEventListener("click", function(event){
  if((objectX() >= destX) && (objectY() <= (destX + destWidth)) && (objectY() >= destY) && (objectY()) <= (destY+destHeight)){
    childElement1.style.left = "8px";
    childElement1.style.top = "8px";
    childElement1.style.visibility = "visible";
    getPos();
    check = false;
    slot1 = true;
    slotLock = false;
    x=0;
    y=0;
  }
});
