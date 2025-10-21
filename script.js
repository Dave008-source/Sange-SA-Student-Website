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


document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the button element by its ID
    const toggleButton = document.getElementById('toggle-management-pdfs');
    
    // 2. Get the PDF list container element by its ID
    const pdfList = document.getElementById('management-pdf-list');
    
    // 3. Check if both elements exist before adding the listener
    if (toggleButton && pdfList) {
        // 4. Add the click event listener to the button
        toggleButton.addEventListener('click', function() {
            // Toggle the 'hidden' class on the PDF container
            pdfList.classList.toggle('hidden');

            // Optional: Change the button text based on the state
            if (pdfList.classList.contains('hidden')) {
                toggleButton.textContent = 'View Course PDF Documents';
            } else {
                toggleButton.textContent = 'Hide Course PDF Documents';
            }
        });
    }
});
