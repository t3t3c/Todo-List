import './style.css';
import { myDOM } from './myDOM.js';

const TodoItem = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};
const Project = (todoItemsArray) => {
  return { todoItemsArray };
};

myDOM.addNewTaskButton();

// przejrzec filmiki
// zapytac sie czy polecaja jakies projekty gdzie jest dobry kod
