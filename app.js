// with window onload we can fetch the functions
window.onload = () =>{                
    document.querySelector('#calculate').onclick = calculate;    //document.querySelector we can fetch the domain element
    document.querySelector('#reset').onclick = reset; 
}

function calculate() {
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const stop = document.querySelector("#stop");
    
    const endTime = new Date(date + " " + time); // to end the timer

    // setInterval is used to run code in every second and executes it, mostly in clocks
    const interval = setInterval(()=> calculateTime(endTime), 1000) // 1000 ms, every 1 sec 

    stop.addEventListener("click", () => {
        clearInterval(interval);

    })
}

function calculateTime(endTime){
    const currentTime = new Date();  // it gives the current time to cal remaintime=curtime -eventtime

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');


    if (endTime > currentTime){
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft);    
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));           // innertext used to set the text in h1 like setting text of days
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24); 
        minutes.innerText = Math.floor((timeLeft / 60) % 60); 
        seconds.innerText = Math.floor(timeLeft % 60); 
    }  else {
        days.innerText = 0          
        hours.innerText = 0 
        minutes.innerText = 0
        seconds.innerText = 0

    }
}

function reset(){
    document.querySelector('#countdown-days').innerText =0 ;
    document.querySelector('#countdown-hours').innerText =0;
    document.querySelector('#countdown-minutes').innerText =0;
    document.querySelector('#countdown-seconds').innerText =0;

}