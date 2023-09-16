const navbarCollapse = document.getElementById("navbar-collapse");
const navbar = document.getElementById("navbar");
document.getElementById("navbar-toggler-hamburger").addEventListener("click", function() {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.add("hiding");
    setTimeout(() => {
      navbarCollapse.classList.remove("hiding");
    }, 400);
    navbarCollapse.classList.remove("show");
  } else {
    navbarCollapse.classList.add("show");
    navbar.classList.add("scrolled");
    navbar.style.borderBottom = "";
  }
});

