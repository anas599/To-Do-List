import './style.css';
import addTask from './listFunctions.js';

export const listData = [
  {
    description: 'Wash the car',
    completed: true,
    index: 2,
  },
  {
    description: 'Pay the all bills',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the Gym',
    completed: true,
    index: 3,
  },
];
const containerDiv = document.createElement('div');
containerDiv.classList.add('add-container');
const element = document.querySelector('#toDoList');
const addToDo = document.createElement('p');
const addPlaceHolder = document.createElement('input');
export const showList = document.createElement('div');
const clearAll = document.createElement('a');
const addButton = document.createElement('button');
addButton.id = 'addTask1';
addButton.innerHTML = 'Add1';
function component() {
  addToDo.innerHTML = "Today's To Do";
  addToDo.classList.add('todayHead');
  addPlaceHolder.classList.add('addPlaceHolder');
  addPlaceHolder.setAttribute('placeholder', 'Add to your list...');
  addPlaceHolder.setAttribute('type', 'text');
  clearAll.innerHTML = 'Clear all completed';
  clearAll.classList = 'clearAll';

  // Lodash, now imported by this script

  showList.innerHTML = listData
    .map(
      (toDoArr) => `
      <li class='oneTask'>
      <p id='indexNum'>${toDoArr.index} </p>
      <p>${toDoArr.description} </p>
      <label for="checkbox"> </label>
      <input type='checkbox' id="checkbox">
      <i class="threeDots"> .</i>
    </li>
    `,
    )
    .sort()
    .join('');

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

  return element;
}

document.body.appendChild(component());