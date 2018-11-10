import todoApi from './todo-api.js';
import html from './html.js';
import Header from './header.js';
import AddTodo from './add-todo.js';
import todoList from './todo-list.js';
import TodoList from './newtodo-list.js';

const todos = todoApi.getAll();

function makeTemplate() {
    return html`
    <header></header>
    <div id="add-todo"></div>
    <div id="test-section"></div>
    `;
}


// addTodo.init(function(todo) {
//     todoApi.add(todo);
//     todoList.add(todo);
// });



todoList.init(todos, function(todo) {
    todoApi.remove(todo);
});


class TodoApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const addTodoSection = dom.getElementById('add-todo');
        const listSection = dom.getElementById('test-section');

        const header = new Header();
        headerSection.appendChild(header.render());
        
        const addTodo = new AddTodo(todo => {
            todoApi.add(todo);
            todoList.add(todo);
        });
        addTodoSection.appendChild(addTodo.render());
        
        const list = new TodoList();
        // listSection.innerHTML = 'test';
        listSection.appendChild(list.render());

        return dom;
    }
}
export default TodoApp;

// const todoApp = new TodoApp();
// const root = document.getElementById('root');
// root.appendChild(todoApp.render());