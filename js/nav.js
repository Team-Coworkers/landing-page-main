const header = document.querySelector("[data-site-header]");
const toggle = document.querySelector("[data-nav-toggle]");

if (header && toggle) {
  const label = toggle.querySelector("[data-i18n]");
  const desktop = window.matchMedia("(min-width: 1200px)");

  // The toggle says "Open" or "Close" in the page language, depending on the menu state.
  const updateLabel = () => {
    if (!label) return;
    const key = header.classList.contains("is-open") ? "nav.menuClose" : "nav.menu";
    label.dataset.i18n = key;
    const pack = typeof translations !== "undefined" ? translations[document.documentElement.lang] : null;
    if (pack && pack[key]) label.textContent = pack[key];
  };

  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    updateLabel();
  };

  toggle.addEventListener("click", () => {
    setOpen(!header.classList.contains("is-open"));
  });

  header.querySelectorAll("a, [data-lang]").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !header.classList.contains("is-open")) return;
    setOpen(false);
    toggle.focus();
  });

  // Leaving the mobile layout closes the menu, so it does not stay open behind the desktop header.
  desktop.addEventListener("change", (event) => {
    if (event.matches) setOpen(false);
  });

  document.addEventListener("hostera:languagechange", updateLabel);
}
