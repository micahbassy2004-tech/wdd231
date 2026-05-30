// Set timestamp when page loads
document.querySelector("#timestamp").value = new Date().toISOString();

// Open modals
document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});

// Close modals
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).close();
  });
});