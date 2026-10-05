const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");
const message = document.getElementById("message");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const course = courseInput.value;

    if (name === "" || course === "") {
        message.textContent = "Please complete all fields.";
        return;
    }

    message.textContent = "Registration successful!";

    result.textContent = `Name: ${name} | Course: ${course}`;

    form.reset();
});
