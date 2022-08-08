import './style.css';
import printMe from './print.js';

const TodoItem = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};
const Project = (todoItemsArray) => {
  return { todoItemsArray };
};

const DOMmodify = () => {
  // empty
};

const element = document.querySelector('#content');
const btn = document.createElement('button');

btn.innerHTML = 'Click me and check the console!';
btn.onclick = printMe;
element.appendChild(btn);
asdf.appendChild('asdf')
// UI
// view all projects
// view all todos in each project
// expand a single todo
// delete a todo
