const button = document.getElementById("funButton");
const sound = document.getElementById("celebrate");

button.addEventListener("click", () => {
    sound.play();
});