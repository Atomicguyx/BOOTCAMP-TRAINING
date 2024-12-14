const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
    colorButton.textContent = `I am ${randomColor}!`;
});
