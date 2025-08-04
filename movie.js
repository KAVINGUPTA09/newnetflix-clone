// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".trending-wrapper");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  // Amount to scroll on each click (tweak this as needed)
  const scrollAmount = 300;

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
});
