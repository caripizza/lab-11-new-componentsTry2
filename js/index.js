import TodoApp from './app.js';

const app = new TodoApp();
const root = document.getElementById('root');
root.appendChild(app.render());