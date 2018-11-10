import html from './html.js';
import todoList from './todo-list.js';
import todoApi from './todo-api.js';
import addTodo from './add-todo.js';
import Header from './header.js';

const todos = todoApi.getAll();

function makeTemplate() {
    return html`
    <header></header>
    `;
}


addTodo.init(function(todo) {
    todoApi.add(todo);
    todoList.add(todo);
});



todoList.init(todos, function(todo) {
    todoApi.remove(todo);
});


class TodoApp {
    render() {
        const dom = makeTemplate();
        const headerSection = dom.querySelector('header');
        const header = new Header();
        headerSection.appendChild(header.render());
        return dom;
    }
}
export default TodoApp;

// const todoApp = new TodoApp();
// const root = document.getElementById('root');
// root.appendChild(todoApp.render());