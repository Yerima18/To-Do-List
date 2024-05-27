// Select the elements from the HTML
const listContainer = document.getElementById('list-container');
const inputBox = document.getElementById('input-box');

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert('Please Enter the Text'); // Alert the user if no text is entered
    } else {
        // Create a new list item (task)
        const task = document.createElement('li');
        task.textContent = inputBox.value; // Set the text of the task to the input value
        listContainer.appendChild(task); // Add the new task to the task list

        // Create a span element for the delete button (×)
        const span = document.createElement('span');
        span.textContent = "\u00D7"; // Unicode character for '×'
        task.appendChild(span); // Add the delete button to the task
        span.style.right = '0px'; // Position the delete button
    }
    inputBox.value = ''; // Clear the input box
    saveData(); // Save the updated task list to local storage
}

// Event listener for marking tasks as completed or deleting tasks
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked"); // Toggle the 'checked' class to mark/unmark task as completed
        saveData(); // Save the updated task list to local storage
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); // Remove the task if the delete button is clicked
        saveData(); // Save the updated task list to local storage
    }
});

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load the task list from local storage when the page is loaded/reloaded
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Call the function to display the saved tasks on page load
