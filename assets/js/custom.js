document.addEventListener('DOMContentLoaded', function () {
    // Handle section transitions
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the target section
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.add('active');
        });
    });

    // Typing animation for About Me
    const aboutCards = document.querySelectorAll('.about-card');
    let cardIndex = 0;

    function typeText() {
        if (cardIndex < aboutCards.length) {
            const card = aboutCards[cardIndex];
            const text = card.getAttribute('data-text');
            let charIndex = 0;

            function typeChar() {
                if (charIndex < text.length) {
                    card.textContent += text[charIndex];
                    charIndex++;
                    setTimeout(typeChar, 50);
                } else {
                    card.classList.add('active');
                    cardIndex++;
                    typeText();
                }
            }

            card.textContent = ''; // Clear previous text
            typeChar();
        }
    }

    typeText();
});
