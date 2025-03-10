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

