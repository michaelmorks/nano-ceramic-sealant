
// HAMBURGER

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ADD this anywhere in your JS file
document.addEventListener('touchstart', () => {}, { passive: true });


/* ── FORMSPREE ── */
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.reset();
      successMessage.style.display = "block";

      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 120,
          origin: { y: 0.5 }
        });
      }, 300);

      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
      }

    } else {
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    alert("Submission failed. Please check your connection.");
  }
});


/* ── COUNT-UP ANIMATION ── */
function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = true;
  
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = target / (duration / 16);
    let val = 0;
  
    const timer = setInterval(() => {
      val = Math.min(val + step, target);
      el.textContent = Math.round(val);
      if (val >= target) clearInterval(timer);
    }, 16);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        animateCounter(counter);
      } else {
        observer.observe(counter);
      }
    });
  });
  