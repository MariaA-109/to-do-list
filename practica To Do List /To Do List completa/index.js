// UHR START
let time = document.getElementById("current-time");

setInterval(() => {});

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

//UHR ENDE

//TO DO START

//select elements
const form = document.getElementById("todoform");
const todoInput = document.getElementById("newTodo");
const todosBox = document.getElementById("todosBox");

//variables
let todos = [];
let editTodoId = -1;

//form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  saveTodo();
  addTodos();
});

//save a todo
function saveTodo() {
  const todoValue = todoInput.value;

  //check if input is empty
  const inputEmpty = todoValue === "";

  //check if todos are duplicated
  const duplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todoValue.toUpperCase()
  );

  if (inputEmpty) {
    alert("you have to write something :/");
  } else if (duplicate) {
    alert("that To-Do already exists");
  } else {
    if (editTodoId >= 0) {
      //update edited todo
      todos = todos.map((todo, index) => ({
        ...todo,
        value: index === editTodoId ? todoValue : todo.value,
      }));
      editTodoId = -1;
    } else {
      todos.push({
        value: todoValue,
        checked: false,
      });
    }

    todoInput.value = "";
    console.log(todos);
  }
}
//save a todo

//add todo
function addTodos() {
  if (todos.length === 0) {
    todosBox.innerHTML = "<center>No To Dos yet</center>";
    return;
  }
  //clear element so that each todo appears just once
  todosBox.innerHTML = "";

  //add each text one below the other
  todos.forEach((todo, index) => {
    todosBox.innerHTML += `
       <div class="todo" id=${index}>
          <i 
            class="bi ${
              todo.checked ? `bi-check-circle-fill` : `bi bi-circle`
            } " data-action="check">
          </i>
          <p class="p" data-action="check">${todo.value}</p>
          <i class="bi bi-pencil-square" data-action="edit"></i>
          <i class="bi bi-trash" data-action="delete"></i>
        </div>`;
  });
}

//add todo

//click event listener for all to dos

todosBox.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== "todo") return;

  //todo ID para seleccionar el todo que queremos cambiar
  const todo = parentElement;
  const todoId = Number(todo.id);

  //target action
  const action = target.dataset.action;

  action === "check" && checkTodo(todoId);
  action === "edit" && editTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});

//check todo

function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    value: todo.value,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  addTodos();
}

function editTodo(todoId) {
  todoInput.value = todos[todoId].value;
  editTodoId = todoId;
}

function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  editTodoId = -1;
  // devuelve un nuevo array con el todo añadido porque compara si el index no es igual al id del todo
  addTodos();
}
