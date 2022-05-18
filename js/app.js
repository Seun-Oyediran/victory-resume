gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const yearField = document.querySelector(".footer-year");
const backToTopBtn = document.querySelector(".back-to-top");

backToTopBtn.addEventListener("click", handleGoToTop);

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    pagination: false,
    arrows: false,
    autoWidth: true,
    gap: 45,
    autoplay: true,
    type: "loop",
  });
  splide.mount();
});

function displayYear() {
  const year = `© ${new Date().getFullYear()}`;
  yearField.innerHTML = year;
}

displayYear();

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: `top ${i * 15}%`,
    end: "max",
    pin: true,
    pinSpacing: false,
  });
});

function handleGoToTop() {
  gsap.to(window, { duration: 0.3, scrollTo: 0 });
}
