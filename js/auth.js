// Authentication JavaScript

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const loginPassword = document.getElementById('loginPassword');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPassword.setAttribute('type', type);
            this.querySelector('i').classList.toggle('bi-eye');
            this.querySelector('i').classList.toggle('bi-eye-slash');
        });
    }
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Validation
        let isValid = true;
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('loginEmail').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('loginEmail').classList.remove('is-invalid');
            document.getElementById('loginEmail').classList.add('is-valid');
        }
        
        // Password validation
        if (password.length < 3) {
            document.getElementById('loginPassword').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('loginPassword').classList.remove('is-invalid');
            document.getElementById('loginPassword').classList.add('is-valid');
        }
        
        if (isValid) {
            // Demo authentication
            if (email === 'demo@vrgpowerdash.ro' && password === 'demo123') {
                // Store user session
                const user = {
                    email: email,
                    firstName: 'Demo',
                    lastName: 'User',
                    loginTime: new Date().toISOString()
                };
                
                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify(user));
                } else {
                    sessionStorage.setItem('user', JSON.stringify(user));
                }
                
                // Show success message
                showAuthMessage('Login successful! Redirecting to dashboard...', 'success');
                
                // Send Google Analytics event
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'login', {
                        'event_category': 'Authentication',
                        'event_label': 'Login Success'
                    });
                }
                
                // Redirect to dashboard
                setTimeout(() => {
                    window.location.href = 'monitoring.html';
                }, 1500);
            } else {
                showAuthMessage('Invalid email or password. Please try again or use demo credentials.', 'danger');
                
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'login_failed', {
                        'event_category': 'Authentication',
                        'event_label': 'Login Failed'
                    });
                }
            }
        } else {
            loginForm.classList.add('was-validated');
        }
    });
}

// Register Form Handler
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    // Toggle password visibility
    const toggleRegPassword = document.getElementById('toggleRegPassword');
    const regPassword = document.getElementById('regPassword');
    
    if (toggleRegPassword) {
        toggleRegPassword.addEventListener('click', function() {
            const type = regPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            regPassword.setAttribute('type', type);
            this.querySelector('i').classList.toggle('bi-eye');
            this.querySelector('i').classList.toggle('bi-eye-slash');
        });
    }
    
    // Phone number formatting
    const regPhone = document.getElementById('regPhone');
    if (regPhone) {
        regPhone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.startsWith('40')) {
                value = '+' + value;
            } else if (value.startsWith('0')) {
                if (value.length > 4 && value.length <= 7) {
                    value = value.slice(0, 4) + ' ' + value.slice(4);
                } else if (value.length > 7) {
                    value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 10);
                }
            }
            
            e.target.value = value;
        });
    }
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const firstName = document.getElementById('regFirstName').value.trim();
        const lastName = document.getElementById('regLastName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const address = document.getElementById('regAddress').value.trim();
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        let isValid = true;
        
        // First name validation
        if (firstName.length < 2) {
            setInvalidAuth('regFirstName');
            isValid = false;
        } else {
            setValidAuth('regFirstName');
        }
        
        // Last name validation
        if (lastName.length < 2) {
            setInvalidAuth('regLastName');
            isValid = false;
        } else {
            setValidAuth('regLastName');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setInvalidAuth('regEmail');
            isValid = false;
        } else {
            setValidAuth('regEmail');
        }
        
        // Phone validation
        const phoneRegex = /^(\+40|0040|0)[1-9][0-9]{8}$/;
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            setInvalidAuth('regPhone');
            isValid = false;
        } else {
            setValidAuth('regPhone');
        }
        
        // Password validation
        if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            setInvalidAuth('regPassword');
            isValid = false;
        } else {
            setValidAuth('regPassword');
        }
        
        // Confirm password validation
        if (password !== confirmPassword) {
            setInvalidAuth('regConfirmPassword');
            isValid = false;
        } else {
            setValidAuth('regConfirmPassword');
        }
        
        // Terms validation
        if (!agreeTerms) {
            document.getElementById('agreeTerms').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('agreeTerms').classList.remove('is-invalid');
            document.getElementById('agreeTerms').classList.add('is-valid');
        }
        
        if (isValid) {
            // Create user account (simulated)
            const user = {
                firstName,
                lastName,
                email,
                phone,
                address,
                registrationDate: new Date().toISOString()
            };
            
            // Store user data
            localStorage.setItem('registeredUser', JSON.stringify(user));
            localStorage.setItem('user', JSON.stringify(user));
            
            // Show success message
            showAuthMessage('Account created successfully! Redirecting to dashboard...', 'success');
            
            // Send Google Analytics event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'sign_up', {
                    'event_category': 'Authentication',
                    'event_label': 'Registration Success'
                });
            }
            
            // Redirect to dashboard
            setTimeout(() => {
                window.location.href = 'monitoring.html';
            }, 2000);
        } else {
            registerForm.classList.add('was-validated');
        }
    });
}

// Helper functions
function setValidAuth(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
}

function setInvalidAuth(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
}

function showAuthMessage(message, type) {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-5" style="z-index: 9999; max-width: 500px;" role="alert">
            <i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill'} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', alertHtml);
    
    setTimeout(() => {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }, 5000);
}

// Check if user is logged in (for dashboard protection)
function checkAuth() {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (!user && window.location.pathname.includes('monitoring.html')) {
        // Redirect to login if accessing dashboard without authentication
        // Commented out for demo purposes - you can uncomment this in production
        // window.location.href = 'login.html';
    }
    return user ? JSON.parse(user) : null;
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'logout', {
            'event_category': 'Authentication',
            'event_label': 'Logout'
        });
    }
    
    window.location.href = 'index.html';
}

// Display user info if logged in
const currentUser = checkAuth();
if (currentUser) {
    // Update user dropdown if exists
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) {
        userDropdown.innerHTML = `
            <i class="bi bi-person-circle"></i>
            <span class="d-none d-md-inline ms-1">${currentUser.firstName}</span>
        `;
        
        // Update dropdown menu
        const dropdownMenu = userDropdown.nextElementSibling;
        if (dropdownMenu) {
            dropdownMenu.innerHTML = `
                <li><h6 class="dropdown-header">${currentUser.firstName} ${currentUser.lastName}</h6></li>
                <li><a class="dropdown-item" href="monitoring.html"><i class="bi bi-speedometer2 me-2"></i>Dashboard</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" onclick="logout()"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
            `;
        }
    }
}

console.log('Authentication system loaded');
