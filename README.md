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



## Who maintains and contributes to the project

* Agustin Guerrero
* Christian Golcic
* Emil Nilsson Delborg - Example 2 - Drag & Drop, Exmaple 5 - Swiping through pages
* Ivar Lundin
* Jaeger Ehrenbeck
* Rasha Ahmed

(insert ZingTouch contributers here) https://zingchart.github.io/zingtouch

## Where users can get help with your project

N/A