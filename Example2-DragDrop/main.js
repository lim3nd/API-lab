//Variables
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
let slot1 = false;
let slotLock = false;
let originalPosX = 0;
let originalPosY = 0;
let dropArea = document.getElementById("container");

//Variables with no real use in this prototype, but could be used with more dragable objects.
let counter = 0; 
let savedArray = [];
let slotItem;

//Sets the body of the html as a ZingTouch region
const activeRegion = new ZingTouch.Region(document.body);
let childElement1 = document.getElementById('dragObj1');
let touchArea = document.getElementById("toucharea");
//Creates a custom Pan object. No different from the standard pan object.
const pan = new ZingTouch.Pan({
  numInputs: 1,
  treshold: 0  
});


let destinationObj = container.getBoundingClientRect();
let obj1 = childElement1.getBoundingClientRect();
originalPosX = obj1.x;
originalPosY = obj1.y;


//Function to get the coordinates and dimensions
// of both the dragable div and the container div
function getPos(){
  childElement1 = document.getElementById('dragObj1');
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

//Runs getPos to set initial values.
getPos();


//Creates a function which runs getPos when window is resized.
window.onresize = function(){
  getPos();
}

//Function for getting the dragable objects x position
function objectX(){
  let o = dragObj1.getBoundingClientRect();
  let objPosX = o.x;
  return objPosX;
}

//Function for getting the dragable objects y position
function objectY(){
  let o = dragObj1.getBoundingClientRect();
  let objPosY = o.y;
  return objPosY;
}

//Function to check if the dragable object is inside the container object
function checkPos(){
  if((objectX() >= destX) && (objectY() <= (destX + destWidth)) && (objectY() >= destY) && (objectY()) <= (destY+destHeight)){
    check = true;
    return check;
  }
}


function slot(){
  if(slot1 === true && slotLock === false){
    counter++;
    document.getElementById('output').innerHTML = "Object saved!"; 
    slotLock = true;
    savedArray.push("item1");
  }
}

/*
  Assigns the pan motion to touchArea. When the motion is active, 
  the border will be highlighted, and the movement in x and y will 
  be updated in the css file. 
*/
activeRegion.bind(touchArea, pan, function (event){
    childElement1.style.borderColor = "rgb(255, 255, 255)";
    x += event.detail.data[0].change.x;
    y += event.detail.data[0].change.y;
    childElement1.style.left = `${x}px`;
    childElement1.style.top = `${y}px`;
}, false);

/*
  When the container is clicked and the dragable object is clicked,
  the object will be visible again and resetted to its orignial postion
*/
dropArea.addEventListener("click", function(event){  
  if((objectX() >= destX) && (objectY() <= (destX + destWidth)) && (objectY() >= destY) && (objectY()) <= (destY+destHeight)){
    console.log(originalPosX + " " + originalPosY);
    childElement1.style.left = (originalPosX/2) + "px";
    childElement1.style.top = (originalPosY/2) + "px";
    getPos();
    check = false;
    slot1 = true;
    slotLock = false;
    x = 0;
    y = 0;
    document.getElementById('output').innerHTML = ""; 
    childElement1.style.visibility = "visible";
  }
});

/*
  As the pan motion does not inclued a varible to know when the motion is over,
  a mouse-up function is added to know check when the motion wether the motion is over.
  When the motion is over, the position of the dragable object is checked.
  If it is in the container it will be hidden. If it is not, it will return to the original postion.
*/
touchArea.addEventListener("mouseup", function(event){
  childElement1.style.borderColor = "rgb(148, 164, 228)";
  if(checkPos() === true){      
    childElement1.style.visibility = "hidden";
    slot1 = true;
    slot();
    x = 0;
    y = 0;
  }else{
    childElement1.style.left = (originalPosX/2) + "px";
    childElement1.style.top = (originalPosY/2) + "px";
    x = 0;
    y = 0;
  }
});
