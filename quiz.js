function checkAnswer() {
    var correctAnswer = "4"
    let checkedRadio = document.querySelector(`input[name="quiz"]:checked`)
    let userAnswer = checkedRadio.value

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }
}

const submitAnswer = document.getElementById("submit-answer")
submitAnswer.addEventListener("click", checkAnswer)
