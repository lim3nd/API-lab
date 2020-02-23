let pageCounter = 1;

const activeRegion = new ZingTouch.Region(document.body);
let touchArea = document.getElementById("touch-area");
const swipe = new ZingTouch.Swipe({
  escapeVelocity: 0.1,
  maxRestTime: 100  
});

activeRegion.bind(touchArea, swipe, function(event){
    console.log(event.detail);
    console.log(event.detail.data[0].currentDirection);
    if(event.detail.data[0].currentDirection == 360){
      pageCounter++;
      console.log(pageCounter);
    }else if(event.detail.data[0].currentDirection == 180){
      pageCounter--;
      console.log(pageCounter);
    }
});
