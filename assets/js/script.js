// hide nav bar
let menu = document.querySelector('#menu-bar i')
let navbar = document.querySelector('.top-nav')

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

// countdown timer
let daysDiv = document.querySelector(".days")
let hoursDiv = document.querySelector(".Hours")
let minutesDiv = document.querySelector(".Minutes")
let secondsDiv = document.querySelector(".Seconds")

let timer = new Date("Mar 1, 2022 00:00:00").getTime();
// console.log(timer)

let counter = setInterval(() => {
    let datenow = new Date().getTime()
    let diff = timer - datenow;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((diff % (1000 * 60)/ (1000)))
    
    // console.log(days)
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    daysDiv.innerHTML = `<h2>${days}</h2><p>days</p>`
    hoursDiv.innerHTML = `<h2>${hours}</h2><p>hours</p>`
    minutesDiv.innerHTML = `<h2>${minutes}</h2><p>minutes</p>`
    secondsDiv.innerHTML = `<h2>${seconds}</h2><p>seconds</p>`

    if (diff <= 0){
        clearInterval(counter)
        alert("Offer has been ended")
    }
}, 1000)

//animation
var options = {
    strings: ['All Tech ... in one place'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    showCursor:false,
    backSpeed: 100
};
var typed = new Typed('.element', options);

// back to top
let upBtn = document.querySelector(".back-top")

window.onscroll = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 600){
        upBtn.style = ("opacity: 1;")
    }else{
        upBtn.style = ("opacity: 0;")
    }
}

upBtn.onclick = () =>{
    scrollTo({ top: 0, behavior: "smooth"});
}
