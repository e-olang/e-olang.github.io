/* Minimal site script — theme toggle + nav border on scroll */

(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      if (theme) localStorage.setItem(STORAGE_KEY, theme);
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  function currentResolvedTheme() {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") return stored;
    return "light";
  }

  applyTheme(getStoredTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = currentResolvedTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        setStoredTheme(next);
      });
    }

    const nav = document.querySelector("[data-nav]");
    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 4) nav.classList.add("is-scrolled");
        else nav.classList.remove("is-scrolled");
      };
      onScroll();
      document.addEventListener("scroll", onScroll, { passive: true });
    }
  });
})();
