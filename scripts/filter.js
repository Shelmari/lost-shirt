(function() {
  const elem = document.querySelector('.products__list');
  const iso = new Isotope(elem, {
    itemSelector: '.products__item',
    filter: '.popular'
  });

  const controlls = document.querySelectorAll('.filter__link');
  const activeClass = 'filter__item--active';

  controlls.forEach(function(control) {
    control.addEventListener('click', function(e) {
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");//метод getAttribute позволяет получить значение атрибута data-filter
        console.log(filterName);
      controlls.forEach(function(link) {
        link.closest('.filter__item').classList.remove(activeClass);
      })
      control.closest('.filter__item').classList.add(activeClass); //метод .closest ищет родительский класс filter__item переданного элемента и добавляет к нему activeClass

      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })
}());