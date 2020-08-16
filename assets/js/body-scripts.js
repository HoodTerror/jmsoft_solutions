const scrollToTopBtn = document.querySelector(".scroll-to-top");

const maxWidth768px = window.matchMedia("(max-width: 992px)");

// Scroll-To-Top Button Appearance
window.addEventListener("scroll", function() {
    if (!maxWidth768px.matches && (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150))
        scrollToTopBtn.style.bottom = "62px";
    else
        scrollToTopBtn.style.bottom = "-40px";
});

// Scroll To Top
scrollToTopBtn.addEventListener("click", function() {
    $("html, body").animate({scrollTop: 0}, "slow");
});
