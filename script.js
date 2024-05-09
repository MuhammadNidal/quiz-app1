document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var rollNo = document.getElementById("rollNo").value;
    var name = document.getElementById("name").value;
    var batch = document.getElementById("batch").value;
    var section = document.getElementById("section").value;

    // Validate form data
    if (!rollNo || !name || !batch || !section) {
      alert("Please fill all the fields.");
      return;
    }

    // Store the form data in session storage
    sessionStorage.setItem("rollNo", rollNo);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("batch", batch);
    sessionStorage.setItem("section", section);

    // Redirect to the quiz page
    window.location.href = "./quiz-app-main/index.html";
  });
