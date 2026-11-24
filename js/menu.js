// Ouvre et ferme le menu sur mobile.
// Sans JavaScript, le menu reste affiché : le CSS ne le cache
// que si la classe "js" est présente sur <html>.
document.documentElement.classList.add("js");

const boutonMenu = document.querySelector(".menu-bouton");
const menu = document.querySelector("#menu-principal");

function ouvrirMenu(ouvrir) {
  boutonMenu.setAttribute("aria-expanded", String(ouvrir));
  boutonMenu.setAttribute("aria-label", ouvrir ? "Fermer le menu" : "Ouvrir le menu");
  menu.classList.toggle("ouvert", ouvrir);
}

if (boutonMenu && menu) {
  boutonMenu.addEventListener("click", () => {
    const ouvert = boutonMenu.getAttribute("aria-expanded") === "true";
    ouvrirMenu(!ouvert);
  });

  // Touche Échap : ferme le menu et remet le focus sur le bouton
  document.addEventListener("keydown", (evenement) => {
    if (evenement.key === "Escape" && menu.classList.contains("ouvert")) {
      ouvrirMenu(false);
      boutonMenu.focus();
    }
  });
}
