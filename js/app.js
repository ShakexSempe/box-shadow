const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('.aside');
const links = document.querySelectorAll('header a');
const header = document.querySelector('.header');
console.log(links);

// HAMBURGER TOGGLE
hamburger.addEventListener("click", () => {
    aside.classList.toggle("active");
    hamburger.classList.toggle("active");
    if(header.classList.contains("hero-header")){
        header.classList.remove('hero-header');
        header.classList.add('aside-header');
    }
});

// REMOVE HAMBURGER ON LINK CLICK
links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        aside.classList.remove("active");
        header.classList.remove("aside-header");
    });
});

// HERO INTERSECTION OBSERVER
const hero = document.querySelector('.hero');
const heroOptions = {
    rootMargin: '-20% 0px 0px 0px',
}
const heroObserver = new IntersectionObserver(
    function( entries, heroObserver) {
        entries.forEach( entry => {
            if(!entry.isIntersecting) {
                console.log("Her NOT io");
                header.classList.remove('hero-header');
            } else {
                console.log("hero IS io");
                header.classList.add('hero-header');
            }
        });
    }, heroOptions
);
heroObserver.observe(hero);