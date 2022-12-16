const menuBtn = document.querySelector(".top-bar .btn");

const closeBtn = document.querySelector(".side-nav .btn");
const sideMenu = document.querySelector(".side-nav .menu");
const background = document.querySelector(".side-nav .background");

menuBtn.addEventListener("click", function (evt) {
    closeBtn.style.visibility = "visible";
    sideMenu.style.visibility = "visible";
    background.style.visibility = "visible";
    closeBtn.classList.add("slide-in-btn");
    sideMenu.classList.add("slide-in-menu");
    background.classList.add("to-dark");
});

closeBtn.addEventListener("click", function (evt) {
    closeBtn.classList.remove("slide-in-btn");
    sideMenu.classList.remove("slide-in-menu");
    background.classList.remove("to-dark");
});