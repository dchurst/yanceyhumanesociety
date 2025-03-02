"use strict";

document.getElementById("filter-btn").addEventListener("click", function () {
    // Get selected filter values
    const selectedType = document.getElementById("pet-type").value;
    const selectedGender = document.getElementById("pet-gender").value;
    const selectedAge = document.getElementById("pet-age").value;

    // Get all pet cards
    const petCards = document.querySelectorAll(".pet-card");

    petCards.forEach(card => {
        // Get data attributes from pet card
        const petType = card.getAttribute("data-type");
        const petGender = card.getAttribute("data-gender");
        const petAge = card.getAttribute("data-age");

        // Check if the pet matches the selected filters
        const matchesType = (selectedType === "all" || petType === selectedType);
        const matchesGender = (selectedGender === "all" || petGender === selectedGender);
        const matchesAge = (selectedAge === "all" || petAge === selectedAge);

        // Show or hide pet cards based on filter match
        if (matchesType && matchesGender && matchesAge) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});