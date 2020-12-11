

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secondDegree = ((sec / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getMinutes();
  const hourDegree = ((min / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
