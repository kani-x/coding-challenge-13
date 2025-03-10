// Task 2 - Employee Cards Dynamic Addition

document.addEventListener("DOMContentLoaded", () => {
    function addEmployeeCard(name, position) {
        // Create employee card container
        const card = document.createElement("div");
        card.classList.add("employee-card");

        // Create heading for name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        // Create paragraph for position
        const positionPara = document.createElement("p");
        positionPara.textContent = position;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            card.remove();
        });

        // Append elements to card
        card.appendChild(nameHeading);
        card.appendChild(positionPara);
        card.appendChild(removeButton);

        // Append card to container
        document.getElementById("employeeContainer").appendChild(card);
    }

    // Example: Adding a sample employee
    addEmployeeCard("John Doe", "Software Engineer");
    addEmployeeCard("Jane Smith", "Project Manager");
});

// Task 3 - Bulk Update on Employee Cards
document.addEventListener("DOMContentLoaded", () => {
    function addEmployeeCard(name, position) {
        const card = document.createElement("div");
        card.classList.add("employee-card");

        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        const positionPara = document.createElement("p");
        positionPara.textContent = position;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            card.remove();
        });

        card.appendChild(nameHeading);
        card.appendChild(positionPara);
        card.appendChild(removeButton);

        document.getElementById("employeeContainer").appendChild(card);
    }

    function highlightAllCards() {
        const cards = document.querySelectorAll(".employee-card");
        Array.from(cards).forEach(card => {
            card.style.backgroundColor = "#f0f8ff"; // Light blue highlight
            card.style.border = "2px solid #007bff"; // Blue border
        });
    }

    document.getElementById("addEmployee").addEventListener("click", () => {
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
        if (name && position) {
            addEmployeeCard(name, position);
        }
    });

    document.getElementById("employeeContainer").addEventListener("dblclick", highlightAllCards);
});

// Task 4 - Employee Card Removal with Event Bubbling

document.addEventListener("DOMContentLoaded", () => {
    function addEmployeeCard(name, position) {
        const card = document.createElement("div");
        card.classList.add("employee-card");

        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;

        const positionPara = document.createElement("p");
        positionPara.textContent = position;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        // Remove button event listener (stopPropagation used)
        removeButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents bubbling
            card.remove();
        });

        card.appendChild(nameHeading);
        card.appendChild(positionPara);
        card.appendChild(removeButton);

        document.getElementById("employeeContainer").appendChild(card);
    }

    function highlightAllCards() {
        const cards = document.querySelectorAll(".employee-card");
        Array.from(cards).forEach(card => {
            card.style.backgroundColor = "#f0f8ff"; // Light blue highlight
            card.style.border = "2px solid #007bff"; // Blue border
        });
    }

    document.getElementById("addEmployee").addEventListener("click", () => {
        const name = prompt("Enter employee name:");
        const position = prompt("Enter employee position:");
        if (name && position) {
            addEmployeeCard(name, position);
        }
    });

    // Parent container event listener (demonstrating bubbling)
    document.getElementById("employeeContainer").addEventListener("click", () => {
        console.log("Employee card clicked!");
    });

    document.getElementById("employeeContainer").addEventListener("dblclick", highlightAllCards);
});

// Task 5: Inline Editing of Employee Details

// Function to create and add a new employee card
function createEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer");
  
    const card = document.createElement("div");
    card.classList.add("employeeCard");
  
    // Employee Name
    const employeeName = document.createElement("h3");
    employeeName.classList.add("employeeName");
    employeeName.textContent = name;
  
    // Employee Position
    const employeePosition = document.createElement("p");
    employeePosition.classList.add("employeePosition");
    employeePosition.textContent = position;
  
    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
  
    // Save Button
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("saveButton");
    saveButton.style.display = "none"; // Initially hidden
  
    // Add all elements to the card
    card.appendChild(employeeName);
    card.appendChild(employeePosition);
    card.appendChild(editButton);
    card.appendChild(saveButton);
  
    // Add the card to the employee container
    employeeContainer.appendChild(card);
  
    // Edit button functionality
    editButton.addEventListener("click", function() {
      // Switch to input fields for inline editing
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = employeeName.textContent;
  
      const positionInput = document.createElement("input");
      positionInput.type = "text";
      positionInput.value = employeePosition.textContent;
  
      // Replace text content with input fields
      employeeName.replaceWith(nameInput);
      employeePosition.replaceWith(positionInput);
  
      // Hide the Edit button, show the Save button
      editButton.style.display = "none";
      saveButton.style.display = "inline-block";
  
      // Save button functionality
      saveButton.addEventListener("click", function() {
        // Update the card with new values
        employeeName.textContent = nameInput.value;
        employeePosition.textContent = positionInput.value;
  
        // Revert inputs back to text
        nameInput.replaceWith(employeeName);
        positionInput.replaceWith(employeePosition);
  
        // Hide the Save button, show the Edit button again
        saveButton.style.display = "none";
        editButton.style.display = "inline-block";
      });
    });
  }
  
  // Example Usage: Adding a new employee card dynamically
  createEmployeeCard("John Doe", "Software Engineer");
  createEmployeeCard("Jane Smith", "Product Manager");
  
