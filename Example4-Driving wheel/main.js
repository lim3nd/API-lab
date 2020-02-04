const region = new ZingTouch.Region(document.body);
const myRotateElement = document.getElementById("my-rotate");

region.bind(
  myRotateElement,
  "rotate",
  function(e) {
    //Actions here
    const angle = e.detail.angle;
    myRotateElement.style.transform = `rotate(${-angle}deg)`;
  },
  false
);
