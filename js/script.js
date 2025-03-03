"use strict";

document.getElementById("filter-btn").addEventListener("click", function () {
    const selectedType = document.getElementById("pet-type").value;
    const selectedGender = document.getElementById("pet-gender").value;
    const selectedAge = document.getElementById("pet-age").value;

    const petCards = document.querySelectorAll(".pet-card");

    petCards.forEach(card => {
        const petType = card.getAttribute("data-type");
        const petGender = card.getAttribute("data-gender");
        const petAge = card.getAttribute("data-age");

        const matchesType = (selectedType === "all" || petType === selectedType);
        const matchesGender = (selectedGender === "all" || petGender === selectedGender);
        const matchesAge = (selectedAge === "all" || petAge === selectedAge);

        if (matchesType && matchesGender && matchesAge) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});