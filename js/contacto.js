document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
      }
  
      alert("Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.");
      form.reset();
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  