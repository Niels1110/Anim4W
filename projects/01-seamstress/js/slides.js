const slides = document.querySelectorAll("section div.slides");

// Loop through all the 'slides'

slides.forEach((slide) => {
  // Pick all the images in 'Slides'
  const images = slide.querySelectorAll("img");

  // Set up counters
  let current = 0;
  let z = 1000000;

  slide.addEventListener("click", function () {
    // First, add subtract to Z
    z = z - 1;

    // Then add one the the z index of the current image
    images[current].style.zIndex = z;

    // Increment the current value
    current = current + 1;

    // And use a modulo operator to calculate how many images
    // there are left in 'images'.
    current = current % images.length;
  });
});
