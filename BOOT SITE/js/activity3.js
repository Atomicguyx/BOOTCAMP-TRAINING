const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(option => {
    option.addEventListener("click", (e) => {
        const isCorrect = e.target.getAttribute("data-correct") === "true";
        if (isCorrect) {
            quizResult.textContent = "🎉 Correct! Great job!";
            quizResult.style.color = "limegreen";
        } else {
            quizResult.textContent = "❌ Oops! Try again.";
            quizResult.style.color = "red";
        }
    });
});
