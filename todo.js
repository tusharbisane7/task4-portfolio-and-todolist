const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button onclick="toggleDone(${index})">✔</button>
        <button onclick="deleteTodo(${index})">🗑</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function addTodo(text) {
  todos.push({ text, done: false });
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  saveTodos();
  renderTodos();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task !== "") {
    addTodo(task);
    input.value = "";
  }
});

renderTodos();
