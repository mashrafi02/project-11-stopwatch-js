// well the problem with the first stop watch programme was it stops automatically; if we are on another tab instead of our stop watch programme tab or minimize the browser. because this is the behaviour of the setInterval function. So we have to deal it with the date object

const hour = document.querySelector('.hour span')
const minute = document.querySelector('.minute span')
const second = document.querySelector('.second span')
const milisecond = document.querySelector('.milisecond span')

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')


let timer = null;
let startTime = 0;
let elapesedTime = 0;
let isRunning = false; // ensuring the watch is off by default


startBtn.onclick = () => {
    startBtn.style.display = 'none'
    resetBtn.style.display = 'inline-block'
    stopBtn.style.display = 'inline-block'

    if(!isRunning){
        startTime = Date.now() - elapesedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

stopBtn.onclick = () => {
    clearInterval(timer)
    isRunning = false
    stopBtn.style.display = 'none'
    startBtn.style.display = "inline-block"
    resetBtn.style.display = 'inline-block'
}

resetBtn.onclick = () => {
    resetBtn.style.display = 'none'
    stopBtn.style.display = 'none'
    startBtn.style.display = "inline-block"

    clearInterval(timer)
    startTime = 0;
    elapesedTime = 0;
    isRunning =false;

    milisecond.textContent = '00'
    second.textContent = '00'
    minute.textContent = '00'
    hour.textContent = '00'
}

function update() {
    elapesedTime = Date.now() - startTime

    let hourstw = Math.floor(elapesedTime/(1000*60*60));
    let minutestw = Math.floor((elapesedTime/(1000*60)) % 60) 
    let secondstw = Math.floor((elapesedTime/1000) % 60) 
    let milisecondstw = Math.floor((elapesedTime%1000) / 10)
    
    hour.textContent = hourstw.toString().padStart(2,0)
    minute.textContent = minutestw.toString().padStart(2,0)
    second.textContent = secondstw.toString().padStart(2,0)
    milisecond.textContent = milisecondstw.toString().padStart(2,0)
}

