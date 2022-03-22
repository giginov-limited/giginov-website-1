for (let i = 1; i <= 9; i++)
ScrollReveal().reveal(`#sv${i}`, {
    duration: 500,
    reset: false,
    scale: 0,
    delay: 200 + i * 50,
});