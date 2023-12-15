const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// Array of images and text
const galleryData = [
  {
    slide1: {
      src: "./assets/766443_e02c744d261d422097311e89df4ea1fb~mv2.webp",
      text: "E1 Seabird",
    },
    slide2: {
      src: "./assets/766443_657a7f965ea14bbba1eb8ed7a5708315~mv2.webp",
      text: "Extreme E Saudi 2023",
    },
  },
  {
    slide1: {
      src: "./assets/766443_ac236c2082394f80bd0e92a600c3701c~mv2.webp",
      text: "Formula E Saudi 2023",
    },
    slide2: {
      src: "./assets/766443_9fc7fadbe7de49e6903f0f3d24e5cecb~mv2.webp",
      text: "Extreme E Saudi 2022",
    },
  },
  {
    slide1: {
      src: "./assets/766443_0251c1b0b3554731a94b825ccdea3a3d~mv2.webp",
      text: "Formula E Saudi 2022",
    },
    slide2: {
      src: "./assets/766443_d317787406ec481289ba36f42ef2e373~mv2.webp",
      text: "Extreme E Saudi 2021",
    },
  },
  {
    slide1: {
      src: "./assets/766443_580959fb73074d558d7dd029b729ca9d~mv2 (1).webp",
      text: "Formula E Saudi 2021",
    },
    slide2: {
      src: "./assets/766443_25f73ce805bd4a63bd3329ebd2ab9dee~mv2 (1).webp",
      text: "Formula E Saudi 2019",
    },
  },
  {
    slide1: {
      src: "./assets/766443_39f741c800ba4587bd7bbe5e34a67305~mv2.webp",
      text: "Formula E Saudi 2018",
    },
    slide2: {
      src: "./assets/766443_5835086668fd4ce187a4f32d93073687~mv2 (1).webp",
      text: "Formula E eSports Vegas 2017",
    },
  },
  // Add more items as needed
];

// Flatten the gallery data for easy navigation
const flatGalleryData = galleryData.flatMap((item) => [
  item.slide1,
  item.slide2,
]);

let currentIndex = 0; // Global variable to track the current index

// Dynamically populate Swiper section
galleryData.forEach((item, index) => {
  const slide1Index = index * 2;
  const slide2Index = index * 2 + 1;

  swiper.appendSlide(`
    <div class="swiper-slide">
      <div class="slide1" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide1Index})">
        <img src="${item.slide1.src}" alt="" width="100%">
        <div class="overlay">
          <h4>${item.slide1.text}</h4>
        </div>
      </div>
      <div class="slide2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide2Index})">
        <img src="${item.slide2.src}" alt="" width="100%">
        <div class="overlay">
          <h4>${item.slide2.text}</h4>
        </div>
      </div>
    </div>`);
});

// Function to open modal with dynamic content
function openModal(index) {
  currentIndex = index; // Update the current index

  const modalContent = document.getElementById("modal-content");
  const currentItem = flatGalleryData[currentIndex];

  modalContent.innerHTML = `
    <div class="col-lg-8 col-md-12 d-flex align-items-center">
      <i class="bi bi-chevron-left me-5" onclick="navigateModal(-1)"></i>
      <div class="img-cont">
        <img src="${currentItem.src}" alt="" width="100%">
      </div>
      <i class="bi bi-chevron-right ms-5" onclick="navigateModal(1)"></i>
    </div>
    <div class="col-lg-4 col-md-12">
      <h1>${currentItem.text}</h1>
      <a href="#">See all images of the ${currentItem.text}</a>
    </div>`;
}

// Function to navigate within the modal
function navigateModal(direction) {
  currentIndex += direction;

  // Wrap around to the beginning if reaching the end
  if (currentIndex < 0) {
    currentIndex = flatGalleryData.length - 1;
  } else if (currentIndex >= flatGalleryData.length) {
    currentIndex = 0;
  }

  // Update modal content with the new index
  openModal(currentIndex);
}
