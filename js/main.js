function toggleMenu() {
    const menu = document.getElementById("menuitems");
    const header = document.querySelector("header");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      header.style.height = "50px";
      header.style.display = "flex";
    }else {
      menu.style.display = "block";
      header.style.height = "auto";
      header.style.display = "block";
    }
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

function showPromoDetails(){
  promoModal.style.display = "block";
  promoTitle.textContent = promoDetails[0].title;
  promoDescription.textContent = promoDetails[0].description;
}

  function hidePromoDetails(){
    promoModal.style.display = "none";
  }

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  hidePromoDetails();
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === promoModal) {
    hidePromoDetails();
  }
});