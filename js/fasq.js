function toggleAnswer(answerId) {
    const answer = document.getElementById(`answer${answerId}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
