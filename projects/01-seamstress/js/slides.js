const slides = document.querySelector("section div.slides");

// Pick all the images in 'Slides'
const images = slides.querySelectorAll("img");

// Set up counters
let current = 0;
let z = 0;

slides.addEventListener("click", function () {
  // First, add one to Z
  z = z + 1;

  // Then add one the the z index of the current image
  images[current].style.zIndex = z;

  // Increment the current value
  current = current + 1;

  // And use a modulo operator to calculate how many images
  // there are left in 'images'.
  current = current % images.length;
});
