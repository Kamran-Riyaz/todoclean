const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = todo.completed ? "completed" : "";
    span.textContent = todo.text;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.textContent = "✔";
    toggleBtn.addEventListener("click", () => toggleTodo(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "del-btn";
    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener("click", () => deleteTodo(index));

    btnContainer.append(toggleBtn, deleteBtn);
    li.append(span, btnContainer);
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
