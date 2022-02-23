// hide nav bar
let menu = document.querySelector('#menu-bar i')
let navbar = document.querySelector('.top-nav')

menu.onclick = function () {
        menu.classList.toggle('fa-times')
        navbar.classList.toggle('active')
}

// back to top
let upBtn = document.querySelector(".back-top")

window.onscroll = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 400) {
                upBtn.style = ("opacity: 1;")
        } else {
                upBtn.style = ("opacity: 0;")
        }
}

upBtn.onclick = () => {
        scrollTo({ top: 0, behavior: "smooth" });
}

//
let caTitles = document.querySelectorAll("#ca-title span")
let caBody = document.querySelectorAll("#ca-body div")

console.log(caTitles)
console.log(caBody)

for (let index in caTitles) {
        caTitles[0].style.backgroundColor = "var(--third-color)"
        caTitles[index].onclick = () => {

                for (let i in caBody) {
                        caBody[i].setAttribute("hidden", "")
                        caTitles[i].style.backgroundColor = ""
                        caBody[index].removeAttribute("hidden")
                        caTitles[index].style.backgroundColor = "var(--third-color)"
                }

        }
}