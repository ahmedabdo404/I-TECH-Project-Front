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

// add links to products
let productslink = document.querySelectorAll(".p-link");

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

// filters
var $grid = $('#product-list').isotope({
    // options
});
  // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});