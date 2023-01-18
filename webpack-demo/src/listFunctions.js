const taskList = [];
function addTask() {
  let count = 0;
  const taskInput = document.getElementById('myInput');
  const taskText = taskInput.value;
  const task = { text: taskText, completed: false, index: count++ };
  taskList.push(task);
  taskInput.value = '';
}