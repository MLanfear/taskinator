var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();
    
    //pachage up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
};

    //send as arg to createTaskEl
    createTaskEl(taskDataObj);


var createTaskEl = function(taskDataObj) {

    var createTaskActions = function(taskId) {
        var actionContainerEl = document.createElement("div");
            actionContainerEl.className = "task-actions";

    

        // create edit button
        var editButtonEl = document.createElement("button");
        editButtonEl.textContent = ("Edit");
        editButtonEl.classname = "btn edit-btn";
        editButtonEl.setAttribute("data-task-id", taskId);
    
        actionContainerEl.appendChild(editButtonEl);
    
        //create delete button
        var deleteButtonEl = document.createElement("button");
        deleteButtonEl.textContent = ("Delete");
        deleteButtonEl.className = "btn delete-btn";
        deleteButtonEl.setAttribute("data-task-id", taskId);
    
        actionContainerEl.appendChild(deleteButtonEl);
        return actionContainerEl;
    };
    
    
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    listItemEl.setAttribute("data-task-id", taskIdCounter);
    
    //create div HTI/add to listItem
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);

    taskIdCounter++;

};

formEl.addEventListener("submit", taskFormHandler);