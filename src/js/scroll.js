var navbar = document.querySelector('.navbar');
const navbarCollapse = document.getElementById('navbar-collapse');
window.addEventListener('scroll', function() {
    if (window.scrollY >= 1) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        navbarCollapse.classList.remove('show');
    }
});