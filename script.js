document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const overlay = document.querySelector(".header__overlay");
  const navLinks = document.querySelectorAll(".header__link");

  if (burger && nav && overlay) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("header__burger--active");
      nav.classList.toggle("header__nav--active");
      overlay.classList.toggle("header__overlay--active");

      if (nav.classList.contains("header__nav--active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    overlay.addEventListener("click", () => {
      burger.classList.remove("header__burger--active");
      nav.classList.remove("header__nav--active");
      overlay.classList.remove("header__overlay--active");
      document.body.style.overflow = "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("header__burger--active");
        nav.classList.remove("header__nav--active");
        overlay.classList.remove("header__overlay--active");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("header__nav--active")) {
        burger.classList.remove("header__burger--active");
        nav.classList.remove("header__nav--active");
        overlay.classList.remove("header__overlay--active");
        document.body.style.overflow = "";
      }
    });
  }

  const buttons = document.querySelectorAll(
    ".button, .hero__button, .mission__button, .cta__button, .subscribe__social-btn",
  );

  buttons.forEach((button) => {
    const removePress = () => button.classList.remove("pointer-press");

    button.addEventListener("pointerdown", () => {
      button.classList.add("pointer-press");
    });

    button.addEventListener("pointerup", removePress);
    button.addEventListener("pointercancel", removePress);
    button.addEventListener("pointerleave", removePress);
  });

  const featureCards = document.querySelectorAll(".features__card");

  featureCards.forEach((card) => {
    const removePress = () => card.classList.remove("pointer-press");
    const removeHover = () => card.classList.remove("pointer-hover");

    card.addEventListener("pointerdown", () => {
      card.classList.add("pointer-press");
    });

    card.addEventListener("pointerup", removePress);
    card.addEventListener("pointercancel", removePress);
    card.addEventListener("pointerleave", removePress);

    card.addEventListener("pointerenter", () => {
      card.classList.add("pointer-hover");
    });

    card.addEventListener("pointerleave", removeHover);
  });

  const links = document.querySelectorAll(".header__link, .footer__link");

  links.forEach((link) => {
    const removeHover = () => link.classList.remove("pointer-hover");

    link.addEventListener("pointerenter", () => {
      link.classList.add("pointer-hover");
    });

    link.addEventListener("pointerleave", removeHover);
  });
});
