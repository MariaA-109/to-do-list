//plus: id="push-day"

let pushButton = document.getElementById("push-day");
let toDo = document.getElementById("to-dos");
let inputField = document.getElementById("newTask");
let deleteBtn = document.querySelector(".delete");

function newTask() {
  let pushButton = prompt("Add new Task");
  if (pushButton.value.inputField != null) {
    document.getElementById("to-dos").innerHTML = inputField.value;
  } else {
    prompt("You have to write something");
  }
}
pushButton.addEventListener("click", newTask);
("use strict");

// UHR START
let time = document.getElementById("current-time");

setInterval(() => {});

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

//UHR ENDE
