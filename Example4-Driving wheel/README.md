# Driving wheel example

## Library used

ZingTouch a gesture library helps the user to handle nice gestures with very few lines of code. Swipe, drag and drop, tap, pan, pinch and Rotate [See more](https://zingchart.github.io/zingtouch/#gestures).

### How to install

I used the CDN link, and imported it in the index.html

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/zingtouch/1.0.6/zingtouch.min.js"></script>
```

---

## Rotation (Driving wheel)

### How to interact

The idea is simple. it's a steering wheel that controls a car. Rotate the wheel left or right to control the car.

### Code walk through

Through our library, I have created a region or a parent element where all gestures happen.

```Javascript
 const region = new ZingTouch.Region(document.body);
```

then bound an image element to the rotate gesture to  update its transform style value every time the event is triggered.

```Javascript
myRotateElement.style.setProperty("transform", `rotate(${-angle}deg)`);
    car.style.setProperty("transform", `rotate(${-angle / 3}deg)`);
  },
```

### Challenges

The library is good, smooth and responsive to use in rotation gesture, however, I noticed couple of things are not included right out of the box. For example,
I needed to know the direction of rotation gesture to steer the car to left or right. Since the event does not give this information,I had to create a customed logic to keep a track on rotation's direction(clockwise/anti-clockwise).

```Javascript
if (rotateEventAngle > currentRotateEventAngle) {
      angle += 5;
    } else {
      angle -= 5;
    }
    currentRotateEventAngle = rotateEventAngle;
```

Another issue is that there is no context to the angle as I noticed.
for example, the event's angle can be 35,100 or 750 but we really do not know what is actually this angle representing.
I had to create an angle variable to hold the rotation value and maintain its changes.

```Javascript
//Set the initial rotation angles to zero.
let angle = 0;
let currentRotateEventAngle = 0;
```

---

## IxD perspective

I was excited about the "rotate" gesture and decided to utilize it to create at first a driving wheel prototype.

the rotation is an ideal interaction in a lot of scenarios in the real world especially where it requires a precision and micro steps adjustment. For instance, let's say we are designing a user interface for a 3D printer to adjust the head's position in very precise steps. This can be achieved by leveraging the infinite scale of rotate gesture instead of a slide gesture that has a limited scale.

---

## Contributor

Rasha Ahmed [Github](https://github.com/rashahmed)
