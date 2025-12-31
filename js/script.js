const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const yearEl = document.getElementById("year");

const endBtn = document.querySelector("button");

const year = new Date().getFullYear();

yearEl.textContent = year;

let endAnimation = false;

endBtn.onclick = () => {
  endAnimation = true;
  document.body.classList.remove("active");
  endBtn.style.display = "none";
};

const getNextNewYear = () => {
  const currentYear = new Date().getFullYear();
  return new Date(`January 01, ${currentYear + 1} 00:00:00`);
};

const countDown = () => {
  const newYear = getNextNewYear();
  const now = new Date();
  const gap = newYear - now;

  if (gap <= 0) {
    if (!endAnimation) {
      document.body.classList.add("active");
      endBtn.style.display = "block";
    }
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysEl.textContent = Math.floor(gap / day);
  hoursEl.textContent = Math.floor((gap % day) / hour);
  minutesEl.textContent = Math.floor((gap % hour) / minute);
  secondsEl.textContent = Math.floor((gap % minute) / second);
};

setInterval(countDown, 1000);
