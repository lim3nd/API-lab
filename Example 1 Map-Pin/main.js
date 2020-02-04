var ZingTouch = require('zingtouch');

var zt = new ZingTouch.Region(document.getElementById("touchArea"));

var myElement = document.getElementById('my-div');

zt.bind(myElement, 'pan', function(e){
	console.log(e);
}, false);



//Set the window height
document.getElementsByTagName("body")[0].style.height = window.innerHeight + "px"
//Resizing of window 
window.addEventListener("resize", () => { document.getElementsByTagName("body")[0].style.height = window.innerHeight + "px";; }, false);
