// Random number generation
const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

guessButton.addEventListener("click", () => {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(userGuess)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "red";
    } else if (userGuess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed the number!";
        result.style.color = "limegreen";
    } else {
        result.textContent = userGuess < randomNumber ? "Too low! Try again." : "Too high! Try again.";
        result.style.color = "purple";
    }
});
