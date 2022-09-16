let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    basis();
    card.classList.add("basis");
  });
});

function basis() {
  cards.forEach((card) => {
    card.classList.remove("basis");
  });
}
