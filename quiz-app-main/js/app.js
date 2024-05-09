document.getElementById("submit").addEventListener("click", () => {
  let selectArray = [];
  const result = [
    "javascript",
    "true",
    "alert",
    "function2",
    "call3",
    "if1",
    "if4",
  ];
  let count = 0;

  // Get selected answers
  let quiz1 = document.getElementsByName("quiz1");
  let quiz2 = document.getElementsByName("quiz2");
  let quiz3 = document.getElementsByName("quiz3");
  let quiz4 = document.getElementsByName("quiz4");
  let quiz5 = document.getElementsByName("quiz5");
  let quiz6 = document.getElementsByName("quiz6");
  let quiz7 = document.getElementsByName("quiz7");

  // Validate if all questions are answered
  if (!validateQuestions([quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7])) {
    alert("Please answer all the questions.");
    return;
  }

  // Process selected answers
  processSelectedAnswers(
    [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7],
    selectArray
  );

  // Calculate score
  count = calculateScore(selectArray, result);

  // Store the quiz result in session storage
  sessionStorage.setItem("quizResult", `${count}/${result.length}`);

  // Redirect to result page
  window.location.href = "../result/index.html";
});

function validateQuestions(questions) {
  for (let i = 0; i < questions.length; i++) {
    let answered = false;
    for (let j = 0; j < questions[i].length; j++) {
      if (questions[i][j].checked) {
        answered = true;
        break;
      }
    }
    if (!answered) {
      return false;
    }
  }
  return true;
}

function processSelectedAnswers(questions, selectArray) {
  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].length; j++) {
      if (questions[i][j].checked) {
        selectArray.push(questions[i][j].value);
        break;
      }
    }
  }
}

function calculateScore(selectArray, result) {
  let count = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === selectArray[i]) {
      count++;
    }
  }
  return count;
}

// Store user responses and correct answers in session storage
sessionStorage.setItem("selectedAnswers", JSON.stringify(selectArray));
sessionStorage.setItem("correctAnswers", JSON.stringify(result));
