// Dynamic Active Navigation
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Popup Modal for Offers
window.onload = () => {
    const modal = document.getElementById('offerModal');
    modal.style.display = 'block';

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};
