// Ouvre et ferme le menu sur mobile
const boutonMenu = document.querySelector(".menu-bouton");
const menu = document.querySelector("#menu-principal");

if (boutonMenu && menu) {
  boutonMenu.addEventListener("click", () => {
    const ouvert = boutonMenu.getAttribute("aria-expanded") === "true";
    boutonMenu.setAttribute("aria-expanded", String(!ouvert));
    menu.classList.toggle("ouvert", !ouvert);
  });
}
