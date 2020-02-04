let ZingTouch = require('zingtouch');


let zt = new ZingTouch.Region(document.body);

let dragObj = document.getElementById("my-div");

zt.bind(dragObj, "pan", function(e){

}, false);

new ZingTouch.Pan({
	numInputs: 1
})

class destinationFolder{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        element = document.createElement(my-div);
    }
}

let folder = new destinationFolder(5, 5, 100, 100);
folder.draw();