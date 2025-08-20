function getDateTime() {
  const now = new Date();
  return now.toLocaleString();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>Added: ${getDateTime()}</small>`;
  
  const actions = document.createElement("div");
  actions.className = "actions";
  
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.className = "complete";
  completeBtn.onclick = () => markComplete(li, taskText);

  const editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.className = "edit";
  editBtn.onclick = () => editTask(taskInfo);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(actions);

  document.getElementById("pendingList").appendChild(li);

  input.value = "";
}

function markComplete(li, text) {
  li.querySelector(".actions").remove(); // remove buttons
  const taskInfo = li.querySelector(".task-info");
  taskInfo.innerHTML = `<strong>${text}</strong><br><small>Completed: ${getDateTime()}</small>`;
  document.getElementById("completedList").appendChild(li);
}

function editTask(taskInfo) {
  const newTask = prompt("Edit your task:", taskInfo.innerText.split("\n")[0]);
  if (newTask) {
    taskInfo.innerHTML = `<strong>${newTask}</strong><br><small>Edited: ${getDateTime()}</small>`;
  }
}
