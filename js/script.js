// ANIMATION BARRE COMPETENCES CARD COMPETENCES
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
  { text: "Développement Web moderne...", color: "#16b6f7" },
  { text: "Bots & Automatisation avancée...", color: "#23d18b" },
  { text: "UI/UX design responsive...", color: "#c976fe" },
];

let carouselIndex = 0;
let carouselChar = 0;
const carouselSpeed = 60;
const carouselPause = 1100;
const carouselTypewriter = document.getElementById("carouselTypewriter");

function typeCarousel() {
  // applique la couleur de la phrase en cours
  carouselTypewriter.style.color = carouselPhrases[carouselIndex].color;

  // réinitialise le texte
  if (carouselChar < carouselPhrases[carouselIndex].text.length) {
    carouselTypewriter.textContent +=
      carouselPhrases[carouselIndex].text.charAt(carouselChar);
    carouselChar++;
    setTimeout(typeCarousel, carouselSpeed);
  } else {
    setTimeout(eraseCarousel, carouselPause);
  }
}

// Fonction pour effacer le texte
function eraseCarousel() {
  if (carouselChar > 0) {
    carouselTypewriter.textContent = carouselPhrases[
      carouselIndex
    ].text.substring(0, carouselChar - 1);
    carouselChar--;
    setTimeout(eraseCarousel, 22);
  } else {
    carouselIndex = (carouselIndex + 1) % carouselPhrases.length;
    setTimeout(typeCarousel, 420);
  }
}

window.addEventListener("DOMContentLoaded", typeCarousel);

/* ====== FORMULAIRE CONTACT – Envoi Formspree (AJAX) ====== */
(() => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");
  const submitBtn = document.getElementById("submitBtn");

  // Petite fonction utilitaire pour afficher une alerte
  function showAlert(type, message) {
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    alertBox.classList.remove("d-none");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validation HTML5 (empêche envoi si champs invalides)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Désactive le bouton durant l'envoi
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Envoi...`;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        showAlert(
          "success",
          "✅ Merci ! Votre message a bien été envoyé. Je vous réponds au plus vite."
        );
        form.reset();
      } else {
        // Formspree renvoie des détails JSON en cas d’erreur
        const data = await res.json().catch(() => ({}));
        const msg =
          data?.errors?.[0]?.message ||
          "Une erreur est survenue. Réessayez plus tard.";
        showAlert("danger", "❌ " + msg);
      }
    } catch (err) {
      showAlert(
        "danger",
        "❌ Réseau indisponible. Vérifiez votre connexion et réessayez."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="bi bi-send me-2"></i>Envoyer le message`;
    }
  });
})();
