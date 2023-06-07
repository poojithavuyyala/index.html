const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const task = taskInput.value.trim();

  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

taskList.addEventListener('click', function(event) {
  if (event.target.className === 'delete-btn') {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});
s