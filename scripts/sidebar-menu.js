(function () {
  const openBtn = document.querySelector(".sidebar__hamburger");
  const closedBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector('.sidebar');
  
  openBtn.addEventListener("click", function (){
    sidebar.classList.add('sidebar--opened');
  });
  
  closedBtn.addEventListener('click', function (){
    sidebar.classList.remove('sidebar--opened');
  });
}());