document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.getElementById("menu-btn");
  
    function toggleNavbarBlur() {
      if (window.scrollY > 1 || menuBtn.checked) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  
    window.addEventListener("scroll", toggleNavbarBlur);
    
    menuBtn.addEventListener("change", toggleNavbarBlur);
  
    // Run it once to set the initial state
    toggleNavbarBlur();
  });
  