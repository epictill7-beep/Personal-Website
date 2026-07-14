const button = document.getElementById("funButton");
const sound = document.getElementById("celebrate");

document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--y", `${e.clientY}px`);
});

button.addEventListener("click", () => {
    sound.play();

    confetti({
        particleCount: 200,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
    });
    confetti({
        particleCount: 200,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
    });
});


/*const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 },
        });
    
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();*/