document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.navbar');
  const navbarToggler = document.getElementById('navbar-toggler-hamburger');
  const navbarCollapse = document.getElementById('navbar-collapse');

  navbarToggler.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      if (navbar.classList.contains('scrolled')) {
        // Enable transition if 'scrolled' is also present
        navbarCollapse.style.transition = '';
      } else {
        // Disable transition
        navbarCollapse.style.transition = 'none';
      }

      navbarCollapse.classList.remove('show');
      navbar.classList.remove('scrolled');

      // Reset to original transition setting after action
      setTimeout(() => { navbarCollapse.style.transition = ''; }, 0);
    } else {
      navbarCollapse.classList.add('show');
      navbar.classList.add('scrolled');
      // Enable transition
      navbarCollapse.style.transition = '';
    }
  });
});
