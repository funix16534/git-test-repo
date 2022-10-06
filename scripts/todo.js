"use strict";

//Define necessary function and variable
const btnAdd = document.getElementById("btn-add");
const inputTask = document.getElementById("input-task");
const toDoList = document.getElementById("todo-list");
const btnClose = document.getElementsByClassName("close");
const toggleTask = document.getElementById("task");
const toDoContainer = document.getElementById("todo-container");
const list = document.getElementById("todo-list");

let dataTask;
let arrTask = new Array();
arrTask = localStorage.getItem("listTask") ? getFromStorage("listTask") : [];

//Display task
function renderTasks(tasks) {
  //Delete old list
  toDoList.innerHTML = "";
  //Add new li with each object in task array
  tasks
    .filter((task) => task.owner == current.use)
    .forEach((task) => {
      displayTask(task);
    });
}

//Add event on click for the span 'x'
function clickClose(t) {
  //Cut the task lie with the span on li
  arrTask.splice(
    arrTask.findIndex((todo) => todo.task == t),
    1
  );
  //Save to local storage
  saveToStorage("listTask", arrTask);
  //Display new todo list
  renderTasks(arrTask);
}

//Generate new li
const displayTask = function (data) {
  const html = `
  <li ${data.isDone == true ? 'class="checked"' : ""} value="${data.task}">
              ${data.task}<span class="close" onclick="clickClose('${
    data.task
  }')">×</span>
            </li>
  `;
  toDoList.insertAdjacentHTML("beforeend", html);
  toDoList.style.opacity = 1;
};

//Call when load page
renderTasks(arrTask);

//Add event for add button
btnAdd.addEventListener("click", function () {
  let checkTask = true; //if task invalid, the event will not happen.
  //Input data
  const data = {
    task: inputTask.value,
    owner: current.use,
    isDone: false,
  };
  //Must login before add task
  if (current === "") {
    alert("Please login first!");
    checkTask = false;
  }
  //Must fill the task
  if (data.task === "") {
    alert("Please input task!");
    checkTask = false;
  }
  //Save to local storage and display todo list
  if (checkTask === true) {
    dataTask = Object.assign({}, data);
    arrTask.push(dataTask);
    saveToStorage("listTask", arrTask);
    renderTasks(arrTask);
  }
  //Reset form
  inputTask.value = "";
});

//Add event when click on the task
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    //toggle class checked
    ev.target.classList.toggle("checked");
    //Find this and check Done for task 'checked'
    let found = arrTask.find(
      (t) => t.task == ev.target.firstChild.textContent.trim()
    );
    found.isDone = !found.isDone;
    //Save to local storage and display todo list
    saveToStorage("listTask", arrTask);
    renderTasks(arrTask);
  }
});
