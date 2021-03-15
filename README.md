# rxjs-alpha

learning log for rxjs

## Streams in JavaScript

- Continuous flow of data that is responding to an event or data that is being sent manually responding to events.
- For Example, on loading an angular page clicks can be considered as continuous stream of data.

> To understand his we can create a simple angular project.

## Creating an angular project

- Install node
- Install Angular CLI
- Use the following command to create an angular project.
  - ng new <<project-name>>

## Example Streams in javascript

- Continuous flow of data generated for an event
- examples are eventListener, setInterval, setTimeout
  EventListener will trigger an action when the specified event is triggered, setInterval is invoke a function after
  a specified duration in milliseconds, setTimeOut will trigger an action only once after a specified duration.

```javascript
document.addEventListener("click", () => {
  console.log("Event has been triggered");
});
let counter = 0;
let intervalTest = setInterval(() => {
  console.log("triggered from timeout and current trigger number:" + counter);
  counter++;
  if (counter >= 2) {
    clearInterval(intervalTest);
  }
}, 1000);
```
## What problem does rxjs solve
When we nest a group of event streams, it will cause a situation call callback hell. Because when a parent stream is invoked twice the child there will be multiple child streams that are invoked.

In the above example if we add the setInterval block inside the event for mouse click. Every time a mouse click is initiated it will trigger the function called by setInterval. We might have to perform the setInterval function after the completion of function, called by mouse click. Rxjs will help in dealing with ambiguous situations like this.

> Due to nested callbacks in javascript, it will become hard to maintain code and readability. Which is called as **Callback hell**

## What is rxjs
Rxjs stands for **Reactive extensions for javascript**. It helps to combine streams in a maintainable way. So it resolves callback hell.