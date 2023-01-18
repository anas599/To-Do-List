// eslint-disable-next-line import/no-cycle
import { listData, showList } from './index.js';

export default function addTask(description) {
  const nextIndex = listData.length + 1;
  const newTask = {
    description,
    completed: false,
    index: nextIndex,
  };
  listData.push(newTask);
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
}
