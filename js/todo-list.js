import html from './html.js';


function makeTodo(todo) {
    const newTodo = new Date(todo.due);
    const jsonDate = newTodo.toJSON();
    const newJsonDate = new Date(jsonDate).toUTCString();
    const dateString = newJsonDate.split(' ').slice(0, 4).join(' ');

    return html`
    <li class="todo"><h3>${todo.task}</h3>${dateString}
        <h3 class="todo-due" id="overdue-value">${newTodo.getTime() > new Date() ? '' : 'Overdue'}</h3>
        <h3 class="todo-done" id="done-value">${todo.done === true ? 'Done!' : ''}</h4>
            <input type="checkbox" id="checkbox">
        <button class="danger"> Remove </button>
    </li>`;
}


const todoList = {
    init(todos, onRemove) {
        for(let i = 0; i < todos.length; i++) {
            todoList.add(todos[i]);
        }
        todoList.onRemove = onRemove;
    },
    add(todo) {
        const dom = makeTodo(todo);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');
        const checkBox = dom.querySelector('input[type=checkbox]');
        const doneValue = dom.getElementById('done-value');
        const overdueValue = dom.getElementById('overdue-value');
        removeButton.addEventListener('click', function() {
            todoList.onRemove(todo);
            listItem.remove();
        });
        checkBox.addEventListener('click', function() {
            if(checkBox.checked) {
                doneValue.innerHTML = 'Done!';
                overdueValue.classList.add('hidden');
            } else {
                doneValue.innerHTML = '';
                overdueValue.classList.remove('hidden');
            }
        });
        const list = document.getElementById('todos');
        list.appendChild(dom);
    }
};

export default todoList;