// Menu Mobile
const hamb = document.getElementById('hamburger');
const menuMobile = document.getElementById('menu-mobile');
const header = document.querySelector('header');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  menuMobile.classList.toggle('show');
  header.classList.toggle('menu-open');
});

document.querySelectorAll('#menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    hamb.classList.remove('active');
    menuMobile.classList.remove('show');
    header.classList.remove('menu-open');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    hamb.classList.remove('active');
    menuMobile.classList.remove('show');
    header.classList.remove('menu-open');
  }
});