// eslint-disable-next-line import/no-cycle
import { showList } from './index.js';
// eslint-disable-next-line import/no-mutable-exports
export let listData = localStorage.toDoStorage !== undefined
  ? JSON.parse(localStorage.toDoStorage)
  : [];
export default listData;

function displayTasks() {
  showList.innerHTML = '';
  listData.forEach((toDoArr, index) => {
    const li = document.createElement('li');
    li.classList.add('oneTask');
    const p1 = document.createElement('p');
    p1.id = 'indexNum';
    p1.innerText = toDoArr.index;
    li.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = toDoArr.description;
    li.appendChild(p2);

    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox');
    li.appendChild(label);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    if (toDoArr.completed) {
      checkbox.setAttribute('checked', true);
      li.classList.add('completed');
    }
    li.appendChild(checkbox);
    checkbox.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      updateTaskStatus(index);
    });

    const button = document.createElement('button');
    button.classList.add('threeDots');
    button.innerText = '__';
    li.appendChild(button);
    button.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      editTask(index);
    });

    showList.appendChild(li);
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.id = `removeButton-${index}`;
    removeTaskBtn.innerHTML = '.';
    li.appendChild(removeTaskBtn);
    removeTaskBtn.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeTask(index);
    });
  });
}
export function clearCompletedTasks() {
  listData = listData.filter((task) => !task.completed);
  const str = JSON.stringify(listData);
  localStorage.setItem('toDoStorage', str);
  displayTasks();
}

export function addTask(description) {
  const nextIndex = listData.length + 1;
  const newTask = {
    description,
    completed: false,
    index: nextIndex,
  };
  listData.push(newTask);
  const str = JSON.stringify(listData);
  localStorage.setItem('toDoStorage', str);
  displayTasks();
}

export function removeTask(index) {
  listData.splice(index, 1);
  for (let i = 0; i < listData.length; i += 1) {
    listData[i].index = i + 1;
  } const str = JSON.stringify(listData);
  localStorage.setItem('toDoStorage', str);
  displayTasks();
}

export function editTask(index) {
  const dotsIcon = document.querySelector(`#removeButton-${index}`);
  dotsIcon.classList.toggle('showDelete');
  const task = document.querySelectorAll('.oneTask')[index];
  const p2 = task.querySelector('p:nth-of-type(2)');
  task.style.backgroundColor = '#f8f692';
  const newDescription = document.createElement('input');
  newDescription.setAttribute('type', 'text');
  newDescription.value = listData[index].description;
  p2.parentNode.replaceChild(newDescription, p2);
  newDescription.onblur = function away() {
    listData[index].description = this.value;
    localStorage.setItem('toDoStorage', JSON.stringify(listData));

    displayTasks();
  };
}
export function updateTaskStatus(index) {
  const checkbox = document.querySelectorAll('#checkbox')[index];
  listData[index].completed = !listData[index].completed;
  listData[index].completed = checkbox.checked;
  const taskElement = document.querySelectorAll('.oneTask')[index];
  if (listData[index].completed) {
    taskElement.classList.add('completed');
  } else {
    taskElement.classList.remove('completed');
  }
  localStorage.setItem('toDoStorage', JSON.stringify(listData));
}
export { displayTasks };