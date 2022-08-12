const myDOM = (() => {
  const content = document.querySelector('#content');
  const addNewTaskButton = () => {
    const newTaskButton = document.createElement('button');
    newTaskButton.id = 'new-task';
    newTaskButton.innerText = 'Add new task';
    content.appendChild(newTaskButton);
  };
  return { addNewTaskButton };
})();

export { myDOM };
