
let todos = [
    {
        task: 'Finish lab',
        due: new Date('10/30/2018'),
        done: false
    },
    { 
        task: 'Bake cookies',
        due: new Date('10/31/2018'),
        done: false
    },
    { 
        task: 'Do laundry',
        due: new Date('11/04/2018'),
        done: false
    }
];


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// get all of the above todos
const todoApi = {
    getAll() {
        const json = localStorage.getItem(todos);
        if(json) {
            todos = JSON.parse(json);
        }
        return todos;

    },
    add(todo) {
        // add to array
        todos.push(todo);

        // save array to local scope
        saveTodos();
    },
    remove(todo) {
        const index = todos.indexOf(todo);
        if(index !== -1) {
            todos.splice(index, 1);
            saveTodos();
        }
    }

};

export default todoApi;