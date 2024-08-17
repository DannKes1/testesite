const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const recipes = document.querySelectorAll(".recipe");

let currentIndex = 0;

document.querySelector(".carousel-prev").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});


const carouselText = document.getElementById("carousel-text");

const texts = [
  "Descrição do Doce 1",
  "Descrição do Doce 2",
  "Descrição do Doce 3"
];

let currentIndex1 = 0;

document.querySelector(".carousel-prev").addEventListener("click", () => {
  currentIndex1 = currentIndex1 > 0 ? currentIndex1 - 1 : images.length - 1;
  updateCarousel();
});

document.querySelector(".carousel-next").addEventListener("click", () => {
  currentIndex1 = currentIndex1 < images.length - 1 ? currentIndex1 + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex1 * 100}%)`;
  carouselText.textContent = texts[currentIndex1];
}

function updateCarousel() 
{
  // Atualizar posição das imagens
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Ocultar todas as receitas e mostrar a receita correspondente
  recipes.forEach((recipe, index) => {
    recipe.style.display = index === currentIndex ? "block" : "none";
  });
}
updateCarousel();
