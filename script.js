// Menu Toggle
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    // Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');

    // Update aria-expanded and button icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}

// Add the event handler
menuButton.addEventListener('click', toggleMenu);

// OPTIONAL: Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

// Contact Form Validation with Popup
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        // Stop the browser from submitting the form and refreshing the page
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const description = document.getElementById('description').value.trim();

        // Check if all fields are filled
        if (name === '' || email === '' || phone === '' || description === '') {
            // Show error popup
            alert('Please fill out all fields!');
            
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
            return;
        }

        // Show success popup
        alert('Successful! Thank you for your message.');

        // Form success message
        messageDiv.textContent = 'Thank you for your message! I will get back to you soon.';
        messageDiv.style.color = 'green';

        contactForm.reset(); // Clear form
    });
}