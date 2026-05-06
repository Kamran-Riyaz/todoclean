const form = document.getElementById("todo-form");
const todo = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <span class="${todo.completed ? "completed" : ""}">
            ${todo.text}
            </span>
            <div>
                <button onclick="toogleTodo(${index})">✔</button>
                <button onclick="deleteTodo(${index})">✖</button>
            </div>
        `;

    list.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
