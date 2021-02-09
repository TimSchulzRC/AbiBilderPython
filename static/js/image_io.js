const images = document.querySelectorAll("[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 500px 0px",
};

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
  // img.classList.add("fade");
}

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log("hey");

    if (entry.isIntersecting) {
      preloadImage(entry.target);
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      return;
    }
  });
}, imgOptions);

images.forEach((image) => {
  io.observe(image);
});
