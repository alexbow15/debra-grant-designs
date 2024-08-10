let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active", "previous");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  if (slideIndex === 1) {
    slides[slides.length - 1].classList.add("previous");
  } else {
    slides[slideIndex - 2].classList.add("previous");
  }
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}
