// eslint-disable-next-line import/no-cycle
import { showList } from './index.js';

// eslint-disable-next-line import/no-mutable-exports
export let listData = [{}];
if (localStorage.toDoStorage !== undefined) {
  listData = JSON.parse(localStorage.toDoStorage);
}
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
    li.appendChild(checkbox);

    const button = document.createElement('button');
    button.classList.add('threeDots');
    button.innerText = 'edit';
    li.appendChild(button);

    showList.appendChild(li);
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.id = 'removeButton';
    removeTaskBtn.innerHTML = 'remove';
    li.appendChild(removeTaskBtn);
    removeTaskBtn.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      removeTask(index);
    });
  });
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
  // eslint-disable-next-line no-return-assign
  listData.forEach((task, i) => (task.index = i + 1));
  const str = JSON.stringify(listData);
  localStorage.setItem('toDoStorage', str);

  displayTasks();
}

export { displayTasks };
