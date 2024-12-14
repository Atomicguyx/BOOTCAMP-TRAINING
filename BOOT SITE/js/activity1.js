const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", () => {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33c1", "#ff8333"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorButton.style.backgroundColor = randomColor;
    colorButton.textContent = `I am ${randomColor}!`;
});
