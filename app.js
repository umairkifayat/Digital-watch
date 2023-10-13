const start = document.querySelector('.start');
const stp = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const sec = document.querySelector('.min');
const min = document.querySelector('.sec');
const hr = document.querySelector('.hr');


// console.log(start);
// console.log(reset);
// console.log(stp);

let seconds = 0;
let minutes = 0;
let hour = 0;

let interval;
start.addEventListener('click' , ()=>{
    interval = setInterval(() => {
        seconds += 1;
        sec.innerHTML = seconds
        if (seconds===60) {
            seconds = 0;
            minutes+= 1
            min.innerHTML = minutes
        } 
        if(minutes === 60){
            minutes = 0;
            hour += 1;
            hr.innerHTML= hour
        }
    }, 1000);
    start.disabled = true
})

stp.addEventListener('click' , () =>{
    clearInterval(interval);
    start.disabled = false
})


reset.addEventListener('click' ,() =>{
    clearInterval(interval);
    seconds = 0
    sec.innerHTML = '00'

    minutes = 0;
    min.innerHTML = '00'
    hour = 0;
    hr.innerHTML = '00'
    start.disabled = false
})
