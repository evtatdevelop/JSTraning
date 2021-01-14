(function (arrOfTasks) {
  // Getting the current tasks
  const objOfTask = getTasksFile();

  // Apps constants
  const taskList = document.querySelector(".list_items");
  const form = document.forms["addForm"];
  const taskTitle = form.elements["title"];
  const taskBody = form.elements["body"];

  // Show list of tasks
  renderAllTasks(objOfTask);

  // Event of submit the add form
  form.addEventListener("submit", onSubmitAddForm);

  // Event of Delete task
  taskList.addEventListener("click", onDeleteTask);

  /**
   *
   * @param {an object of tasks} tasksList
   */
  function renderAllTasks(tasksList) {
    if (!tasksList) {
      alert("Is not list of tasks 🎃");
      return;
    }
    const fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    taskList.appendChild(fragment);
  }

  /**
   *
   * @param {An object of task} param0
   */
  function listItemTemplate({ _id, title, body } = {}) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const div = document.createElement("div");

    button.classList.add("button", "btn-danger", "btn-delete");
    div.classList.add("nofloat");

    h2.textContent = title;
    p.textContent = body;
    button.textContent = "Delete Task";
    // button.setAttribute("data-idTask", _id);

    const li = document.createElement("li");
    li.setAttribute("data-idTask", _id);
    li.append(h2);
    li.append(p);
    li.append(button);
    li.append(div);
    return li;
  }

  /**
   *
   * @param {object-event of <button> "Add"} e
   */
  function onSubmitAddForm(e) {
    e.preventDefault();
    const titleVal = taskTitle.value;
    const bodyVal = taskBody.value;
    if (!titleVal || !bodyVal) {
      alert("Lack of data 🎃");
      return;
    }
    const newItem = createTask(titleVal, bodyVal);
    const newTask = listItemTemplate(newItem);
    taskList.insertAdjacentElement("afterbegin", newTask);
    form.reset();
  }

  /**
   *
   * @param {The string of tasks title} title
   * @param {The string of tasks description} body
   */
  function createTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task${Math.random()}`,
    };
    objOfTask[newTask._id] = newTask;

    saveTasks(objOfTask);

    return { ...newTask };
  }

  /**
   *
   * @param { DOM Element <button> "Delete Task"} param0
   */
  function onDeleteTask({ target }) {
    if (target.classList.contains("btn-delete")) {
      const idDelTask = target.closest("[data-idtask]").dataset.idtask;
      const { title } = objOfTask[idDelTask];
      const isConfirmDel = confirm(
        `The task: \r\n ${title} \r\n will be deleted 🎈`
      );
      if (!isConfirmDel) return;
      deleteTask(idDelTask);
    }
  }

  /**
   *
   * @param {Id deleting task } id
   */
  function deleteTask(id) {
    const htmlTrgetElement = taskList.querySelector(`li[data-idtask="${id}"]`);
    delete objOfTask[id];
    htmlTrgetElement.remove();

    saveTasks(objOfTask);
  }

  /**
   *
   */
  function getTasksFile() {
    let result = JSON.parse(localStorage.getItem("task_list"));

    if (!result) {
      result = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
      }, {});
    }
    return result;
  }

  /**
   *
   * @param {The current jbject of tasks} tsksObj
   */
  function saveTasks(tsksObj) {
    localStorage.setItem("task_list", JSON.stringify(tsksObj));
  }
})(tasks);
