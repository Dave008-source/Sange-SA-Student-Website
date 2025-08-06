document.getElementById('registration-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const formStatus = document.getElementById('form-status');

    if (!name || !email || !course) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.style.color = 'red';
        event.preventDefault(); // This line prevents the form from submitting and redirecting
        return;
    }

    // The form will now submit and redirect to the welcome page automatically.
    // No need for a success message here.
});
