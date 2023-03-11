const taskInput = document.getElementById("input-task");
const newTaskBtn = document.getElementById("new-task-button");
const clearTaskBtn = document.getElementById("clear-all-tasks");
const taskList = document.getElementById("task-list");
const tasks = [];
const errorMsg = document.getElementById("error-message");
const faq = document.getElementById("faq");
const faqText = document.getElementById("faq-text");

function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    li.innerText = task;
    taskList.appendChild(li);
    taskInput.value = "";
    decorateTask(li);
    deleteTask(li);
  }
}

function decorateTask(li) {
  li.addEventListener("click", function () {
    if (!li.style.textDecoration) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "";
    }
  });
}

function deleteTask(li) {
  li.addEventListener("dblclick", function () {
    li.remove();
  });
}

function empty() {
  const taskValue = taskInput.value;
  if (taskValue.length === 0) {
    errorMsg.innerText = "The task can not be empty";
  } else {
    errorMsg.innerText = "";
  }
}

function clearTheList() {
  taskList.innerHTML = "";
}

function showTheFaq() {
  faqText.innerText =
    "Enter the new task in the input field, then press the Add new task button. \nTo delete the entire list, press the Clear all tasks button. \nClick once on a task to mark it as completed. \nDouble-click on a task to delete that specific task.\nJános Lestár";
}

clearTaskBtn.addEventListener("click", clearTheList);
newTaskBtn.addEventListener("click", empty);
newTaskBtn.addEventListener("click", addTask);
faq.addEventListener("click", showTheFaq);