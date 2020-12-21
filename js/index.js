const hourPointer = document.getElementById('pointer-hour');
const minutePointer = document.getElementById('pointer-minute');
const secondPointer = document.getElementById('pointer-second');

setInterval(() => {
  const now = new Date();
  hourPointer.style.transform = `translate(-50%, -25%) rotate(${(now.getHours() * 30) + (now.getMinutes() * 0.5)}deg)`;
  minutePointer.style.transform = `translate(-50%, -25%) rotate(${6 * now.getMinutes()}deg)`;
  secondPointer.style.transform = `translate(-50%, -25%) rotate(${6 * now.getSeconds()}deg)`;
}, 1000);