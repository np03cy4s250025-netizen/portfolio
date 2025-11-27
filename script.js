
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    
    navLinks.classList.toggle('open');

    // Update aria-expanded and button icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}


menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
  
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const description = document.getElementById('description').value.trim();
        if (name === '' || email === '' || phone === '' || description === '') {
            // Show error popup
            alert('Please fill out all fields!');
            
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
            return;
        }

        alert('Successful! Thank you for your message.');

        messageDiv.textContent = 'Thank you for your message! I will get back to you soon.';
        messageDiv.style.color = 'green';

        contactForm.reset(); 
    });
}