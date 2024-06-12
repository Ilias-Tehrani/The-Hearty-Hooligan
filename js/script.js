let visibleCard = 2;
let totalCards = 0;

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("mode-toggle");
    const currentMode = localStorage.getItem("mode") || "light";
    
    if (currentMode === "dark") {
        document.documentElement.classList.add("dark-mode");
    }
    
    toggleButton.addEventListener("click", function() {
        document.documentElement.classList.toggle("dark-mode");
        const mode = document.documentElement.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("mode", mode);
    });
});

function setSlider() {
    const slider = document.querySelector('.slider');
    const cardWidth = slider.querySelector('.card').offsetWidth;
    totalCards = document.querySelectorAll('.card').length;
    // gap is de som van marges, 15px aan elke zijde van card
    const gap = 30;  
    //centeren visibleCard in de slider
    let offset = ((cardWidth + gap) * (visibleCard - 1) - ((slider.parentElement.offsetWidth - cardWidth - gap) / 2)); 
    offset = (offset < 0) ? 0 : offset;
    slider.style.transform = `translateX(-${offset}px)`;
}

function prevCard() {
    if (visibleCard > 1) {
        visibleCard--;
        setSlider();
    }
} 

function nextCard() {
    if (visibleCard < totalCards) {
        visibleCard++;
        setSlider();
    }
}

window.addEventListener('resize', setSlider); //herbereken wanneer schermformaat of orientatie wijzigt
document.querySelector('.prev').addEventListener('click', prevCard);
document.querySelector('.next').addEventListener('click', nextCard);

setSlider(); // uitvoeren functie wanneer de pagina is ingeladen