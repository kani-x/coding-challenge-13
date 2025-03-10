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

