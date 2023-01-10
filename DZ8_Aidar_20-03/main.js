const url = 'http://localhost:8000/todos'

const addValue = document.querySelector('.add-value')
const addBtn = document.querySelector('.add')

const todoList = document.querySelector('.list')




async function updateTodo(id,status) {
    try {
        await fetch(`${url}/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !status
            })
        })
    } catch (error) {
        console.log(error.message);
    }
}

function showTodo(todos) {
    todos.forEach(todo => {
        const todoBlock = document.createElement('div')
        todoBlock.innerHTML = `
            <div class="todo-item">
                <h2 class=${todo.completed && "done"}>${todo.title}</h2>
                <button onClick="updateTodo(${todo.id}, ${todo.completed})">Done</button>
                <button onClick="deleteTodo(${todo.id})">Delete</button>
            </div> 
        `
        todoList.append(todoBlock)
    })
}


async function getAllTodo(url) {
    try {
        const response = await fetch(url)
        const todos = await response.json()
        showTodo(todos)
    } catch (error) {
        console.log(error.message);
    }
}


getAllTodo(url)


async function deleteTodo(id) {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}





async function addTodo() {
    try {
        await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: addValue.value,
                completed: false
            })
        })
    } catch (error) {
        console.log(error.message);
    }
}

addBtn.addEventListener('click', event => {
    event.preventDefault()
    addTodo()
})
