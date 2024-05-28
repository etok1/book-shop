import { slides, arrows, allSlides } from "./src/js/constants.js";
import { urlApi, renderCards } from "./src/js/fetchData.js";
// import { getBooks } from "./src/js/saving.js";
// import styles from "./src/css/styles.css";

console.log("API URL:", urlApi);

function automaticSlider() {
  let activeSlide = 0;
  setInterval(() => {
    slides[activeSlide].classList.remove("active");
    arrows[activeSlide].classList.remove("active");
    activeSlide++;
    if (activeSlide === allSlides) {
      activeSlide = 0;
    }
    slides[activeSlide].classList.add("active");
    arrows[activeSlide].classList.add("active");
  }, 3000);
}

automaticSlider();
// renderCards();
