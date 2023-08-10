// phew… not a lot going on here. Please add some code!
const toggleButton = document.querySelector('[data-js="first-bookmark"]');

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("bookmark--active");
});
console.log(toggleButton);
