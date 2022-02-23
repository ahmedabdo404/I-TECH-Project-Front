let productslink = document.querySelectorAll(".p-link");

// add links to products
window.onload = () => {
    for(let l of productslink)
        //l.setAttribute("asp-action", "details");
        l.setAttribute("href", "details.html");
}

$('.catogery-list').click(function () {
    $(this).addClass('catogery-list-active');
    $(this).siblings().removeClass('catogery-list-active');
})


let filterbtn = document.querySelector(".filterbtn");
let filter = document.querySelector(".filter");
let closeFilter = document.querySelector("#close-filter");


//Open Filter
filterbtn.onclick = () => {
    filter.classList.toggle("active");
    console.log("open");
};

//Close Filter
closeFilter.onclick = () => {
    filter.classList.remove("active");
    console.log("close");
};