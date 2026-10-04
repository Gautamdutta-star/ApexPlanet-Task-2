/* ==============================
   CONTACT FORM VALIDATION
================================ */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let isValid = true;


    // Name validation
    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // Subject validation
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        isValid = false;
    }


    // Message validation
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;
    }


    // Successful submission
    if (isValid) {

        alert(
            "Thank you! Your message has been submitted successfully."
        );

        contactForm.reset();
    }

});


/* ==============================
   DYNAMIC TO-DO LIST
================================ */

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


/* Add Task Function */

function addTask() {

    const taskText = taskInput.value.trim();


    // Check empty input
    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create list item
    const listItem = document.createElement("li");


    // Create task text
    const taskContent = document.createElement("span");

    taskContent.textContent = taskText;

    taskContent.classList.add("task-content");


    // Complete task when clicked
    taskContent.addEventListener("click", function () {

        listItem.classList.toggle("completed");

    });


    // Create delete button
    const deleteButton =
        document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    // Delete task
    deleteButton.addEventListener("click", function () {

        listItem.remove();

        updateEmptyMessage();

    });


    // Add elements to list item
    listItem.appendChild(taskContent);

    listItem.appendChild(deleteButton);


    // Add list item to task list
    taskList.appendChild(listItem);


    // Clear input
    taskInput.value = "";

    taskInput.focus();


    // Hide empty message
    updateEmptyMessage();
}


/* ==============================
   EMPTY MESSAGE
================================ */

function updateEmptyMessage() {

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";
    }
}


/* ==============================
   ADD TASK BUTTON
================================ */

addTaskBtn.addEventListener(
    "click",
    addTask
);


/* ==============================
   ENTER KEY SUPPORT
================================ */

taskInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            addTask();
        }

    }
);


/* Initial State */

updateEmptyMessage();