// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateDarkModeIcon();
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateDarkModeIcon();
});

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.className = 'bi bi-sun-fill';
    } else {
        icon.className = 'bi bi-moon-stars-fill';
    }
}

// Search Functionality
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
const searchResults = document.getElementById('searchResults');

// Searchable content database
const searchableContent = [
    {
        title: 'Home',
        url: 'index.html',
        keywords: 'home, voltage stabilizer, energy management, IoT, smart home, dashboard'
    },
    {
        title: 'Products',
        url: 'products.html',
        keywords: 'products, voltage stabilizer, control module, energy monitor, components, specifications'
    },
    {
        title: 'Dashboard',
        url: 'monitoring.html',
        keywords: 'dashboard, monitoring, control, devices, energy consumption, real-time, statistics'
    },
    {
        title: 'About Us',
        url: 'about.html',
        keywords: 'about, mission, technology, bachelor thesis, universitatea politehnica timisoara'
    },
    {
        title: 'Contact',
        url: 'contact.html',
        keywords: 'contact, form, email, phone, address, support, message'
    }
];

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
});

function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        searchResults.innerHTML = '<p class="text-muted">Please enter a search term.</p>';
        searchModal.show();
        return;
    }
    
    const results = searchableContent.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.keywords.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="alert alert-info">
                <i class="bi bi-info-circle-fill me-2"></i>
                No results found for "<strong>${query}</strong>". Try different keywords.
            </div>
        `;
    } else {
        let html = `<h6 class="mb-3">Found ${results.length} result(s) for "<strong>${query}</strong>":</h6>`;
        html += '<div class="list-group">';
        
        results.forEach(result => {
            html += `
                <a href="${result.url}" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${result.title}</h5>
                        <small><i class="bi bi-arrow-right"></i></small>
                    </div>
                    <small class="text-muted">${result.keywords.split(',').slice(0, 5).join(' • ')}</small>
                </a>
            `;
        });
        
        html += '</div>';
        searchResults.innerHTML = html;
    }
    
    searchModal.show();
}

// Active Navigation Link Highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Scroll to Top/Bottom Buttons
const scrollToTopBtn = document.getElementById('scrollToTop');
const scrollToBottomBtn = document.getElementById('scrollToBottom');

// Show/hide scroll buttons based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Show scroll to top button after scrolling down 300px
    if (scrollPosition > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
    
    // Show scroll to bottom button if not at bottom
    if (scrollPosition + windowHeight < documentHeight - 100) {
        scrollToBottomBtn.classList.add('show');
    } else {
        scrollToBottomBtn.classList.remove('show');
    }
});

// Scroll to top
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll to bottom
scrollToBottomBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image loading animation
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // If image is already cached and loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Navbar collapse on scroll for mobile
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, false);

// Add animation class to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .dashboard-card');
    animateElements.forEach(el => observer.observe(el));
});

// Performance: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('VRG Power Dash - Main JS loaded successfully');
