
function makeTodo(todo) {

    var newTodo = new Date(todo.due);
    var jsonDate = newTodo.toJSON();
    var newJsonDate = new Date(jsonDate).toUTCString();
    var dateString = newJsonDate.split(' ').slice(0, 4).join(' ');

    const html = /*html*/`
    <li class="todo">
    <h3>${todo.task}</h3>
    ${dateString}
    <h3 class="todo-due" id="overdue-value">${newTodo.getTime() > new Date() ? '' : 'Overdue'}</h3>
    <h3 class="todo-done" id="done-value">${todo.done === true ? 'Done!' : ''}</h4>
    <input type="checkbox" id="checkbox">
    <button class="danger"> Remove </button>
    </li>`;
    
    const template = document.createElement('template');
    
    template.innerHTML = html;
    
    return template.content;
}



// reference the unordered list id from document
const list = document.getElementById('todos');


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
                // listItem.classList.add('color-green');
                doneValue.innerHTML = 'Done!';
                overdueValue.classList.add('hidden');
            } else {
                // listItem.classList.remove('color-green');
                doneValue.innerHTML = '';
                overdueValue.classList.remove('hidden');
            }
        });

        list.appendChild(dom);
    }
};

export default todoList;