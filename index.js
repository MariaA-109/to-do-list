// ADD TASK
const pushDayButtons = document.querySelectorAll(".push-day");
const resetButton = document.getElementById("resetBtn");

// Loop through each push day button
pushDayButtons.forEach((button) => {
  // Add a click event listener to each push day button
  button.addEventListener("click", () => {
    // Prompt the user for the new todo item
    const newTodo = prompt("Add a To Do");

    // Get the added tasks div for the current push day button
    const addedTasksDiv = button.parentNode.querySelector(".addedTasks");

    // Create a new todo div and append it to the added tasks div
    const newTodoDiv = document.createElement("div");
    newTodoDiv.classList.add("addedTask");
    newTodoDiv.innerHTML = `
      <div class="circle"></div>
      <div class="to-dos">${newTodo}</div>
      <p class="inputText"></p>
    `;
    addedTasksDiv.appendChild(newTodoDiv);
  });
});

// ADD TASK ENDE

// UHR START
let time = document.getElementById("current-time");

setInterval(() => {});

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

//UHR ENDE
