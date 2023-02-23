"use strict";

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".choose");
var elSubmit = document.querySelector(".submit");
var elresult = document.querySelector(".result");
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var result = elInput.value;

  if (elInput.value == 1) {
    elresult.textContent = "Monday";
  } else if (elInput.value == 2) {
    elresult.textContent = "Tuesday";
  } else if (elInput.value == 3) {
    elresult.textContent = "Wednesday";
  } else if (elInput.value == 4) {
    elresult.textContent = "Thursday";
  } else if (elInput.value == 5) {
    elresult.textContent = "Friday";
  } else if (elInput.value == 6) {
    elresult.textContent = "Sunday";
  } else if (elInput.value == 7) {
    elresult.textContent = "Saturday";
  } else {
    elresult.textContent = "Sanashni bilasizmi?";
  }
});