// ANIMATION BARRE COMPETENCES CARD SERVICES
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const bar = card.querySelector(".progress-bar-skill");
    if (bar && !bar.classList.contains("animated")) {
      bar.style.width = bar.getAttribute("data-skill") + "%";
      bar.classList.add("animated");
      setTimeout(() => {
        const span = bar.querySelector("span");
        if (span) span.style.opacity = 1;
      }, 800);
    }
  });
  card.addEventListener("mouseleave", () => {
    const bar = card.querySelector(".progress-bar-skill");
    if (bar) {
      bar.style.width = "0%";
      bar.classList.remove("animated");
      const span = bar.querySelector("span");
      if (span) span.style.opacity = 0;
    }
  });
});

// ANIMATION DE TAPE ACCUEIL & PRESENTATION
const carouselPhrases = [
  { text: "Développement Web moderne...", color: "#16b6f7" }, // Bleu (Web)
  { text: "Création Design sur-mesure...", color: "#ffb300" }, // Jaune/orange (Design)
  { text: "Bots & Automatisation avancée...", color: "#23d18b" }, // Vert (Bot)
  { text: "UI/UX design responsive...", color: "#c976fe" }, // Violet/bonus (ex: pour l'UX)
];

let carouselIndex = 0;
let carouselChar = 0;
const carouselSpeed = 60; // vitesse d'écriture
const carouselPause = 1100; // pause entre phrases (ms)
const carouselTypewriter = document.getElementById("carouselTypewriter");

function typeCarousel() {
  // applique la couleur de la phrase en cours
  carouselTypewriter.style.color = carouselPhrases[carouselIndex].color;

  if (carouselChar < carouselPhrases[carouselIndex].text.length) {
    carouselTypewriter.textContent +=
      carouselPhrases[carouselIndex].text.charAt(carouselChar);
    carouselChar++;
    setTimeout(typeCarousel, carouselSpeed);
  } else {
    setTimeout(eraseCarousel, carouselPause);
  }
}

function eraseCarousel() {
  if (carouselChar > 0) {
    carouselTypewriter.textContent = carouselPhrases[
      carouselIndex
    ].text.substring(0, carouselChar - 1);
    carouselChar--;
    setTimeout(eraseCarousel, 22);
  } else {
    // passe à la phrase suivante et applique la couleur suivante
    carouselIndex = (carouselIndex + 1) % carouselPhrases.length;
    setTimeout(typeCarousel, 420);
  }
}

window.addEventListener("DOMContentLoaded", typeCarousel);

// CAROUSEL D'IMAGES PREMIUM
//  A INSERER
