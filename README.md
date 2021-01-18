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

## Streams in javascript

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
