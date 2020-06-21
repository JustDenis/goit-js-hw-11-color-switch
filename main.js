const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerID = null;

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', handleStartClick);
refs.stop.addEventListener('click', handleStopClick);

function handleStartClick() {
    refs.start.disabled = true;
    timerId = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[randomIndex];
    },1000);
}

function handleStopClick() {
    refs.start.disabled = false;
    clearInterval(timerId);
}