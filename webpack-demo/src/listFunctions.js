// eslint-disable-next-line import/no-cycle
import { listData, showList } from './index.js';

function displayTasks() {
  showList.innerHTML = listData
    .map(
      (toDoArr) => `
      <li class='oneTask'>
      <p id='indexNum'>${toDoArr.index} </p>
      <p>${toDoArr.description} </p>
      <label for="checkbox"> </label>
      <input type='checkbox' id="checkbox">
      <i class="threeDots"> .</i>
    <button id='removeButton' onclick="removeTask(toDoArr.description)">remove</i>

    </li>
    `,
    )
    .sort()
    .join('');
}

export function addTask(description) {
  const nextIndex = listData.length + 1;
  const newTask = {
    description,
    completed: false,
    index: nextIndex,
  };
  listData.push(newTask);
  displayTasks();
}

export function removeTask(description) {
  listData = listData.filter(
    (x) => x.description !== description,
  );
}
// document.querySelector('#removeButton').addEventListener('click', () => {
//   removeTask(document.querySelector('#removeButton').value);
// });
