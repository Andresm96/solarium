// Datos simulados de artículos
const articles = [
    {
        title: "El Futuro de la Energía Solar",
        description: "Descubre cómo la energía solar está transformando el mundo y los avances tecnológicos que prometen revolucionar su uso.",
        image: "solar-future.jpg",
        link: "post1.html"
    },
    {
        title: "5 Consejos para Instalar Paneles Solares",
        description: "Aprende las mejores prácticas para instalar paneles solares en tu hogar y maximizar su eficiencia.",
        image: "solar-installation.jpg",
        link: "post2.html"
    },
    {
        title: "¿Cómo funcionan las baterías solares?",
        description: "Todo lo que necesitas saber sobre el almacenamiento de energía solar para días nublados y por la noche.",
        image: "solar-batteries.jpg",
        link: "post3.html"
    }
];

// Referencias al DOM
const blogContainer = document.getElementById("blog");
const searchInput = document.getElementById("searchInput");

// Función para renderizar los artículos
function renderArticles(filteredArticles) {
    blogContainer.innerHTML = ""; // Limpiar el contenedor
    filteredArticles.forEach(article => {
        const articleHTML = `
            <article class="post">
                <img src="${article.image}" alt="${article.title}">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.link}" class="read-more">Leer más</a>
            </article>
        `;
        blogContainer.innerHTML += articleHTML;
    });
}

// Función para filtrar artículos
function filterArticles() {
    const query = searchInput.value.toLowerCase();
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query)
    );
    renderArticles(filteredArticles);
}

// Eventos
searchInput.addEventListener("input", filterArticles);

// Inicializar la página con todos los artículos
renderArticles(articles);
