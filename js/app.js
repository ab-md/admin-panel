const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".hamburger-menu");
const main = document.querySelector(".main-content");
const allToggle = document.querySelector(".side-toggle");

const media = window.matchMedia("(max-width: 992px)");

window.addEventListener("resize", () => {
    if (media.matches) {
        toggle.classList.add("disable");
    } else {
        toggle.classList.remove("disable");
    }
})

toggle.addEventListener('click', () => {
    toggle.classList.toggle("disable");
    sidebar.classList.toggle("disable");
    main.classList.toggle("disable");
})

allToggle.addEventListener('click', () => {
    toggle.classList.toggle("disable");
    sidebar.classList.toggle("disable");
    main.classList.toggle("disable");
})