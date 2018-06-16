document.addEventListener('DOMContentLoaded', function () {

  const $burger = document.getElementsByClassName('navbar-burger')[0];
  const $menu = document.getElementsByClassName('navbar-menu')[0];

  $burger.addEventListener('click', () => {
    $burger.classList.toggle('is-active');
    $menu.classList.toggle('is-active');
  });

});
