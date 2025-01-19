document.addEventListener("DOMContentLoaded", () => {
  // Detectar elementos con animaciones
  const elementsToAnimate = document.querySelectorAll(
    ".slide-in-left, .slide-in-right, .slide-in-up, .fade-in"
  );

  if (elementsToAnimate.length > 0) {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 1.2;

      elementsToAnimate.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    // Escuchar el evento scroll
    window.addEventListener("scroll", handleScroll);

    // Ejecutar la función al cargar la página para verificar los elementos visibles inicialmente
    handleScroll();
  }

  // Menú hamburguesa
  const toggleButton = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (toggleButton && navbar) {
    toggleButton.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }

  // Mostrar el año actual en el footer
  const currentYearElement = document.getElementById("currentYear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Galería interactiva - Modal
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".close");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  const galleries = {
    escuela: [
      "images/escuela/escuela.jpg",
      "images/escuela/profeMarco.jpg",
      "images/escuela/eduardo.jpg",
      "images/escuela/bruno.jpg",
      "images/escuela/gloria.jpg",
      "images/escuela/maite.jpg",
      "images/escuela/maria.jpg",
      "images/escuela/sofia.jpg",
      "images/escuela/yorka.jpg",
    ],
    intermedia: [
      "images/intermedia/intermedia.jpg",
      "images/intermedia/alfredo.jpg",
      "images/intermedia/ambar.jpg",
      "images/intermedia/aracelly.jpg",
      "images/intermedia/berni.jpg",
      "images/intermedia/leo.jpg",
      "images/intermedia/marcos.jpg",
      "images/intermedia/martina.jpg",
      "images/intermedia/matilda.jpg",
      "images/intermedia/maxi.jpg",
    ],
    alta: [
      "images/alta/alta.jpg",
      "images/alta/1.jpg",
      "images/alta/2.jpg",
      "images/alta/3.jpg",
      "images/alta/4.jpg",
      "images/alta/5.jpg",
      "images/alta/6.jpg",
      "images/alta/7.jpg",
      "images/alta/8.jpg",
      "images/alta/9.jpg",
      "images/alta/10.jpg",
      "images/alta/11.jpg",
      "images/alta/12.jpg",
      "images/alta/13.jpg",
    ],
    bodys: [
      "images/bodys/1.jpg",
      "images/bodys/2.jpg",
      "images/bodys/3.jpg",
      "images/bodys/5.jpg",
      "images/bodys/6.jpg",
      "images/bodys/7.jpg",
      "images/bodys/8.jpg",
    ],
  };

  let currentCategory = [];
  let currentIndex = 0;

  document.querySelectorAll(".open-modal").forEach((img) => {
    img.addEventListener("click", (e) => {
      const category = e.target.dataset.category;
      currentCategory = galleries[category];
      currentIndex = 0;
      modalImage.src = currentCategory[currentIndex];
      modal.style.display = "flex";
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + currentCategory.length) % currentCategory.length;
      modalImage.src = currentCategory[currentIndex];
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % currentCategory.length;
      modalImage.src = currentCategory[currentIndex];
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
