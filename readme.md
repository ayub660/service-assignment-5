QUESTION : 1 1.document.getElementById : It is return a single element, selected by id and it is works for unique ids 2. document.getElementByClassName :return htmlCollection and select by class name . You can put same className to any elements 3.document.querySelector : it selects the first element that matches a css selector and wii get an object if its found , if not then null like id selector. 4.document.querySelectorAll : it selects all the elements that match a css seclector. It will return a static NodeList.

document.getElementById("myId");
document.getElementsByClassName("box"); document.querySelector(".box");
document.querySelectorAll(".box");

Question:2

first Create the element then Set content or attributes finally ,Insert it into the dom

Question:3

Event bubbling is a dom model event where an event triggered on a child element propagates up through its patent in the dom hierarchy . It has two main phases one is event propagation and other one is event capturing.It works the way where First event triggered on target element after that event propagates upwards and then event listeners Execute .

Question:4

Event Delegation is a technique in javaScript where instead of attaching event listeners to multiple child elements individually , you can attach a single event listener to a common parent . It is very useful because it consumes less memory usage compared to traversing traditional techniques . traverse system can uses more memory and it can be load delay . on the other hand , event delegation also handles dynamically added elements, and ” Cleaner and more maintainable code ”.

Question:5

1.event.preventDefault() : it stops the default browser behavior associated with the event .However, the event still bubbles up the dom . especially, its useful for form submission.

event.stopPropagation():it Stops the event from bubbling up or capturing down the DOM. The default browser action still happens but the parent element won’t receive the event. Can use while Preventing a click event on a child element from triggering the parent’s click handler.