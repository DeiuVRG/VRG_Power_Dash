// Contact Form Validation and Handling

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const privacyCheck = document.getElementById('privacyCheck').checked;
    
    // Validation flags
    let isValid = true;
    
    // First Name validation
    if (firstName.length < 2) {
        setInvalid('firstName', 'First name must be at least 2 characters');
        isValid = false;
    } else {
        setValid('firstName');
    }
    
    // Last Name validation
    if (lastName.length < 2) {
        setInvalid('lastName', 'Last name must be at least 2 characters');
        isValid = false;
    } else {
        setValid('lastName');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setInvalid('email', 'Please enter a valid email address (e.g., name@example.com)');
        isValid = false;
    } else {
        setValid('email');
    }
    
    // Phone validation - Romanian format
    const phoneRegex = /^(\+40|0040|0)[1-9][0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        setInvalid('phone', 'Please enter a valid Romanian phone number (e.g., +40 xxx xxx xxx)');
        isValid = false;
    } else {
        setValid('phone');
    }
    
    // Subject validation
    if (!subject) {
        setInvalid('subject', 'Please select a subject');
        isValid = false;
    } else {
        setValid('subject');
    }
    
    // Message validation
    if (message.length < 10) {
        setInvalid('message', 'Message must be at least 10 characters');
        isValid = false;
    } else {
        setValid('message');
    }
    
    // Privacy checkbox validation
    if (!privacyCheck) {
        setInvalid('privacyCheck', 'You must agree to the privacy policy');
        isValid = false;
    } else {
        setValid('privacyCheck');
    }
    
    // If form is valid, submit
    if (isValid) {
        // Simulate form submission
        console.log('Form submitted:', {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message
        });
        
        // Show success message
        successMessage.classList.remove('d-none');
        
        // Reset form
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 5000);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Send Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'Contact',
                'event_label': subject
            });
        }
    } else {
        // Show validation errors
        contactForm.classList.add('was-validated');
    }
});

// Helper functions for validation feedback
function setInvalid(fieldId, message) {
    const field = document.getElementById(fieldId);
    const feedback = field.nextElementSibling;
    
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
    
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
    }
}

function setValid(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

// Real-time validation for email
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        setInvalid('email', 'Please enter a valid email address');
    } else if (email) {
        setValid('email');
    }
});

// Real-time validation for phone
document.getElementById('phone').addEventListener('blur', function() {
    const phone = this.value.trim();
    const phoneRegex = /^(\+40|0040|0)[1-9][0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    if (phone && !phoneRegex.test(cleanPhone)) {
        setInvalid('phone', 'Please enter a valid Romanian phone number');
    } else if (phone) {
        setValid('phone');
    }
});

// Phone input formatting
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    // Handle Romanian phone format
    if (value.startsWith('40')) {
        value = '+' + value;
    } else if (value.startsWith('0')) {
        // Format as: 0xxx xxx xxx
        if (value.length > 4 && value.length <= 7) {
            value = value.slice(0, 4) + ' ' + value.slice(4);
        } else if (value.length > 7) {
            value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 10);
        }
    }
    
    e.target.value = value;
});

// Character counter for message
const messageField = document.getElementById('message');
const messageLabel = messageField.previousElementSibling;

messageField.addEventListener('input', function() {
    const length = this.value.length;
    const counterText = ` (${length} characters)`;
    
    // Remove existing counter if present
    const labelText = messageLabel.textContent.replace(/\s*\(\d+\scharacters\)/, '');
    messageLabel.textContent = labelText + counterText;
});

// Clear validation on input
const formInputs = contactForm.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
            this.classList.remove('is-invalid', 'is-valid');
        }
    });
});

console.log('Contact form validation loaded successfully');
