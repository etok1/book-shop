console.log("Hii");

setInterval(() => {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide === allSlides) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add("active");
}, 3000);
