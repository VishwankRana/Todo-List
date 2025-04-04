const view = document.querySelector(".viewBtn");
const viewDropdownContent = document.querySelector(".viewDropdownContent");
const viewDropdownItems = document.querySelectorAll(".viewDropdownItem");
const personelCatBtn = document.getElementById("personelCatBtn");
const workCatBtn = document.getElementById("workCatBtn");
const addBtn = document.querySelector(".addBtn");

    view.addEventListener("click", function (e) {
        viewDropdownContent.classList.toggle("active");
    });

    viewDropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            viewDropdownContent.classList.remove("active"); 
        });
    });

    document.getElementById("personelCatBtn").addEventListener("click", function() {
        window.location.href = "/personelPage/personel.html";
    });

    document.getElementById("workCatBtn").addEventListener("click", function() {
        window.location.href = "/workPage/work.html";
    });

    document.querySelector(".addBtn").addEventListener("click", function() {
        window.location.href = "/landPage/index.html";
        });

    document.querySelector(".habitatBtn").addEventListener("click", function() {
        window.location.href = "/habitPage/habit.html";
        });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!view.contains(event.target) && !viewDropdownContent.contains(event.target)) {
            viewDropdownContent.classList.remove("active");
        }
    });

    const priorityBtn = document.querySelector(".priorityBtn");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const options = document.querySelectorAll(".priorityOption");

// Show/hide dropdown on button click
priorityBtn.addEventListener("click", function () {
    dropdown.classList.toggle("active");
});

// Handle priority selection
options.forEach(option => {
    option.addEventListener("click", function () {
        priorityBtn.textContent = this.dataset.priority;
        dropdown.classList.remove("active"); // Close dropdown

        // Change button color based on priority
        if (this.dataset.priority === "High") {
            priorityBtn.style.color = "#ff0000";
            priorityBtn.style.borderColor = "#ff0000";
        } else if (this.dataset.priority === "Medium") {
            priorityBtn.style.color = "#ffcc00";
            priorityBtn.style.borderColor = "#ffcc00";
        } else {
            priorityBtn.style.color = "#00ff00";
            priorityBtn.style.borderColor = "#00ff00";
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});


// Task Input save function

const taskTitle = document.querySelector(".taskTitle");
const taskDescription = document.querySelector(".taskDescription");
const personelBtn = document.querySelector(".personelBtn");
const workBtn = document.querySelector(".workBtn");
const saveBtn = document.querySelector(".saveBtn");

// Save Work Tasks
let isWorkBtnClicked = false; 

workBtn.addEventListener("click", function () {
    isWorkBtnClicked = !isWorkBtnClicked; 

    if (isWorkBtnClicked) {
        workBtn.style.backgroundColor = "#1F2535";
        saveBtn.onclick = function () {
            saveTask("workTasks");
        };
    } else {
        workBtn.style.backgroundColor = ""; 
        saveBtn.onclick = null; 
    }
});


// Save Personal Tasks
let isPersonelBtnClicked = false; 

personelBtn.addEventListener("click", function () {
    isPersonelBtnClicked = !isPersonelBtnClicked; 

    if (isPersonelBtnClicked) {
        personelBtn.style.backgroundColor = "#1F2535";
        saveBtn.onclick = function () {
            saveTask("personelTasks");
        };
    } else {
        personelBtn.style.backgroundColor = ""; 
        saveBtn.onclick = null; 
    }
});

// Function to Save Task
function saveTask(category) {
    let taskTitleText = taskTitle.innerText.trim();
    let taskDescriptionText = taskDescription.innerText.trim();

    if (taskTitleText === "") {
        alert("Task Title cannot be empty!");
        return;
    }

    let task = {
        title: taskTitleText,
        description: taskDescriptionText
    };

    let tasks = JSON.parse(localStorage.getItem(category)) || [];
    tasks.push(task);
    localStorage.setItem(category, JSON.stringify(tasks));

    taskTitle.innerText = "";
    taskDescription.innerText = "";
}


