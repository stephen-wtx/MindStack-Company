const btn = document.getElementById("btn-servicos");
const modal = document.getElementById("modal-servicos");
const fechar = document.getElementById("fechar-modal");

// Abrir modal
btn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

// Fechar pelo botão X
fechar.addEventListener("click", (e) => {
  e.stopPropagation(); // evita propagação
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Fechar ao clicar fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
