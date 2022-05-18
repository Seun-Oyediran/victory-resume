const yearField = document.querySelector(".footer-year");

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

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: `top ${i * 15}%`,
    end: "max",
    pin: true,
    pinSpacing: false,
  });
});
