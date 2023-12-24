const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');
const hundredthsSecondSpan = document.querySelector('.hundredths-second');

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let interval = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

function startTimer() {
    miliseconds++

    if(miliseconds <= 99) {
        hundredthsSecondSpan.innerHTML = miliseconds;
    }

    if(miliseconds == 100) {
        hundredthsSecondSpan.innerHTML = '00';
    }

    if(miliseconds > 99) {
        seconds++;
        secondsSpan.innerHTML = '0' + seconds;
        miliseconds = 0;
    }

    if(seconds > 9) {
        secondsSpan.innerHTML = seconds;
    }

    if(seconds > 59) {
        minutes++;
        minutesSpan.innerHTML = '0' + minutes;
        seconds = 0;
        secondsSpan.innerHTML = '0' + seconds;
    }

    if(minutes > 9) {
        minutesSpan.innerHTML = minutes;
    }
}

btnStart.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', function() {
    clearInterval(interval);
})

btnReset.addEventListener('click', function() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesSpan.innerHTML = '00';
    secondsSpan.innerHTML = '00';
    hundredthsSecondSpan.innerHTML = '00';
})