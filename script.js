function addTask(category) {
    const taskList = document.querySelector(`.task-list[data-category="${category}"]`);
    const taskInput = taskList.querySelector('.task-input');
    const tasks = taskList.querySelector('.tasks');
    const partyBomb = taskList.querySelector('.party-bomb');

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        newTask.appendChild(checkbox);
        newTask.appendChild(document.createTextNode(taskText));
        tasks.appendChild(newTask);

        taskInput.value = '';

        checkbox.addEventListener('change', function () {
            newTask.classList.toggle('completed', this.checked);
            checkAllTasksCompleted(category);
        });
    }
}

function checkAllTasksCompleted(category) {
    const taskList = document.querySelector(`.task-list[data-category="${category}"]`);
    const allTasks = taskList.querySelectorAll('.tasks li');
    const allCompleted = Array.from(allTasks).every(task => task.classList.contains('completed'));

    const partyBomb = taskList.querySelector('.party-bomb');

    if (allCompleted) {
        partyBomb.style.display = 'block';
    } else {
        partyBomb.style.display = 'none';
    }
}

// New function to handle "Enter" key press
function handleKeyPress(event, category) {
    if (event.key === 'Enter') {
        addTask(category);
    }
}

// Reset the page after 12 AM
resetPage();
setInterval(resetPage, 1000 * 60 * 60); // Check every hour

const dateElement = document.getElementById('current-date');

setInterval(() => {
    dateElement.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}, 1000);


const newName = "Nanda Kumar .M."

var element = document.getElementsByClassName("last");
element.addEventListener('mouseover',function() {
    element.style.color = "black";
});






