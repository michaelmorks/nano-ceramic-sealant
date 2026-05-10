
// HAMBURGER

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


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