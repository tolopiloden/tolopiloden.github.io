let hoverCount = 0;
const maxHovers = 2;

const noButton = document.getElementById('no-button');

const phrases = [
  "Нет(",
  "Ты уверена?",
  "И последний шанс передумать!",
];

noButton.addEventListener('mouseenter', () => {
  hoverCount++;

  if (hoverCount <= maxHovers) {
    noButton.textContent = phrases[hoverCount] || "Нет(";

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  } 
  else {
    location.href = 'have-good-day.html';
  }
});

document.getElementById('yes-button1')
  .addEventListener('click', () => location = 'dinner.html');