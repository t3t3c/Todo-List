import './style.css';
import { myDOM } from './myDOM.js';

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(taskName) {
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.title === taskName) {
        this.tasks.splice(i, 1);
        // we don't want to delete more than one:
        break;
      }
    }
  }
}
class UI {
  static addInput() {
    // add Container for the input
    const content = document.querySelector('#content');
    const inputForm = document.createElement('form');
    inputForm.id = 'input-form';
    content.appendChild(inputForm);

    // add button to send  the form
    const button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Add task';
    inputForm.appendChild(button);

    // add input field
    const input = document.createElement('input');
    input.id = 'task-title';
    inputForm.appendChild(input);

    // add container for Task's tiles:
    const tilesContainer = document.createElement('div');
    tilesContainer.id = 'tiles-container';
    content.appendChild(tilesContainer);
  }

  static createTaskTile(task) {
    // tile
    const taskTile = document.createElement('div');
    taskTile.className = 'task-tile';
    // text
    const text = document.createElement('p');
    text.innerText = task.title;
    taskTile.appendChild(text);
    // delete button:
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList = 'delete-button';
    // add delete function to the button:
    taskTile.appendChild(deleteButton);
    return taskTile;
  }

  static removeTaskTile(taskTile) {
    taskTile.remove();
  }

  static displayProject(project) {
    const tilesContainer = document.querySelector('#tiles-container');
    // Clear tiles Container
    tilesContainer.innerHTML = '';
    // Show all project's tasks:
    for (const task of project.tasks) {
      const taskTile = UI.createTaskTile(task);
      tilesContainer.appendChild(taskTile);
    }
  }
  static clearInput() {
    document.querySelector('#task-title').value = '';
  }
}

// test
UI.addInput();

// initial project
const mainProject = new Project('Main Project');

// EventListener
document.querySelector('#input-form').addEventListener('submit', (event) => {
  // Prevent actual submit
  event.preventDefault();

  // get form value:
  const taskTitle = document.querySelector('#task-title').value;

  // add task:
  const newTask = new Task(taskTitle);
  mainProject.addTask(newTask);
  UI.displayProject(mainProject);
  UI.clearInput();
});

document.querySelector('#content').addEventListener('click', (event) => {
  if (event.target.className === 'delete-button') {
    UI.removeTaskTile(event.target.parentElement);
    const taskName = event.target.parentElement.firstChild.innerText;
    mainProject.removeTask(taskName);
  }
});



// Wazne:
// nie musimy za kazdym razem loopowac przez caly projekt zeby wyswietlic liste
// mozemy wyswietlic zapisana liste a potem oddzielnie usuwac/doddawac elementy dla Project.Lista i UI.lista
// przy kazdym odswiezeniu loopujemy przez Project.lista
