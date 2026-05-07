const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
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
            <div class="btn-container">
                <button onclick="toggleTodo(${index})">✔</button>
                <button class="del-btn" onclick="deleteTodo(${index})">✖</button>
            </div>
        `;

    list.appendChild(li);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  todos.push({
    text: input.value,
    completed: false,
  });

  input.value = "";
  renderTodos();
});

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();
