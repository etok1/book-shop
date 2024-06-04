import { slides, arrows, allSlides } from "./src/js/constants.js";
import { urlApi } from "./src/js/fetchData.js";

console.log("API URL:", urlApi);
let activeSlide = 0;

function automaticSlider() {
  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      slides[activeSlide].classList.remove("active");
      arrows[activeSlide].classList.remove("active");

      activeSlide = index;

      arrows[activeSlide].classList.add("active");
      slides[activeSlide].classList.add("active");
    });
  });

  setInterval(() => {
    slides[activeSlide].classList.remove("active");
    arrows[activeSlide].classList.remove("active");
    activeSlide++;
    if (activeSlide === allSlides) {
      activeSlide = 0;
    }

    slides[activeSlide].classList.add("active");
    arrows[activeSlide].classList.add("active");
  }, 5000);
}

automaticSlider();
