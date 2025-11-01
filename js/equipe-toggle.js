function toggleDescricao(el) {
  const desc = el.nextElementSibling;
  el.classList.toggle("active");
  desc.classList.toggle("mostrar");
}