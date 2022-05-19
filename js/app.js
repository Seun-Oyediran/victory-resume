gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const yearField = document.querySelector(".footer-year");
const backToTopBtn = document.querySelector(".back-to-top");

const tl = gsap.timeline();

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

if (window.innerHeight > 950) {
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: `top ${i * 95}px`,
      end: "max",
      pin: true,
      pinSpacing: false,
    });
  });
}

function handleGoToTop() {
  gsap.to(window, { duration: 0.3, scrollTo: 0 });
}

tl.to(".loader-bar .bg", { width: "100%", duration: 7 })
  .to(".loader-bar .btn-con p", { color: "#FAFCFC", duration: 0.3 }, "<+=1")
  .to(".loader-con", { opacity: 0, duration: 1 })
  .to(".loader-con", { display: "none", duration: 0.1, zIndex: "-90" })
  .to("body", { overflowY: "auto", duration: 0.2 });
