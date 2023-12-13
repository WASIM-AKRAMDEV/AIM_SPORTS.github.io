// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

// Array of images and text
// const galleryData = [
//   {
//     src: "./assets/766443_e02c744d261d422097311e89df4ea1fb~mv2.webp",
//     text: "E1 Seabird",
//   },
//   {
//     src: "./assets/766443_657a7f965ea14bbba1eb8ed7a5708315~mv2.webp",
//     text: "Extreme E Saudi 2023",
//   },
//   {
//     src: "./assets/766443_ac236c2082394f80bd0e92a600c3701c~mv2.webp",
//     text: "Formula E Saudi 2023",
//   },
//   {
//     src: "./assets/766443_9fc7fadbe7de49e6903f0f3d24e5cecb~mv2.webp",
//     text: "Extreme E Saudi 2022",
//   },

//   {
//     src: "./assets/766443_0251c1b0b3554731a94b825ccdea3a3d~mv2.webp",
//     text: "Formula E Saudi 2022",
//   },
//   {
//     src: "./assets/766443_d317787406ec481289ba36f42ef2e373~mv2.webp",
//     text: "Extreme E Saudi 2021",
//   },
//   {
//     src: "./assets/766443_580959fb73074d558d7dd029b729ca9d~mv2 (1).webp",
//     text: "Formula E Saudi 2021",
//   },
//   {
//     src: "/assets/766443_25f73ce805bd4a63bd3329ebd2ab9dee~mv2 (1).webp",
//     text: "Formula E Saudi 2019",
//   },

//   {
//     src: "./assets/766443_39f741c800ba4587bd7bbe5e34a67305~mv2.webp",
//     text: "Formula E Saudi 2018",
//   },
//   {
//     src: "./assets/766443_5835086668fd4ce187a4f32d93073687~mv2 (1).webp",
//     text: "Formula E eSports Vegas 2017",
//   },
//   // Add more items as needed
// ];

// let currentIndex = 0; // Track the current index in the galleryData array

// // Dynamically populate gallery section
// const galleryWrapper = document.getElementById("gallery-wrapper");
// galleryData.forEach((item, index) => {
//   const slideType = index % 2 === 0 ? "slide1" : "slide2"; // Alternate between slide1 and slide2
//   galleryWrapper.innerHTML += `
//       <div class="swiper-slide">
//         <div class="${slideType}" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${index})">
//           <img src="${item.src}" alt="" width="100%" height="100%">
//           <div class="overlay">
//             <h4>${item.text}</h4>
//           </div>
//         </div>
//       </div>`;
// });

// // Function to open modal with dynamic content
// function openModal(index) {
//   currentIndex = index; // Update the current index

//   const modalContent = document.getElementById("modal-content");
//   const slideType = currentIndex % 2 === 0 ? "slide1" : "slide2";

//   modalContent.innerHTML = `
//       <div class="col-lg-9 d-flex align-items-center">
//         <i class="bi bi-chevron-left me-5" onclick="navigateModal(-1)"></i>
//         <div class="img-cont">
//           <img src="${galleryData[index].src}" alt="" width="100%" height="100%">
//         </div>
//         <i class="bi bi-chevron-right ms-5" onclick="navigateModal(1)"></i>
//       </div>
//       <div class="col-lg-3">
//         <h1>${galleryData[index].text}</h1>
//         <a href="#">See all images of the ${galleryData[index].text}</a>
//       </div>`;
// }

// // Function to navigate within the modal
// function navigateModal(direction) {
//   currentIndex += direction;

//   // Wrap around to the beginning if reaching the end
//   if (currentIndex < 0) {
//     currentIndex = galleryData.length - 1;
//   } else if (currentIndex >= galleryData.length) {
//     currentIndex = 0;
//   }

//   // Update modal content with the new index
//   openModal(currentIndex);
// }

