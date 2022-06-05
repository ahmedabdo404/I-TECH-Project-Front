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

let removeBtn = document.querySelectorAll(".product-remove")
let productsParent = document.querySelector("#products-Parent")
let cartItemsNumber = document.querySelector(".cartItemsNumber")
let totalPrice = document.querySelector(".total-price")
let dicount = document.querySelector(".dicount")

removeBtn.forEach(e => {
    e.onclick = () =>{
        e.parentElement.parentElement.remove()
        cartItemsNumber.innerText = cartItemsNumber.textContent - 1;
        let newPrice = totalPrice.textContent.replace("$", "")
        totalPrice.innerText = newPrice - 100 + "$";
        
        if(productsParent.children.length == 0)
            dicount.innerText = "0%"

    }
})