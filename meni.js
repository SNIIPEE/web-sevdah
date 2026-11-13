const navigacija = document.querySelector(".navigacija");
const meniDugme = navigacija.querySelector(".meni-dugme");
const meni = document.getElementById("glavni-meni");
const mobilniPrikaz = window.matchMedia("(max-width: 820px)");

function postaviMeni(otvoren) {
  meniDugme.setAttribute("aria-expanded", String(otvoren));
  meniDugme.setAttribute("aria-label", otvoren ? "Zatvori meni" : "Otvori meni");
  meni.classList.toggle("otvoren", otvoren);
}

meniDugme.hidden = false;
navigacija.classList.add("meni-spreman");

meniDugme.addEventListener("click", () => {
  postaviMeni(meniDugme.getAttribute("aria-expanded") !== "true");
});

meni.addEventListener("click", (event) => {
  if (event.target.closest("a")) postaviMeni(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && meniDugme.getAttribute("aria-expanded") === "true") {
    postaviMeni(false);
    meniDugme.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!navigacija.contains(event.target)) postaviMeni(false);
});

mobilniPrikaz.addEventListener("change", () => {
  if (mobilniPrikaz.matches && meni.contains(document.activeElement)) meniDugme.focus();
  postaviMeni(false);
});

window.addEventListener("pageshow", () => postaviMeni(false));
