//Variables
let pageCounter = 0;
const activeRegion = new ZingTouch.Region(document.body);
let touchArea = document.getElementById("touch-area");
let pageNumber = document.getElementById("number");
let headLine = document.getElementById("headline");
let text = document.getElementById("text");

//Creates custom swipe object with lower escapeVelocity than standard
const swipe = new ZingTouch.Swipe({
  escapeVelocity: 0.05,
  maxRestTime: 100  
});

/*
  Function to change pages.
  Conditional that checks the pageCounter variable, and changes text accordingly.
*/
function pageChanger(){
  if(pageCounter == 0){
    pageNumber.innerHTML = "Page 1";
    headLine.innerHTML = "Swipe to Change Page";
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  }else if(pageCounter == 1){
    pageNumber.innerHTML = "Page 2";
    headLine.innerHTML = "<br>";
    text.innerHTML = "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.";

  }else if(pageCounter == 2){
    pageNumber.innerHTML = "Page 3";
    headLine.innerHTML = "<br>";
    text.innerHTML = "Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.";
  }
}

/*
  Adds the swipe motion to touchArea. Condition to check which direction is swiped.
  Right to left: Go to next page
  Left to right: Go to previous page.
  Swiping up 45 degrees or down 45 degrees from origin is still recognized.
  Checks the value of pageCounter and adds or subtracts.
  Calls pageChanger method.
*/
activeRegion.bind(touchArea, swipe, function(event){
  console.log(event.detail.data[0].currentDirection);
    if((315 <= event.detail.data[0].currentDirection && event.detail.data[0].currentDirection <= 360) || (0 <= event.detail.data[0].currentDirection && event.detail.data[0].currentDirection <= 45)){
      if(pageCounter >= 1){
        pageCounter--;
      }
      pageChanger();
    }else if(135 <= event.detail.data[0].currentDirection <= 225){
      if(pageCounter < 2){
        pageCounter++;
      }
      pageChanger();
    }
});
