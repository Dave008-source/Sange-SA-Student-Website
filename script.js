document.getElementById('registration-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const formStatus = document.getElementById('form-status');

    if (!name || !email || !course) {
        formStatus.textContent = 'Please fill out all required fields.';
        formStatus.style.color = 'red';
        event.preventDefault(); // Prevent the form from submitting
        return;
    }

    // Display a success message after submission.
    // For Formspree, the user will be redirected to a "thank you" page
    // or a default success message. This part is mostly for local testing or custom form handlers.
    // formStatus.textContent = 'Registration successful! Thank you.';
    // formStatus.style.color = 'green';
    // event.preventDefault(); // Uncomment this line if you're using a custom AJAX submission
});
