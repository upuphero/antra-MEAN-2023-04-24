class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(text) {
        this.todos.push({ id: Date.now(), text: text });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}

class View {
    constructor() {
        this.todoList = document.getElementById('todo-list');
    }

    renderItem(todo) {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.id = `todo-${todo.id}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteItem(todo.id));
        
        li.appendChild(deleteButton);
        this.todoList.appendChild(li);
    }

    deleteItem(id) {
        const item = document.getElementById(`todo-${id}`);
        item.remove();
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.form = document.getElementById('todo-form');
        this.form.addEventListener('submit', (event) => this.addTodo(event));
    }

    addTodo(event) {
        event.preventDefault();
        const input = document.getElementById('todo-input');
        this.model.addTodo(input.value);
        this.view.renderItem({ id: this.model.todos.slice(-1)[0].id, text: input.value });
        input.value = '';
    }

    deleteTodo(id) {
        this.model.deleteTodo(id);
        this.view.deleteItem(id);
    }
}

const app = new Controller(new Model(), new View());
