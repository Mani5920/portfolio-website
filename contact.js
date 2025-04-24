document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const submitBtn = form.querySelector("button");
  
    form.addEventListener("submit", function (e) {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        e.preventDefault();
        return;
      }
  
      alert("Thanks for reaching out! Your email client will now open.");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    });
  });
  