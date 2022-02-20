let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let cartProducts = document.querySelector(".Products");
let closeCart = document.querySelector("#close-cart");

let productsTitle = document.querySelectorAll(".product-title");
let productsPrice = document.querySelectorAll(".price");
let productslink = document.querySelectorAll(".p-link");

let productsAdd = document.querySelectorAll(".product-box i");


// add links to products
window.onload = () => {
    for(let l of productslink)
        l.setAttribute("href", "details.html");
}

// add items to cart
let cartBox = [];
for (let index in productsAdd) {
    productsAdd[index].onclick = () => {

        cart.classList.add("active");
        console.log("open");

        let h2Ele = document.createElement("h6")
        let pEle = document.createElement("p")
        let delEle = document.createElement("i")

        let h2EleText = document.createTextNode(productsTitle[index].textContent);
        let pEleText = document.createTextNode(productsPrice[index].textContent);
        pEle.setAttribute("class", "d-inline")
        delEle.setAttribute("class", "bx bxs-trash-alt cart-remove d-inline")

        h2Ele.appendChild(h2EleText)
        pEle.appendChild(pEleText)

        cartBox.push([h2Ele, pEle, delEle])
        console.log(cartBox)


        for (let arr of cartBox) {
            for (let ele of arr) {
                cartProducts.appendChild(ele)
            }
        }
        delEle.onclick = () => {
            console.log(cartBox)
            cartBox.splice(cartBox[index], 2)
            h2Ele.remove()
            pEle.remove()
            delEle.remove()
        }
    }
}

//OPen Cart
cartIcon.onclick = () => {
    cart.classList.toggle("active");
    console.log("open");
};

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    console.log("close");
};

// Cart Working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}

// Ready Function
function ready() {
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var index = 0; index < removeCartButtons.length; index++) {
        var button = removeCartButtons[index];
        button.addEventListener("click", removeCartItem);
    }
}

// Remove Item From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    //updatetotal();
}