// UHR START
let time = document.getElementById("current-time");

setInterval(() => {});

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

//UHR ENDE

//TO DO START
let addButton = document.getElementById("pushBtn");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("newTask");
let resetButton = document.getElementById("resetBtn");

function addTask() {
  if (document.querySelector("#newTask").value.length == 0) {
    alert("You have to write something :/");
  } else {
    let paragraph = document.createElement("p");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.classList.add("inputText");
    inputField.value = "";
    //paragraph.innerHTML = localStorage.getItem("value");

    function line() {
      paragraph.style.textDecoration = "line-through";
      paragraph.style.backgroundColor = "#ceedc7";
    }
    paragraph.addEventListener("click", line);

    function remove() {
      toDoContainer.removeChild(paragraph);
    }
    paragraph.addEventListener("dblclick", remove);

    function reset() {
      toDoContainer.removeChild(paragraph);
      //localStorage.removeItem("keyName");
    }
    resetButton.addEventListener("click", reset);

    //function display() {
    //localStorage.setItem("value", inputField.value);
    //paragraph.innerHTML = localStorage.getItem("value");
    //console.log(localStorage.getItem("value"));
    //}
    //inputField.addEventListener("keyup", display);
  }
}
addButton.addEventListener("click", addTask);

//TO DO ENDE
