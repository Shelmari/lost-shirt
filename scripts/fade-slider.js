(function () {
  const sliders = document.querySelectorAll(".fade-slider__item");
  const activeClass =  "fade-slider__item--visible";
  let index = 0;
  setInterval(function() {
    sliders[index].classList.remove(activeClass);
    index++;
    if (index + 1 > sliders.length)
      index = 0;
    sliders[index].classList.add(activeClass);
  }, 5000);
}());