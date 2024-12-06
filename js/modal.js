const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const modal = document.getElementById("thankYouModal");
const thankYouMessage = document.getElementById("thankYouMessage");
const closeModalButton = document.getElementById("closeModalButton");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name && message) {
    thankYouMessage.innerHTML = `¡Gracias, <span class="modal__highlight">${name}</span>, por tu mensaje! Pronto me pondré en contacto contigo.`;
    modal.style.display = "flex";
    contactForm.reset();
  }
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
