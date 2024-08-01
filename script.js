function toggleTheme() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const toggleButton = document.querySelector(".toggle-theme");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  toggleButton.classList.toggle("active");
  hamburger.classList.toggle("open");
}
