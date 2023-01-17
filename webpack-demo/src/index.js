import './style.css';

function component() {
  const element = document.querySelector('#toDoList');
  const btn = document.createElement('li');
  const addToDo = document.createElement('p');
  const x = document.createElement('input');
  const addPlaceHolder = document.createElement('input');
  const showList = document.createElement('div');
  const clearAll = document.createElement('a');

  const refreshIcon = document.createElement('i');
  refreshIcon.innerHTML = '<i class="fa fa-refresh"></i>';
  addToDo.innerHTML = 'Today\'s To Do';
  addToDo.classList.add('todayHead');
  addPlaceHolder.classList.add('addPlaceHolder');
  addPlaceHolder.setAttribute('placeholder', 'Add to your list...');
  clearAll.innerHTML = 'Clear all completed';
  clearAll.classList = 'clearAll';
  x.setAttribute('type', 'checkbox');
  addToDo.appendChild(refreshIcon);

  const listData = [
    {
      description: 'Wash the car',
      completed: true,
      index: 2,
    },
    {
      description: 'Pay the bills',
      completed: false,
      index: 1,
    },
    {
      description: 'Go to the Gym',
      completed: true,
      index: 3,
    },
  ];

  // Lodash, now imported by this script

  showList.innerHTML = listData
    .map(
      (toDoArr) => `
      <li class='oneTask'>
      <p id='indexNum'>${toDoArr.index} </p>
      <p>${toDoArr.description} </p>
      <input type='checkbox'>
      <i class="threeDots"> .</i>
    </li>
    `,
    )
    .sort()
    .join('');

  element.classList.add('toDoList');
  element.appendChild(btn);
  element.appendChild(addToDo);
  element.appendChild(addPlaceHolder);
  element.appendChild(showList);
  element.appendChild(clearAll);
  return element;
}

document.body.appendChild(component());
