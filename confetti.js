const text = document.querySelector('.text');

text.addEventListener('animationend', () => {
    setTimeout(() => confetti({
        spread: 90,
        particleCount: 150,
        origin: {
            x: 0.5,
            y: 0.7,
        }
    }), 100);
});
