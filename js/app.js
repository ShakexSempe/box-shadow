const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside');

hamburger.addEventListener("click", () => {
    aside.classList.toggle("active");
    hamburger.classList.toggle("active");
});

const links = document.querySelectorAll('header a');
console.log(links);

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        aside.classList.remove("active");
    });
})