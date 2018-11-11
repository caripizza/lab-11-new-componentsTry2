import html from './html.js';
// import TodoListSection from './newtodo-list.js';

function makeTodoForm() {
    return html`
        <form id="add-todo-form">
            <label>
                Task:<br>
                <input maxlength="30" name="task" required>
            </label>
            <label>
                Due date:<br>
                <input type="date" name="due" id="due-date-input" required>
            </label>
            <label class="hidden">
                Done:<br>
                <input type="checkbox" name="done" class="hidden">
            </label>
            <p>
                <button class="action">Add New</button> 
            </p>
        </form>
        <hr />
        <!--<div id="todo-section"></div>-->
    `;
}

export default class AddTodo {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }

    render() {
        const dom = makeTodoForm();
        const form = dom.getElementById('add-todo-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const elements = form.elements;
            const todo = {
                task: elements.task.value,
                due: elements.due.value,
                done: elements.done.checked,
            };

            this.onAdd(todo);

            form.reset();
            document.activeElement.blur();
        });
        // const container = dom.querySelector('#todo-section');
        // const todoSection = new TodoListSection();
        // container.appendChild(todoSection.render());

        return dom;
    }
}