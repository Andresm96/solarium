
document.addEventListener("DOMContentLoaded", () => {
    const labels = document.querySelectorAll(".acordeon .label");
  
    labels.forEach((label) => {
      label.addEventListener("click", () => {
        const content = label.nextElementSibling;
  
        // Cierra todos los demás contenidos antes de abrir el actual
        const allContents = document.querySelectorAll(".acordeon .content");
        allContents.forEach((otherContent) => {
          if (otherContent !== content && otherContent.classList.contains("open")) {
            otherContent.classList.remove("open");
            otherContent.style.maxHeight = null;
            otherContent.style.padding = "0 15px";
          }
        });
  
        // Alterna entre abrir y cerrar el contenido actual
        if (content.classList.contains("open")) {
          content.classList.remove("open");
          content.style.maxHeight = null;
          content.style.padding = "0 15px";
        } else {
          content.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "15px";
        }
      });
    });
  });
  
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
  

const acordeon = document.getElementsByClassName('contenedor');

for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}
