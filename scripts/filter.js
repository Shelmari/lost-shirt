(function() {
  const controlls = document.querySelectorAll('.product__link');
  const activeClass = 'product__item--active';
  controlls.forEach(function(control) {
    control.addEventListener('click', function(e) {
      e.preventDefault();
      controlls.forEach(function(link) {
        link.closest('.product__item').classList.remove(activeClass);
      })
      control.closest('.product__item').classList.add(activeClass); //метод .closest ищет родительский класс filter__item переданного элемента и добавляет к нему activeClass
    })
  })
}());