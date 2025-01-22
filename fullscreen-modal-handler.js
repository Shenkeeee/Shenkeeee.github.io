const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.querySelector(".close");

const showModal = (src) => {
  modalImg.src = src;
  modalImg.style.boxShadow = "0 0 12px rgba(255, 255, 255, 1)"; // white outline for highlight
  modal.style.display = "flex"; // show modal

  requestAnimationFrame(() => {
    modal.style.opacity = "1";
  });
};

const hideModal = () => {
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 200);
};

document.querySelectorAll(".clickable-img").forEach((img) => {
  img.addEventListener("click", () => showModal(img.src));
});

// Close modal on "X" button click
closeModal.addEventListener("click", hideModal);

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});

// Close modal on "Escape" key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
