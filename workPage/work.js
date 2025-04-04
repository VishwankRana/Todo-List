const view = document.querySelector(".viewBtn");
const viewDropdownContent = document.querySelector(".viewDropdownContent");
const viewDropdownItems = document.querySelectorAll(".viewDropdownItem");
const personelCatBtn = document.getElementById("personelCatBtn");
const workCatBtn = document.getElementById("workCatBtn");
const addBtn = document.querySelector(".addBtn");


    document.querySelector(".addBtn").addEventListener("click", function() {
    window.location.href = "/landPage/index.html";
    });

    document.getElementById("personelCatBtn").addEventListener("click", function() {
        window.location.href = "/personelPage/personel.html";
    });

    document.querySelector(".habitatBtn").addEventListener("click", function() {
        window.location.href = "/habitPage/habit.html";
    });

    view.addEventListener("click", function (e) {
        viewDropdownContent.classList.toggle("active");
    });

    viewDropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            viewDropdownContent.classList.remove("active"); 
        });
    });

    

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!view.contains(event.target) && !viewDropdownContent.contains(event.target)) {
            viewDropdownContent.classList.remove("active");
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    let workTasks = JSON.parse(localStorage.getItem("workTasks")) || [];
    let workTodoTaskView = document.querySelector(".workTodoTaskView");

    // Clear existing content
    workTodoTaskView.innerHTML = "";

    workTasks.forEach((task, index) => {
        let taskDiv = document.createElement("div");
        taskDiv.classList.add("taskItem");

        let deleteBtnDiv = document.createElement("div");
        let deleteBtn = document.createElement("button");

        deleteBtnDiv.classList.add("deleteBtnDivClass");
        deleteBtn.classList.add("delButton");
        deleteBtn.innerHTML = "Delete ToDo";

        taskDiv.innerHTML = `
            <div class="taskTitle">${task.title}</div>
            <div class="taskDescription">${task.description}</div>
        `;

        workTodoTaskView.appendChild(taskDiv);
        taskDiv.appendChild(deleteBtnDiv);
        deleteBtnDiv.appendChild(deleteBtn);

        // Styling for delete button container
        deleteBtnDiv.style.display = "flex";
        deleteBtnDiv.style.justifyContent = "end";
        deleteBtnDiv.style.paddingBottom = "8px";
        deleteBtnDiv.style.paddingRight = "8px";

        // Styling for delete button
        deleteBtn.style.color = "white";
        deleteBtn.style.fontWeight = "400";
        deleteBtn.style.backgroundColor = "#D72638";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius = "10px";
        deleteBtn.style.height = "30px";
        deleteBtn.style.width = "90px";
        deleteBtn.style.cursor = "pointer";

        // **Hover Effect**
        deleteBtn.addEventListener("mouseover", function () {
            deleteBtn.style.backgroundColor = "#a20e1c"; 
        });

        deleteBtn.addEventListener("mouseout", function () {
            deleteBtn.style.backgroundColor = "#D72638"; // Revert to original color
        });

        // **Delete Task Functionality**
        deleteBtn.addEventListener("click", function () {
            // Remove the task from the array
            workTasks.splice(index, 1);

            // Update localStorage
            localStorage.setItem("workTasks", JSON.stringify(workTasks));

            // Remove the task from the UI
            taskDiv.remove();
        });

        // Styling for task container
        taskDiv.style.margin = "20px";
        taskDiv.style.backgroundColor = "#394156";
        taskDiv.style.borderRadius = "10px";
    });
});