import todoList from './todo-list.js';
import todoApi from './todo-api.js';
import addTodo from './add-todo.js';


const todos = todoApi.getAll();

addTodo.init(function(todo) {
    todoApi.add(todo);
    todoList.add(todo);
});



todoList.init(todos, function(todo) {
    todoApi.remove(todo);
});