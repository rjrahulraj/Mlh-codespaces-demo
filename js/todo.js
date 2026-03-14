const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTask");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(addTaskToDOM);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.innerText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerText = task;

  li.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  taskList.appendChild(li);
}

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (!task) return;

  addTaskToDOM(task);
  saveTasks();

  taskInput.value = "";
});

loadTasks();