// Animações ao carregar
window.addEventListener('load', () => {
  document.querySelectorAll('[data-animate]').forEach(el => {
    setTimeout(() => el.classList.add('show'), 100);
  });
});