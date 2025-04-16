function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
  }
  
  // Promo details array
const promoDetails = [
  {
    title: "Use code ORBITZISBEST",
    description: "Buy one Orbitz juice and get one free! Offer valid until september 30, 2025.",
    
  }
];

// Get DOM elements
const promoBtn = document.getElementById("promoBtn");
const promoModal = document.getElementById("promoModal");
const closeBtn = document.querySelector(".close");
const promoTitle = document.getElementById("promoTitle");
const promoDescription = document.getElementById("promoDescription");

// Show modal on button click
promoBtn.addEventListener("click", () => {
  promoTitle.textContent = promoDetails[0].title;
  promoDescription.textContent = promoDetails[0].description;
  promoModal.style.display = "block";
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  promoModal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === promoModal) {
    promoModal.style.display = "none";
  }
});