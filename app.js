// scroll to top functionality
const scrollUp = document.getElementById("scrollup");
if (scrollUp) {
    scrollUp.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
} else {
    console.log('Element does not exist');
}
