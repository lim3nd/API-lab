console.log("Running....");

const ZingTouch = require('zingtouch');

let touchArea = document.getElementById("toucharea");
let myRegion = new ZingTouch.Region(document.body);
const pan = new ZingTouch.Pan();

myRegion.bind(touchArea, "pan", function(e){
  console.log(e.detail);
});