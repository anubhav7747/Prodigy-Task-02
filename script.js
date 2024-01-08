const timerElement = document.querySelector('h1');

const startElement = document.getElementById('start');
const stopElement = document.getElementById('stop');
const resetElement = document.getElementById('reset');


let startTime = 0
let elapsedTime = 0
let timerInterval;


startTimer = () => {
    // console.log("startTimer");
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerElement.textContent = formatTime(elapsedTime);
    }, 10);

    startElement.disabled = true;
    stopElement.disabled = false;
}


formatTime = (elapsedTime) => {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return ( 
        (hours ? (hours > 9 ? hours :    "0" + hours) : "00") + "." + 
        (minutes ? (minutes > 9 ? minutes :    "0" + minutes) : "00") + "." + 
        (seconds ? (seconds > 9 ? seconds :    "0" + seconds) : "00") + "." + 
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}


stopTimer = () => {
    // console.log("stopTimer");
    clearInterval(timerInterval);
    stopElement.disabled = true;
    startElement.disabled = false;
}

resetTimer = () => {
    // console.log("resetTimer");
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerElement.textContent = "00:00:00";

    stopElement.disabled = false;
    startElement.disabled = false;
}


startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
