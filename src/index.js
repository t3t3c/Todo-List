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

// UI
// view all projects
// view all todos in each project
// expand a single todo
// delete a todo
