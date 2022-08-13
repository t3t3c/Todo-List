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
  static currentProject = null;
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

  static returnProject(projectName) {
    for (let i = 0; i < this.projects.length; i++) {
      const project = this.projects[i];
      if (project.name === projectName) {
        return project;
      }
    }
    return null;
  }
  static changeActiveProject(projectName) {
    Storage.currentProject = Storage.returnProject(projectName);
  }
}
class UI {
  static clearContent() {
    const inputForm = document.querySelector('#input-form');
    if (inputForm !== null) {
      inputForm.remove();
    }
  }
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
    const doneTick = document.createElement('span');
    doneTick.className = 'material-icons';
    doneTick.innerText = 'done';
    deleteButton.appendChild(doneTick);
    deleteButton.className = 'task-delete-button';
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
    const existingForm = document.querySelector('#project-form');
    if (existingForm !== null) {
      existingForm.remove();
    }
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
    deleteButton.classList = 'project-delete-button';
    newProjectTile.appendChild(deleteButton);
    return newProjectTile;
  }
  static displayProjects() {
    const projectsContainer = document.querySelector('#projects-container');
    projectsContainer.innerHTML = '';
    for (const project of Storage.projects) {
      // create new tile:
      const newProjectTile = UI.createProjectTile(project);
      projectsContainer.appendChild(newProjectTile);
    }
  }
  static addProject(project) {
    const projectsContainer = document.querySelector('#projects-container');
    const newProjectTile = UI.createProjectTile(project);
    projectsContainer.appendChild(newProjectTile);
  }
  static changeActiveProject(target) {
    const currentActive = document.querySelector('.active');
    if (currentActive !== null) {
      currentActive.classList.remove('active');
    }
    target.classList.add('active');
  }
  static displayActiveProject(projectName) {
    const display = document.querySelector('#active-project-display');
    display.innerText = projectName;
  }
}

// code that needs to work now for testing:
UI.displayActiveProject('Add new project and select it to start!');

//Main body:
function addButtonForTasks(event) {
  // Prevent actual submit
  event.preventDefault();

  // get form value:
  let taskTitle = document.querySelector('#task-title').value;
  if (taskTitle === '') {
    taskTitle = 'Do nothing...';
  }
  // add task:
  const newTask = new Task(taskTitle);
  Storage.currentProject.addTask(newTask);
  UI.displayTasks(Storage.currentProject);
  UI.clearTaskInput();
}
addGlobalEventListener('submit', '#input-form', addButtonForTasks);

function deleteButtonForTasks(event) {
  UI.removeTile(event.target.parentElement);
  const taskName = event.target.parentElement.firstChild.innerText;
  Storage.currentProject.removeTask(taskName);
}
addGlobalEventListener('click', '.task-delete-button', deleteButtonForTasks);

function deleteButtonForProjects(event) {
  UI.removeTile(event.target.parentElement);
  const projectName = event.target.parentElement.firstChild.innerText;
  Storage.removeProject(projectName);
  // if we delete a current project
  if (Storage.currentProject.name === projectName) {
    UI.clearContent();
    UI.displayActiveProject('Choose a project');
  }
}
addGlobalEventListener(
  'click',
  '.project-delete-button',
  deleteButtonForProjects
);

addGlobalEventListener('click', '#add-project', UI.addProjectInput);

function addButtonForProjects(event) {
  event.preventDefault();

  let inputText = document.querySelector('.project-input').value;
  if (inputText === '') {
    inputText = 'Unnamed';
  }
  // cannot have two projects with the same name
  if (Storage.returnProject(inputText) === null) {
    const newProject = new Project(inputText);
    Storage.addProject(newProject);
    UI.hideProjectInput();
    UI.addProject(newProject);
  } else {
    alert("Projects' names must be unique");
  }
}
addGlobalEventListener('submit', '#project-form', addButtonForProjects);

// function to wrap event listeners
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}
function changeCurrentProject(event) {
  UI.clearContent();
  UI.addInput();
  const projectName = event.target.firstChild.innerText;
  Storage.changeActiveProject(projectName);
  UI.changeActiveProject(event.target);
  UI.displayActiveProject(projectName);
  UI.displayTasks(Storage.currentProject);
}
addGlobalEventListener('click', '.project-tile', changeCurrentProject);
