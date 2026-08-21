// Developer Data
const DEVELOPER_DATA = {
  name: "Mihir Anand",
  firstName: "Mihir",
  lastName: "Anand",
  initials: "MA",
  title: "2nd Year B.Tech CSE Student",
  tagline: "Problem Solving & Preparing for Software Engineering Internships",
  headline: "CSE Student · Aspiring Software Developer · Problem Solver",
  collegeName: "ABES ENGINEERING COLLEGE",
  degree: "B.Tech in Computer Science",
  graduationYear: "2029",
  location: "India",
  email: "raghavanand034@gmail.com",
  phone: "+91 9876543210",
  linkedin: "https://www.linkedin.com/in/mihir-anand-349a99424/",
  codechef: "https://www.codechef.com/users/mihir1245anand",
  github: "https://github.com/mihir1245anand",
  leetcode: "https://leetcode.com/u/mihir1245anand/",
  hackerrank: "https://www.hackerrank.com/profile/mihir1245anand",
  resumeUrl: "#resume"
};

// Roles and Icons for Dynamic Animated Writing
const ROLE_ITEMS = [
  { text: "Full-Stack Web Developer", icon: "⚡" },
  { text: "1★ CodeChef Problem Solver", icon: "🎯" },
  { text: "C++ & Algorithms Specialist", icon: "💻" },
  { text: "Modern React.js Engineer", icon: "🚀" },
  { text: "CSE Student @ ABES Ghaziabad", icon: "🎓" }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  initSkillBars();
  initScrollAnimations();
  initContactForm();
  initScrollToTop();
  updateCurrentYear();
});

// Advanced Typewriter Effect with Morphing & Icons
function initTypewriter() {
  const typedElement = document.getElementById("typed-role");
  const iconElement = document.getElementById("role-icon");
  if (!typedElement) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const currentItem = ROLE_ITEMS[roleIndex];
    const fullText = currentItem.text;

    if (iconElement && iconElement.textContent !== currentItem.icon) {
      iconElement.textContent = currentItem.icon;
    }

    if (isDeleting) {
      typedElement.textContent = fullText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typedElement.textContent = fullText.substring(0, charIndex + 1);
      charIndex++;
      // Humanized typing cadence
      typingSpeed = 65 + Math.random() * 30;
    }

    if (!isDeleting && charIndex === fullText.length) {
      isDeleting = true;
      typingSpeed = 2200; // Hold complete word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROLE_ITEMS.length;
      typingSpeed = 450; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// Navbar Scroll and Active Spy
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active Section Spy
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-target") === current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// Mobile Menu Handler
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!hamburger || !mobileMenu) return;

  function toggleMenu() {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  }

  hamburger.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    }
  });
}

// Smooth Scrolling for data-target buttons/links
function initSmoothScroll() {
  const scrollTriggers = document.querySelectorAll("[data-target]");

  scrollTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      const targetId = trigger.getAttribute("data-target");
      if (!targetId) return;

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Animated Skill Bars with IntersectionObserver
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width");
          if (targetWidth) {
            bar.style.width = targetWidth + "%";
          }
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.2 }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

// Fade in animations on Scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in-element");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

// Interactive Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const successAlert = document.getElementById("form-success-alert");
  const submitButton = contactForm?.querySelector(".form-submit");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: rotate-slow 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Sending…
      `;
    }

    // Simulate asynchronous submission
    await new Promise((resolve) => setTimeout(resolve, 1400));

    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        Send Message
      `;
    }

    contactForm.reset();

    if (successAlert) {
      successAlert.style.display = "flex";
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 5000);
    }
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollToTopBtn = document.querySelector(".scroll-to-top");
  if (!scrollToTopBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 400) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Dynamic Copyright Year
function updateCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
