import todoApi from './todo-api.js';
import html from './html.js';
import Header from './header.js';
import AddTodo from './add-todo.js';
import todoList from './todo-list.js';


const todos = todoApi.getAll();

function makeTemplate() {
    return html`
    <header></header>
    <div id="add-todo"></div>
    `;
}


todoList.init(todos, function(todo) {
    todoApi.remove(todo); 
});


export default class TodoApp {
    render() {
        const dom = makeTemplate();

        const headerSection = dom.querySelector('header');
        const addTodoSection = dom.getElementById('add-todo');

        const header = new Header();
        headerSection.appendChild(header.render());

        const addTodo = new AddTodo(todo => {
            todoApi.add(todo);
            todoList.add(todo);
        });
        addTodoSection.appendChild(addTodo.render());

        return dom;
    }
}