const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside');

hamburger.addEventListener("click", () => {
    aside.classList.toggle("active");
})