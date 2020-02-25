# Exploring ZingTouch through Prototypes

## What the project does

During the lenght of this project we explored the full lenght of the JavaScript library called ZingTouch.
ZingTouch includes 5 premade touch-motions:
* Tap
* Swipe
* Pan
* Rotate
* Distance

It also includes the ability to create custom motions.

With these motions we have created 12 implementation prototypes that uses one of the motions each.

## Why the project is useful

The project explores the motions of the library by trying to create examples with user value.
It also tries to test the usefulness of the library when prototyping for design.

While exploring and trying to implement the library we noticed that you are still required to complement the code.
So, using this as a prototyping tool is not optimal as it requires equal effort compared to using no library at all.
However, some functions are useful. For example:

* Tap
	* Pros: Easy addition of another input to trigger the event
	* Cons: Works as a normal mouse-click, dubble input only works on touch screens

* Swipe
	* Pros: Includes the use of velocity
	* Cons: Not easier to implement than already existing mouse events

* Pan
	* Pros: change.x, change.y are nice tools
	* Cons: When gesture exits a touch area there is no “end” event, complicated to use

* Rotate
	* Pros: Easy implementation on touchscreens, the angle parameter is precise 
	* Cons: Rotation can not be attached to the object, only the mouse

* Distance - Requires multiple inputs, so we have not experimented with it.


## How users can get started with the project
Users can download this repository and start using our prototypes immediately.
Requires https://zingchart.github.io/zingtouch.


## Who maintains and contributes to the project

* Agustin Guerrero: Example 9 - Color Wheel, Example10 - Volume
* Christian Golcic: Example6 - Brightness, Example7 - Direction
* Emil Nilsson Delborg: Example2 - Drag & Drop, Example5 - Swiping through pages
* Ivar Lundin: Example1 - Map Pin, Example 3 - Slide to Unlock
* Jaeger Ehrenbeck: Example8 - Hue Saturation Changer, Example11 - Egg Timer
* Rasha Ahmed: Example4 - Driving Wheel, Example12 - Bulb

(insert ZingTouch contributers here) https://zingchart.github.io/zingtouch

## Where users can get help with your project

N/A