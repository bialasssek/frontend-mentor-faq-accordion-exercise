"use strict";

const question1Element = document.querySelector(".q1");
const question2Element = document.querySelector(".q2");
const question3Element = document.querySelector(".q3");
const question4Element = document.querySelector(".q4");
const iconBtn1 = document.querySelector(".icon1");
const iconBtn2 = document.querySelector(".icon2");
const iconBtn3 = document.querySelector(".icon3");
const iconBtn4 = document.querySelector(".icon4");
const answer1Element = document.querySelector(".a1");
const answer2Element = document.querySelector(".a2");
const answer3Element = document.querySelector(".a3");
const answer4Element = document.querySelector(".a4");

function displayAnswer(iconName, answerName) {
  if (iconName.src.includes("icon-plus.svg")) {
    iconName.src = "./assets/images/icon-minus.svg";
  } else {
    iconName.src = "./assets/images/icon-plus.svg";
  }

  if (answerName.classList.contains("hidden")) {
    answerName.classList.remove("hidden");
  } else {
    answerName.classList.add("hidden");
  }
}

for (let i = 1; i <= 4; i++) {
  const questionElement = document.querySelector(`.q${i}`);
  const iconBtn = document.querySelector(`.icon${i}`);
  const answerElement = document.querySelector(`.a${i}`);
  questionElement.addEventListener("click", function () {
    displayAnswer(iconBtn, answerElement);
  });
}
