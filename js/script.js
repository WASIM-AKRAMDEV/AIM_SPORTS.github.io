const swiper = new Swiper(".mySwiper", {
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
    1024: {
      slidesPerView: 3.5,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const ModalSwiper = new Swiper(".myModalSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
const ModalSwiper2 = new Swiper(".myModalSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: ModalSwiper,
  },
});

// Array of images and text
const galleryData = [
  {
    slide1: {
      src: "./assets/E1 Race Bird/E1 1.jpg",
      text: "E1 Race Bird",
      key: 1,
    },
    slide2: {
      src: "./assets/Saudi 2018 FE/Saudi 2018 FE 1.jpg",
      text: "Formula E Saudi 2018",
      key: 2,
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2019 FE/Saudi 2019 FE 1.jpg",
      text: "Formula E Saudi 2019 ",
      key: 3,
    },
    slide2: {
      src: "./assets/Saudi 2021 FE/Saudi 2021 FE 1.jpg",
      text: "Formula E Saudi 2021",
      key: 4,
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2021 XE/Saudi 2021 XE 1.jpg",
      text: "Extreme E Saudi 2021",
      key: 5,
    },
    slide2: {
      src: "./assets/Saudi 2022 FE/Saudi 2022 FE 1.jpg",
      text: "Formula E Saudi 2022",
      key: 6,
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2022 XE/Saudi 2022 XE 1.png",
      text: "Extreme E Saudi 2022",
      key: 7,
    },
    slide2: {
      src: "./assets/Saudi 2023 FE/Saudi 2023 FE 1.jpg",
      text: "Formula E Saudi 2023",
      key: 8,
    },
  },
  {
    slide1: {
      src: "./assets/Saudi 2023 XE/Saudi 2023 XE 1.jpg",
      text: "Extreme E Saudi 2023",
      key: 9,
    },
    slide2: {
      src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 1.jpg",
      text: "Formula E vegas 2019",
      key: 10,
    },
  },

  // Add more items as needed
];

const E1Seabirds = [
  {
    src: "./assets/E1 Race Bird/E1 1.jpg",
    key: 1,
  },
  {
    src: "./assets/E1 Race Bird/E1 2.jpg",
    key: 1,
  },
  {
    src: "./assets/E1 Race Bird/E1 3.jpg",
    key: 1,
  },
  {
    src: "./assets/E1 Race Bird/E1 4.jpg",
    key: 1,
  },
  {
    src: "./assets/E1 Race Bird/E1 5.jpg",
    key: 1,
  },
];
const Saudi18FE = [
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 1.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 2.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 3.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 4.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 5.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 6.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 7.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 8.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 9.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 10.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 11.jpg",
    key: 2,
  },
  {
    src: "./assets/Saudi 2018 FE/Saudi 2018 FE 12.jpg",
    key: 2,
  },
];
const Saudi19FE = [
  {
    src: "./assets/Saudi 2019 FE/Saudi 2019 FE 1.jpg",
    key: 3,
  },
  {
    src: "./assets/Saudi 2019 FE/Saudi 2019 FE 2.jpg",
    key: 3,
  },
  {
    src: "./assets/Saudi 2019 FE/Saudi 2019 FE 3.jpg",
    key: 3,
  },
];
const Saudi21FE = [
  {
    src: "./assets/Saudi 2021 FE/Saudi 2021 FE 1.jpg",
    key: 4,
  },
  {
    src: "./assets/Saudi 2021 FE/Saudi 2021 FE 2.jpg",
    key: 4,
  },
  {
    src: "./assets/Saudi 2021 FE/Saudi 2021 FE 3.jpg",
    key: 4,
  },
  {
    src: "./assets/Saudi 2021 FE/Saudi 2021 FE 4.jpg",
    key: 4,
  },
  {
    src: "./assets/Saudi 2021 FE/Saudi 2021 FE 5.jpg",
    key: 4,
  },
];
const Saudi21XE = [
  {
    src: "./assets/Saudi 2021 XE/Saudi 2021 XE 1.jpg",
    key: 5,
  },
  {
    src: "./assets/Saudi 2021 XE/Saudi 2021 XE 2.jpg",
    key: 5,
  },
  {
    src: "./assets/Saudi 2021 XE/Saudi 2021 XE 3.jpg",
    key: 5,
  },
  {
    src: "./assets/Saudi 2021 XE/Saudi 2021 XE 4.jpg",
    key: 5,
  },
  {
    src: "./assets/Saudi 2021 XE/Saudi 2021 XE 5.jpg",
    key: 5,
  },
];
const Saudi22FE = [
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 1.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 2.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 3.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 4.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 5.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 6.jpg",
    key: 6,
  },
  {
    src: "./assets/Saudi 2022 FE/Saudi 2022 FE 7.jpg",
    key: 6,
  },
];
const Saudi22XE = [
  {
    src: "./assets/Saudi 2022 XE/Saudi 2022 XE 1.png",
    key: 7,
  },
  {
    src: "./assets/Saudi 2022 XE/Saudi 2022 XE 2.jpg",
    key: 7,
  },
  {
    src: "./assets/Saudi 2022 XE/Saudi 2022 XE 3.jpg",
    key: 7,
  },
  {
    src: "./assets/Saudi 2022 XE/Saudi 2022 XE 5.jpg",
    key: 7,
  },
  {
    src: "./assets/Saudi 2022 XE/Saudi 2022 XE 6.jpg",
    key: 7,
  },
];
const Saudi23FE = [
  {
    src: "./assets/Saudi 2023 FE/Saudi 2023 FE 1.jpg",
    key: 8,
  },
  {
    src: "./assets/Saudi 2023 FE/Saudi 2023 FE 2.jpg",
    key: 8,
  },
  {
    src: "./assets/Saudi 2023 FE/Saudi 2023 FE 4.jpg",
    key: 8,
  },
  {
    src: "./assets/Saudi 2023 FE/Saudi 2023 FE 5.jpg",
    key: 8,
  },
];
const Saudi23XE = [
  {
    src: "./assets/Saudi 2023 XE/Saudi 2023 XE 1.jpg",
    key: 9,
  },
  {
    src: "./assets/Saudi 2023 XE/Saudi 2023 XE 2.jpg",
    key: 9,
  },
  {
    src: "./assets/Saudi 2023 XE/Saudi 2023 XE 3.jpg",
    key: 9,
  },
  {
    src: "./assets/Saudi 2023 XE/Saudi 2023 XE 4.jpg",
    key: 9,
  },
  {
    src: "./assets/Saudi 2023 XE/Saudi 2023 XE 5.jpg",
    key: 9,
  },
];
const Vegas17FE = [
  {
    src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 1.jpg",
    key: 10,
  },
  {
    src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 2.jpg",
    key: 10,
  },
  {
    src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 3.jpg",
    key: 10,
  },
  {
    src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 4 (2).jpg",
    key: 10,
  },
  {
    src: "./assets/Vegas 2017 FE eSports/Vegas 2017 FE Esports 4.jpg",
    key: 10,
  },
];

// Flatten the gallery data for easy navigation
const flatGalleryData = galleryData.flatMap((item) => [
  item.slide1,
  item.slide2,
]);

// Global variable to track the current index
let currentIndex = 0;

// Dynamically populate Swiper section
galleryData.forEach((item, index) => {
  const slide1Index = index * 2;
  const slide2Index = index * 2 + 1;

  swiper.appendSlide(`
    <div class="swiper-slide">
      <div class="slide1" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide1Index})">
        <img src="${item.slide1.src}" alt="" loading="lazy" width="100%">
        <div class="overlay">
          <h4>${item.slide1.text}</h4>
        </div>
      </div>
      <div class="slide2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${slide2Index})">
        <img src="${item.slide2.src}" alt="" loading="lazy" width="100%">
        <div class="overlay">
          <h4>${item.slide2.text}</h4>
        </div>
      </div>
    </div>`);
});

// Function to open modal with dynamic content
const modalContent = document.getElementById("modal-content");

function openModal(index) {
  const textContent = document.getElementById("text-content");
  currentIndex = index; // Update the current index

  const currentItem = flatGalleryData[currentIndex];
  const modalContent = document.getElementById("modal-content");
  const modalContentTwo = document.getElementById("modal-content-two");

  // Highlight the clicked image in the gallery section
  const galleryImages = document.querySelectorAll(".swiper-slide .overlay");
  galleryImages.forEach((overlay, i) => {
    overlay.classList.remove("active");
    if (i === currentIndex) {
      overlay.classList.add("active");
    }
  });

  // Determine the category of the clicked image
  const categoryText = currentItem.text;
  const category = currentItem.key;

  // Select the array based on the category
  let currentArray = [];
  switch (category) {
    case 1:
      currentArray = E1Seabirds;
      break;
    case 2:
      currentArray = Saudi18FE;
      break;
    case 3:
      currentArray = Saudi19FE;
      break;
    case 4:
      currentArray = Saudi21FE;
      break;
    case 5:
      currentArray = Saudi21XE;
      break;
    case 6:
      currentArray = Saudi22FE;
      break;
    case 7:
      currentArray = Saudi22XE;
      break;
    case 8:
      currentArray = Saudi23FE;
      break;
    case 9:
      currentArray = Saudi23XE;
      break;
    case 10:
      currentArray = Vegas17FE;
      break;
    // Add more cases for other categories if needed

    default:
      // Handle the case where the category is not recognized
      console.error("Category not recognized:", category);
      break;
  }

  // Set the initial slide of the modal swiper based on the clicked image
  ModalSwiper.slideTo(currentIndex, 0);
  ModalSwiper2.slideTo(currentIndex, 0);

  // Update modal content with the new index and related images
  modalContentTwo.innerHTML = currentArray
    .map(
      (item) => `
    <div class="swiper-slide">
      <img src="${item.src}" alt="${item.key}" width="100%" loading="lazy" height="100%">
    </div>`
    )
    .join("");

  modalContent.innerHTML = currentArray
    .map(
      (item) => `
    <div class="swiper-slide">
      <img src="${item.src}" alt="${item.key}" width="100%" loading="lazy" height="100%">
    </div>`
    )
    .join("");

  textContent.innerHTML = `
    <h1>${categoryText}</h1>
    `;
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
