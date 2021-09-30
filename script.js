(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.navigation');
  const menuCloseItem = document.querySelector('.navigation-close');
  const links = document.querySelectorAll('.list__item');

  burgerItem.addEventListener('click', () => {
    menu.classList.add('navigation_active');
  });

  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('navigation_active');
  });

  for (const link of links) {
    link.addEventListener('click', () => {
      menu.classList.remove('navigation_active');
    });
  }
})();
