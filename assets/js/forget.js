// hide nav bar
let menu = document.querySelector('#menu-bar i')
let navbar = document.querySelector('.top-nav, .menu-links')

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

let inputField = document.querySelector(".login-inputs input[type='email']")
// let EmailSent = document.querySelector(".Email-sent")
// let subButton = document.querySelector(".b")
let form = document.querySelector(".form-sub")

form.onsubmit = () => {
    alert(`We will send an email to \"${inputField.value}\" to reset password `);
}
