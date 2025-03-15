const hour = document.querySelector('.hour span')
const minute = document.querySelector('.minute span')
const second = document.querySelector('.second span')
const milisecond = document.querySelector('.milisecond span')

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

let stopWatchID;
let ms = 0;
let count = 0;
let min = 0;
let hr = 0;


start.onclick = () => {
    start.style.display = 'none'
    reset.style.display = 'inline-block'
    stop.style.display = 'inline-block'

    stopWatchID = setInterval(()=>{
        ms += 10;

        if (ms === 1000) { 
            ms = 0;
            count++; 
        }

        if (count === 60) {
            count = 0;
            min++;
        }

        if (min === 60) {
            min = 0;
            hr++;
        }

        milisecond.textContent = String(ms).padStart(2, '0');
        second.textContent = String(count).padStart(2, '0');
        minute.textContent = String(min).padStart(2, '0');
        hour.textContent = String(hr).padStart(2, '0');

    },10)
}

stop.onclick = () => {
    clearInterval(stopWatchID)
    stop.style.display = 'none'
    start.style.display = "inline-block"
    reset.style.display = 'inline-block'
}

reset.onclick = () => {
    reset.style.display = 'none'

    ms = 0;
    count = 0;
    min = 0;
    hr = 0;

    milisecond.textContent = '000'
    second.textContent = '00'
    minute.textContent = '00'
    hour.textContent = '00'
}