// Function to handle scrolling animations
const fadeInElements = document.querySelectorAll('.fade-in');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Function to add fade-in class
const handleScroll = () => {
    fadeInElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
};

// Initial check on page load
window.addEventListener('load', handleScroll);

// Check on scroll
window.addEventListener('scroll', handleScroll);

// Optional: You can also trigger the animation when the window is resized
window.addEventListener('resize', handleScroll);

// Function to smooth scroll to sections (if you have any anchor links)
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});