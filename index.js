//plus: id="push-day"

// ADD TASK
let pushButton = document.getElementById("push-day");
let toDo = document.getElementById("to-dos");
let inputField = document.getElementById("newTask");
let deleteBtn = document.querySelector(".delete");

function newTask(e) {
  e.preventDefault();
  let pushButton = prompt("Add new Task");
  if (pushButton !== null) {
    console.log(pushButton, "Hello");
    return (document.getElementById("to-dos").innerHTML = pushButton);
  } else {
    prompt("You have to write something");
  }
}
pushButton.addEventListener("click", newTask);
("use strict");
// ADD TASK ENDE

// UHR START
let time = document.getElementById("current-time");

setInterval(() => {});

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

//UHR ENDE
