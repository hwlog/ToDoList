const clock = document.querySelector('.clock');


clock.innerText = "뭘바!";

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clock.innerText = `${hours < 10 ? `0${hours}` : hours} : ${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();