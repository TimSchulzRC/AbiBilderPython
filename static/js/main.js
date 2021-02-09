const allImages = document.querySelector(".images");

const options = {};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("hello");
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      return;
    }
  });
}, options);

appearOnScroll.observe(allImages);

// Remove fade-in when not visible
