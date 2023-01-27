import './style.css';
// eslint-disable-next-line import/no-cycle
import {
  addTask, displayTasks, clearCompletedTasks,
} from './listFunctions.js';

const containerDiv = document.createElement('div');
containerDiv.classList.add('add-container');
export const element = document.querySelector('#toDoList');
const addToDo = document.createElement('p');
const addPlaceHolder = document.createElement('input');
export const showList = document.createElement('div');

const addButton = document.createElement('button');
addButton.id = 'addTask1';
addButton.innerHTML = '';

function component() {
  addToDo.innerHTML = "Today's To Do";
  addToDo.classList.add('todayHead');
  addPlaceHolder.classList.add('addPlaceHolder');
  addPlaceHolder.setAttribute('placeholder', 'Add to your list....');
  addPlaceHolder.setAttribute('type', 'text');
  // Lodash, now imported by this script
  const clearAll = document.createElement('button');
  clearAll.id = 'clearCompleted';
  clearAll.innerHTML = 'Clear all completed';
  clearAll.classList = 'clearAll';

  element.classList.add('toDoList');
  element.appendChild(addToDo);
  containerDiv.appendChild(addPlaceHolder);
  containerDiv.appendChild(addButton);
  element.appendChild(containerDiv);
  element.appendChild(showList);
  element.appendChild(clearAll);

  document.querySelector('#addTask1').addEventListener('click', () => {
    addTask(document.querySelector('.addPlaceHolder').value);
  });

  const clearCompletedButton = document.querySelector('#clearCompleted');
  clearCompletedButton.addEventListener('click', clearCompletedTasks);
  return element;
}
displayTasks();
document.body.appendChild(component());