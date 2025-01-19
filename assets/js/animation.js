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
      "images/escuela1.jpg",
      "images/escuela2.jpg",
      "images/escuela3.jpg",
    ],
    intermedia: [
      "images/intermedia1.jpg",
      "images/intermedia2.jpg",
      "images/intermedia3.jpg",
    ],
    alta: ["images/alta1.jpg", "images/alta2.jpg", "images/alta3.jpg"],
    bodys: ["images/bodys1.jpg", "images/bodys2.jpg", "images/bodys3.jpg"],
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
