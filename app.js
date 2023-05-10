const activePage = window.location.pathname;
const navLink = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list-items");
  const listItems = document.querySelectorAll(".list-items li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    listItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 9 + 0.3
        }s`;
      }
    });

    // burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
