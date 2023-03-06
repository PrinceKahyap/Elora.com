// sticky-navbar 
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Hamburger  
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

// Toptoback 
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});

$(".carousal").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});

//  Typedjs 
let typed = new Typed('#typed', {
    strings: ["Web Development", "Graphics Designer", "Photographer"],
    typeSpeed: 200,
    backDelay: 100,
    loop: true
});


//   filter-portfolio 
const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

const preloader = document.getElementById("loader");

function myLoder(){
    preloader.style.display = "none";
}