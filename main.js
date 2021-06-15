let num = 0;
const todos = [];
const output = document.getElementById('output');
const table = document.getElementById('new-task');
const input = document.getElementById('input');
//関数addTask
const addTask = () => {
  const todo = {
    comment: '',
    status: '作業中'
  };
  todo.comment = input.value;
  todos.push(todo);
  input.value = '';
  table.innerHTML = ''
  displayTodos();
};
const changeStatus = (tr, el) => {
  const statusBtn = document.createElement('button');
  statusBtn.textContent = el.status;
  tr.appendChild(statusBtn)
};
const changeDelete = (tr, list) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.addEventListener('click', () => {
    table.innerHTML = ''
    todos.splice(list.textContent, 1);
    displayTodos();
  });
  tr.appendChild(deleteBtn)
};
//関数displayTodos
const displayTodos = () => {
  todos.forEach( el => {
    const tr = document.createElement('tr');
    const list = document.createElement('td');
    list.textContent = num;
    num ++
    const th = document.createElement('td');
    th.textContent = el.comment;
    table.appendChild(tr);
    tr.appendChild(list);
    tr.appendChild(th);    
    changeStatus(tr, el);
    changeDelete(tr, list);
    
  })
  num = 0
};
output.addEventListener('click', () => {
  addTask();
}
);
