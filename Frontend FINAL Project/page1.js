// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const searchIcon = document.querySelector('.nav-icons .fa-search');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const arFeatures = document.querySelectorAll('.ar-feature');
const bookStylistBtn = document.getElementById('bookStylist');
const collectionCards = document.querySelectorAll('.collection-card');
const categoryCards = document.querySelectorAll('.category-card');

// Custom callback function for AR features
function highlightFeature(featureElement, isActive) {
    // DOM traversal using querySelector
    const button = featureElement.querySelector('.btn-feature');
    
    if (isActive) {
        // Style modification via class list
        featureElement.classList.add('active');
        button.style.borderLeftColor = '#e67e22';
    } else {
        featureElement.classList.remove('active');
        button.style.borderLeftColor = 'transparent';
    }
}

// Navigation active state
navItems.forEach(item => {
    // Mouse-based event: click
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // DOM traversal using querySelectorAll
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        
        // Style modification via class list
        this.classList.add('active');
    });
});

// Search functionality
searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    searchModal.style.display = 'flex';
    searchInput.focus();
});

closeSearch.addEventListener('click', function() {
    searchModal.style.display = 'none';
});

// Key-based event with addEventListener
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        searchModal.style.display = 'none';
    }
    
    if (e.key === 'Enter') {
        // Simulate search functionality
        alert(`Searching for: ${this.value}`);
        this.value = '';
        searchModal.style.display = 'none';
    }
});

// AR Feature interaction
arFeatures.forEach(feature => {
    // Mouse-based event: mouseover
    feature.addEventListener('mouseover', function() {
        // Using custom callback function
        highlightFeature(this, true);
    });
    
    // Mouse-based event: mouseout
    feature.addEventListener('mouseout', function() {
        highlightFeature(this, false);
    });
    
    // Mouse-based event: click
    feature.addEventListener('click', function() {
        // DOM tree navigation using parentElement and children
        const featureId = this.id;
        const featureButton = this.children[0];
        
        // Style modification
        featureButton.style.backgroundColor = '#f0f0f0';
        
        // Reset other features
        arFeatures.forEach(otherFeature => {
            if (otherFeature.id !== featureId) {
                otherFeature.children[0].style.backgroundColor = 'white';
            }
        });
    });
});

// Collection cards hover effect
collectionCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        // DOM tree navigation using querySelector
        const label = this.querySelector('.collection-label');
        label.style.fontSize = '20px';
    });
    
    card.addEventListener('mouseout', function() {
        const label = this.querySelector('.collection-label');
        label.style.fontSize = '18px';
    });
});

// Category card interaction
categoryCards.forEach(card => {
    const rentButton = card.querySelector('.btn-rent');
    
    rentButton.addEventListener('click', function() {
        // DOM tree navigation using parentElement
        const categoryName = this.parentElement.querySelector('h3').textContent;
        alert(`You selected to rent from: ${categoryName}`);
    });
});

// Stylist booking functionality
bookStylistBtn.addEventListener('click', function() {
    // Dynamic element addition
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Your stylist call has been booked! We will contact you shortly.';
    
    // DOM tree navigation - append to body
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        // DOM tree navigation - remove child
        document.body.removeChild(notification);
    }, 5000);
});

// Mobile menu toggle functionality for responsive design
document.addEventListener('DOMContentLoaded', function() {
    // Check if screen is mobile size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            // Create mobile menu button if it doesn't exist
            if (!document.querySelector('.mobile-menu-btn')) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                // DOM tree navigation - insert before
                const navIcons = document.querySelector('.nav-icons');
                document.querySelector('.main-nav').insertBefore(mobileMenuBtn, navIcons);
                
                mobileMenuBtn.addEventListener('click', function() {
                    const navLinks = document.querySelector('.nav-links');
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        } else {
            // Remove mobile menu button if exists
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.parentElement.removeChild(mobileMenuBtn);
            }
            
            // Ensure nav links are visible on desktop
            document.querySelector('.nav-links').style.display = 'flex';
        }
    };
    
    // Check on load and resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
