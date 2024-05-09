// Retrieve student details and quiz result from sessionStorage
var rollNo = sessionStorage.getItem("rollNo");
var name = sessionStorage.getItem("name");
var batch = sessionStorage.getItem("batch");
var section = sessionStorage.getItem("section");
var totalMarks = sessionStorage.getItem("quizResult");

// Display student details and quiz result
document.getElementById("roll-no").textContent = rollNo;
document.getElementById("name").textContent = name;
document.getElementById("batch").textContent = batch;
document.getElementById("section").textContent = section;
document.getElementById("total-marks").textContent = totalMarks;
