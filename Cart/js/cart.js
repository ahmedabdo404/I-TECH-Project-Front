let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//OPen Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
    console.log("open");
};

//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
    console.log("close");
};

// Cart Working
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

// Ready Function
function ready(){
    //Remove Items From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var index = 0; index < removeCartButtons.length; index++) {
        var button = removeCartButtons[index];
        button.addEventListener("click",removeCartItem); 
    }

}
    
// Remove Item From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    //updatetotal();
}


       
