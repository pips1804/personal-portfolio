function toggleTheme() {
  const body = document.body;
  const progress = document.querySelectorAll(".container");
  const card = document.querySelectorAll(".card");
  const myImage = document.getElementById("profile");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    progress.forEach((container) => {
      container.style.backgroundColor = "#222";
    });
    myImage.src = "assets/images/me.jpg";

    card.forEach((container) => {
      container.style.backgroundColor = "#222";
    });
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    progress.forEach((container) => {
      container.style.backgroundColor = "#111";
    });

    card.forEach((container) => {
      container.style.backgroundColor = "#111";
    });
    myImage.src = "assets/images/me2.jpg";
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
