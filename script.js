/* ===================================
   ARGHYA ACHARYA PORTFOLIO
   BRUTAL PREMIUM MOTION SYSTEM
=================================== */


/* ===================================
   SCROLL REVEAL
=================================== */

const revealItems = document.querySelectorAll(
  `
  section,
  .hero > .container,
  .about-grid,
  .metric,
  .case,
  .case-content,
  .case-hero-img,
  .img-strip img,
  .bl-grid img,
  .phil-card,
  .buk-card,
  .reading-item,
  .limitless-banner,
  .contact-wrap,
  .footer-inner
  `
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px"
  }
);

revealItems.forEach((item) => revealObserver.observe(item));


/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});


/* ===================================
   SMOOTH SCROLL FOR INTERNAL LINKS
=================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ===================================
   HERO IMAGE SUBTLE PARALLAX
=================================== */

const heroImage = document.querySelector(".hero-img");

window.addEventListener("scroll", () => {
  if (!heroImage) return;
  if (window.innerWidth <= 900) return;

  const scrollValue = window.scrollY * 0.035;
  heroImage.style.transform = `translateY(${scrollValue}px)`;
});


/* ===================================
   BUTTON MICRO INTERACTION
=================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});


/* ===================================
   ACTIVE NAV HIGHLIGHT
=================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const activateMenuAtCurrentSection = () => {
  const checkpoint = window.scrollY + 220;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      checkpoint >= sectionTop &&
      checkpoint < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active-nav");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-nav");
        }
      });
    }
  });
};

window.addEventListener("scroll", activateMenuAtCurrentSection);
window.addEventListener("load", activateMenuAtCurrentSection);


/* ===================================
   CONSOLE SIGNATURE
=================================== */

console.log(`
----------------------------------------
Arghya Acharya Portfolio
Built with clarity, not clutter.
Brand. Business. Purpose.
----------------------------------------
`);
