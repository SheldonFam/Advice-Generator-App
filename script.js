const advice = document.getElementById("advice_text");
const adviceNum = document.getElementById("adviceNum");
const button = document.getElementById("btn");
const URL = "https://api.adviceslip.com/advice";

async function getApi(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  const adviceslip = data.slip.advice;
  const num = data.slip.id;
  advice.innerText = ` “${adviceslip}” `;
  adviceNum.innerText = "Advice " + " #" + `${num}`;
}

getApi(URL);

button.addEventListener("click", function () {
  getApi(URL);
});
