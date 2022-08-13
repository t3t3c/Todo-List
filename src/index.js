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

class Storage {
  static projects = [];
  static addProject(newProject) {
    Storage.projects.push(newProject);
  }
  static removeProject(projectName) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      if (project.name === projectName) {
        this.projects.splice(i, 1);
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

  static removeTile(taskTile) {
    taskTile.remove();
  }

  static displayTasks(project) {
    const tilesContainer = document.querySelector('#tiles-container');
    // Clear tiles Container
    tilesContainer.innerHTML = '';
    // Show all project's tasks:
    for (const task of project.tasks) {
      const taskTile = UI.createTaskTile(task);
      tilesContainer.appendChild(taskTile);
    }
  }
  static clearTaskInput() {
    document.querySelector('#task-title').value = '';
  }
  static addProjectInput() {
    const container = document.querySelector('#projects-container');
    const form = document.createElement('form');
    form.id = 'project-form';
    const button = document.createElement('button');
    button.className = 'project-button';
    button.innerText = 'Add';
    const input = document.createElement('input');
    input.className = 'project-input';

    form.appendChild(input);
    form.appendChild(button);
    container.appendChild(form);
    input.focus();
  }
  static hideProjectInput() {
    document.querySelector('#project-form').remove();
  }
  static createProjectTile(project) {
    const newProjectTile = document.createElement('div');
    newProjectTile.className = 'project-tile';
    // add text:
    const text = document.createElement('p');
    text.innerText = project.name;
    newProjectTile.appendChild(text);
    // create delete button:
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.classList = 'delete-button';
    newProjectTile.appendChild(deleteButton);
    return newProjectTile;
  }
  static displayProjects() {
    const projectsContainer = document.querySelector('#projects-container');
    projectsContainer.innerHTML = '';
    console.log(Storage.projects);
    for (const project of Storage.projects) {
      // create new tile:
      const newProjectTile = UI.createProjectTile(project);
      projectsContainer.appendChild(newProjectTile);
    }
  }
}

// test
UI.addInput();

// initial project
const mainProject = new Project('Main Project');

// EventListener
// add buttton for Tasks
document.querySelector('#input-form').addEventListener('submit', (event) => {
  // Prevent actual submit
  event.preventDefault();

  // get form value:
  let taskTitle = document.querySelector('#task-title').value;
  if (taskTitle === '') {
    taskTitle = 'Do nothing...';
  }
  // add task:
  const newTask = new Task(taskTitle);
  mainProject.addTask(newTask);
  UI.displayTasks(mainProject);
  UI.clearTaskInput();
});
// delete button for Tasks
document.querySelector('#content').addEventListener('click', (event) => {
  if (event.target.className === 'delete-button') {
    UI.removeTile(event.target.parentElement);
    const taskName = event.target.parentElement.firstChild.innerText;
    mainProject.removeTask(taskName);
  }
});
// delete button for Projects:
document
  .querySelector('#projects-container')
  .addEventListener('click', (event) => {
    if (event.target.className === 'delete-button') {
      UI.removeTile(event.target.parentElement);
      const projectName = event.target.parentElement.firstChild.innerText;
      Storage.removeProject(projectName);
    }
    if (event.target.className === 'project-tile') {
      console.log('ziom');
    }
  });

document.querySelector('#add-project').addEventListener('click', (event) => {
  UI.addProjectInput();
});
// Add button for projects
document
  .querySelector('#projects-container')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    let inputText = document.querySelector('.project-input').value;
    console.log(inputText);
    if (inputText === '') {
      inputText = 'Unnamed';
    }
    const newProject = new Project(inputText);
    Storage.addProject(newProject);
    UI.hideProjectInput();
    UI.displayProjects();
  });
