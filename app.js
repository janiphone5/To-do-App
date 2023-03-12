const input = document.getElementById('input-task');
const errorMsg = document.getElementById('error-message');
const newTaskBtn = document.getElementById('new-task-button');
const clearAllTasksBtn = document.getElementById('clear-all-tasks');
const faq = document.getElementById('faq');
const faqText = document.getElementById('faq-text');
const taskList = document.getElementById('task-list');

function addTask() {
  const task = input.value;
  if (task !== "") {
    const li = document.createElement('li');
    li.innerText = task;
    taskList.appendChild(li);
    input.value = "";
    decorateTask(li);
    deleteTask(li);
  }
}

function decorateTask(li) {
  li.addEventListener('click', function() {
    if (!li.style.textDecoration) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "";
    }
  })
}

function deleteTask(li) {
  li.addEventListener('dblclick', function() {
    li.remove();
  })
}

function empty() {
  const task = input.value;
  if (task.length = 0) {
    errorMsg.innerText = "Please write task";
  } else {
    errorMsg.innerText = "";
  }
}

function clearTheList() {
  taskList.innerHTML = "";
}

function showTheFaq() {
  if (faqText.innerText.length === 0) {
    faqText.innerText =
    "Enter the new task in the input field, then press the Add new task button. \nTo delete the entire list, press the Clear all tasks button. \nClick once on a task to mark it as completed. \nDouble-click on a task to delete that specific task.\nJános Lestár";
  } else {
    faqText.innerText = "";
  }
}

clearAllTasksBtn.addEventListener("click", clearTheList);
newTaskBtn.addEventListener("click", empty);
newTaskBtn.addEventListener("click", addTask);
faq.addEventListener("click", showTheFaq);
