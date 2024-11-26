document.getElementById('calcular').addEventListener('click', function () {
            // Valores ficticios de consumo por unidad en kWh/mes
            const consumos = {
              tv: 50,          // 50 kWh por televisor
              lavadora: 70,    // 70 kWh por lavadora
              habitaciones: 30, // 30 kWh por habitación
              auto: 100,       // 100 kWh por auto eléctrico
              nevera: 120,     // 120 kWh por nevera
              personas: 20     // 20 kWh por persona
            };
      
            // Capturar valores seleccionados
            const tv = parseInt(document.getElementById('tv').value) || 0;
            const lavadora = parseInt(document.getElementById('lavadora').value) || 0;
            const habitaciones = parseInt(document.getElementById('habitaciones').value) || 0;
            const auto = parseInt(document.getElementById('auto').value) || 0;
            const nevera = parseInt(document.getElementById('nevera').value) || 0;
            const personas = parseInt(document.getElementById('personas').value) || 0;
      
            // Calcular consumo total
            const consumoTotal =
              tv * consumos.tv +
              lavadora * consumos.lavadora +
              habitaciones * consumos.habitaciones +
              auto * consumos.auto +
              nevera * consumos.nevera +
              personas * consumos.personas;
      
            // Mostrar resultado
            document.getElementById('resultado').textContent =
              `El consumo total estimado es de ${consumoTotal} kWh/mes.`;
          });



//testimoniales
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  index = (index === slides.length - 1) ? 0 : index + 1;
  updateSlider();
});



