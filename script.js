const apiUrl = "http://localhost:3000/todos";

// Load todos when page loads
window.onload = getTodos;

// GET all todos
function getTodos() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("todoList");
            list.innerHTML = "";

            data.forEach(todo => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${todo.title} 
                    <button onclick="deleteTodo(${todo.id})">Delete</button>
                `;
                list.appendChild(li);
            });
        });
}
// POST new todo
function addTodo() {
    const input = document.getElementById("todoInput");
    const title = input.value;

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    })
    .then(() => {
        input.value = "";
        getTodos();
    });
}
// DELETE todo
function deleteTodo(id) {
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
    .then(() => getTodos());
}
