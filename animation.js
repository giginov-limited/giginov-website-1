for (let i = 1; i <= 9; i++)
ScrollReveal().reveal(`#sv${i}`, {
    duration: 1000,
    reset: false,
    scale: 0,
    delay: 300 + i * 200,
});