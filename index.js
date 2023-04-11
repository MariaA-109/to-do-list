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
