// ANIMATION DE TAPE ACCUEIL & PRESENTATION
const carouselPhrases = [
  "Développeur Web & Web Mobile",
  "Passionné par la création digitale",
  "Spécialiste UI/UX design responsive",
  "Automatisation & Bots sur-mesure",
];

let carouselIndex = 0;
let carouselChar = 0;
const carouselSpeed = 60; // Vitesse d'écriture
const carouselPause = 1100; // Pause entre les phrases (ms)
const carouselTypewriter = document.getElementById("carouselTypewriter");

function typeCarousel() {
  if (carouselChar < carouselPhrases[carouselIndex].length) {
    carouselTypewriter.textContent +=
      carouselPhrases[carouselIndex].charAt(carouselChar);
    carouselChar++;
    setTimeout(typeCarousel, carouselSpeed);
  } else {
    setTimeout(eraseCarousel, carouselPause);
  }
}

function eraseCarousel() {
  if (carouselChar > 0) {
    carouselTypewriter.textContent = carouselPhrases[carouselIndex].substring(
      0,
      carouselChar - 1
    );
    carouselChar--;
    setTimeout(eraseCarousel, 22);
  } else {
    carouselIndex = (carouselIndex + 1) % carouselPhrases.length;
    setTimeout(typeCarousel, 420);
  }
}

window.addEventListener("DOMContentLoaded", typeCarousel);
