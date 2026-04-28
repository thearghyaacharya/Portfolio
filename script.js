/* ===================================
   ARGHYA ACHARYA PORTFOLIO
   PREMIUM UI INTERACTIONS
=================================== */

/*
Smooth transitions and subtle fade effects improve perceived polish,
especially in dark UI systems where abrupt changes feel harsh.
Gentle transitions on text/background are a modern best practice. :contentReference[oaicite:0]{index=0}
*/


/* ===================================
   SCROLL REVEAL ANIMATION
=================================== */

const revealElements = document.querySelectorAll(
  ".section, .case-study, .metric-card, .philosophy-card, .limitless-banner"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active-reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.background = "rgba(11, 11, 11, 0.97)";
    navbar.style.borderBottom = "1px solid rgba(201,168,93,0.12)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
  } else {
    navbar.style.background = "rgba(11, 11, 11, 0.92)";
    navbar.style.borderBottom = "1px solid #262626";
    navbar.style.boxShadow = "none";
  }
});


/* ===================================
   SMOOTH SCROLL FOR INTERNAL LINKS
=================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


/* ===================================
   HERO IMAGE PARALLAX FEEL
=================================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
  if (heroImage && window.innerWidth > 992) {
    let scrollValue = window.scrollY * 0.05;
    heroImage.style.transform = `translateY(${scrollValue}px)`;
  }
});


/* ===================================
   BUTTON HOVER MICRO INTERACTION
=================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0px)";
  });
});


/* ===================================
   OPTIONAL: ACTIVE NAV HIGHLIGHT
=================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const activateMenuAtCurrentSection = () => {
  const checkpoint = window.pageYOffset + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      checkpoint >= sectionTop &&
      checkpoint <= sectionTop + sectionHeight
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


/* ===================================
   CONSOLE SIGNATURE
=================================== */

console.log(`
----------------------------------------
Arghya Acharya Portfolio
Built with clarity, not clutter.
Brand. Business. Both should win.
----------------------------------------
`);
