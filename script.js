document.addEventListener("DOMContentLoaded", () => {
    // Efeito de revelação suave das seções conforme a página é rolada
    const cards = document.querySelectorAll(".timeline-card");

    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("show");
            }
        });
    };

    // Executa ao carregar e ao rolar a página
    revealCards();
    window.addEventListener("scroll", revealCards);
});