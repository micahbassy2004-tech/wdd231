document.addEventListener("DOMContentLoaded", () => {

  // Set timestamp when page loads
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  // Open modals
  document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.modal);
      if (modal) modal.showModal();
    });
  });

  // Close modals
  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.close);
      if (modal) modal.close();
    });
  });

});