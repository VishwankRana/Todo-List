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



    document.addEventListener("DOMContentLoaded", function(){
        const addHabitBtn = document.querySelector(".addHabitBtn");
        const closeHabitBtn = document.querySelector(".closeHabitBtn");
        const habitModal = document.querySelector(".habitModal");
        
        addHabitBtn.addEventListener("click", function(){
            // habitModal.style.display = "flex";   
            habitModal.classList.add("active"); 
        });

        closeHabitBtn.addEventListener("click", function(){
            // habitModal.style.display = "none";
            habitModal.classList.remove("active");    
        });
        
        window.addEventListener("click", function(event){
            if (event.target === habitModal) {
                // habitModal.style.display = "none";
                habitModal.classList.remove("active");
            }
        })

        const saveHabitBtn = document.querySelector(".saveHabitBtn");
        const viewTodo = document.querySelector(".viewTodo"); 
        const addHabitInput = document.querySelector(".addHabitInput");
        
        saveHabitBtn.addEventListener("click", function () {
            let habitText = addHabitInput.innerText.trim();
        
            if (habitText === "") return; // Prevent adding empty habits
        
            // Habit Div Created
            let habitatDiv = document.createElement("div");
            habitatDiv.classList.add("habitatDiv");
        
            // Habit Title Div Created
            let habitatDivTitle = document.createElement("div");
            habitatDivTitle.classList.add("habitatDivTitle");
            habitatDivTitle.textContent = habitText;
        
            // Habit Delete Button Created
            let habitatDelBtn = document.createElement("button");
            habitatDelBtn.textContent = "Delete Habit";
            habitatDelBtn.classList.add("habitatDelBtn");
            
            // Delete Button Click Event
            habitatDelBtn.addEventListener("click", function () {
                habitatDiv.remove(); // Remove the entire habit div
            });
        
            // Styling for habit div
            habitatDiv.style.backgroundColor = "#141c2b";
            habitatDiv.style.borderRadius = "10px";
            habitatDiv.style.marginTop = "10px";
            habitatDiv.style.padding = "10px";
            habitatDiv.style.width = "98%";
            habitatDiv.style.display = "flex";
            habitatDiv.style.flexDirection = "column"; // Ensures vertical layout

            //Styling for Habit Title
            habitatDivTitle.style.fontSize = "40px";
            habitatDivTitle.style.color = "#F6F4D2";

        
            // Styling for delete button
            habitatDelBtn.style.backgroundColor = "rgb(218, 45, 45)";
            habitatDelBtn.style.border = "none";
            habitatDelBtn.style.width = "100px";
            habitatDelBtn.style.height = "30px";
            habitatDelBtn.style.borderRadius = "10px";
            habitatDelBtn.style.cursor = "pointer";
            habitatDelBtn.style.color = "white";
            habitatDelBtn.style.fontSize = "14px";
            habitatDelBtn.style.marginTop = "5px";


            // Habit buttons Parent Div (Holds all month divs)
        let habitBtnParDiv = document.createElement("div");
        habitBtnParDiv.classList.add("habitBtnParDiv");

        // Make all months fit in one row (ensures compact layout)
        habitBtnParDiv.style.display = "flex";
        habitBtnParDiv.style.justifyContent = "space-between"; // Evenly spaced months
        habitBtnParDiv.style.flexWrap = "nowrap"; // Prevents wrapping to a new row
        habitBtnParDiv.style.width = "100%";
        habitBtnParDiv.style.marginTop = "20px";
        habitBtnParDiv.style.padding = "0";  // **Zero padding**
        habitBtnParDiv.style.overflow = "hidden"; // Prevents accidental overflow

            // Months array
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        // Create Month Sections
        months.forEach((month) => {
            let habitBtnParMonthDiv = document.createElement("div");
            habitBtnParMonthDiv.classList.add("habitBtnParMonthDiv");
            habitBtnParMonthDiv.textContent = month; 

            // Month Div Styling (Smaller width for all 12 to fit in one row)
            habitBtnParMonthDiv.style.display = "flex";
            habitBtnParMonthDiv.style.flexDirection = "column"; 
            habitBtnParMonthDiv.style.alignItems = "center";
            habitBtnParMonthDiv.style.width = "7.5%"; // **Smaller width for all to fit**
            habitBtnParMonthDiv.style.padding = "2px";
            habitBtnParMonthDiv.style.borderRadius = "5px";
            habitBtnParMonthDiv.style.backgroundColor = "#1E2A3A";
            habitBtnParMonthDiv.style.color = "#F6F4D2";
            habitBtnParMonthDiv.style.fontWeight = "bold";
            habitBtnParMonthDiv.style.fontSize = "12px";
    
        // Container for buttons
        let habitButtonsContainer = document.createElement("div");
        habitButtonsContainer.style.display = "grid";
        habitButtonsContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3 columns
        habitButtonsContainer.style.gridGap = "2px"; // Small spacing
        habitButtonsContainer.style.marginTop = "2px";

    // Create 30 small buttons for each month
    for (let i = 1; i <= 30; i++) {
        let habitBtn = document.createElement("button");
        habitBtn.classList.add("habitBtn");
    

        // Button Styling (Smaller)
        habitBtn.style.width = "15px";
        habitBtn.style.height = "15px";
        habitBtn.style.borderRadius = "3px";
        habitBtn.style.backgroundColor = "white";
        habitBtn.style.cursor = "pointer";
        habitBtn.style.border = "none";
        habitBtn.style.fontSize = "8px";

        habitBtn.addEventListener("click", function () {
            if (habitBtn.style.backgroundColor === "white") {
                habitBtn.style.backgroundColor = "#2E8B57"; 
            } else {
                habitBtn.style.backgroundColor = "white";  
            }
        });

        // Append button to container
        habitButtonsContainer.appendChild(habitBtn);
    }

    // Append elements
    habitBtnParMonthDiv.appendChild(habitButtonsContainer);
    habitBtnParDiv.appendChild(habitBtnParMonthDiv);
});


        
            // Append elements
            viewTodo.appendChild(habitatDiv); // Add everything to viewTodo
            habitatDiv.appendChild(habitatDivTitle);  // Title at the top
            habitatDiv.appendChild(habitatDelBtn);    // Delete button below title
            // habitatDiv.appendChild(habitButtonsContainer); // Buttons below delete button
            habitatDiv.appendChild(habitBtnParDiv);  
        
            // Clear input after saving
            addHabitInput.innerText = "";
        });
    });        
        


    