import html from './html.js';

function makeTodoList() {
    return html`
    <ul id="todos">test</ul>
    `;
}

class TodoList {
    constructor(todos, onRemove) {
        this.todos = todos;
        this.onRemove = onRemove;
    }

    render() {
        const dom = makeTodoList();
        this.list = dom.querySelector('ul');
        return dom;
    }
}


export default TodoList;