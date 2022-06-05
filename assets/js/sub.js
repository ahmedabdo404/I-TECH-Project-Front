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

// filter products depending on url
let filterAll = document.querySelector("button[data-filter='*']")
let filterMobiles = document.querySelector("button[data-filter='.mobiles']")
let filterLaptops = document.querySelector("button[data-filter='.Laptops']")
let filterAccessories = document.querySelector("button[data-filter='.accessories']")

let pageUrl = window.location.href.toLowerCase();

$(function () {
    console.log("onload")
    if (pageUrl.includes("mobiles")) {
        filterMobiles.click()
        console.log("mobiles")
    }
    else if (pageUrl.includes("laptops")) {
        filterLaptops.click()
        console.log("laptops")
    }
    else if (pageUrl.includes("accessories")) {
        filterAccessories.click()
        console.log("accessories")
    }
    else
        filterAll.click()
});

// add links to products dynamicly

let productslink = document.querySelectorAll(".p-link");
window.onload = () => {
    for (let l of productslink)
        //l.setAttribute("asp-action", "details");
        l.setAttribute("href", "details.html");
}

$('.catogery-list').click(function () {
    $(this).addClass('catogery-list-active');
    $(this).siblings().removeClass('catogery-list-active');
})


// Filters
let filterbtn = document.querySelector(".filterbtn");
let filter = document.querySelector(".filter");
let closeFilter = document.querySelector("#close-f");


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
$('.filter-button-group, .other-filter-group').on('click', 'button, li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// filter by Price
let productPrice = document.querySelectorAll(".product-box .price")
let productBox = document.querySelectorAll(".product-box")

for (let i = 0; i < productBox.length; i++) {
    let pPrice = parseInt(productPrice[i].textContent.replace("$", ""))

    if (pPrice >= 0 && pPrice < 100)
        productBox[i].classList.add("from-0to100");

    else if (pPrice >= 100 && pPrice < 500)
        productBox[i].classList.add("from-100to500")

    else if (pPrice >= 500 && pPrice < 1000)
        productBox[i].classList.add("from-500to1000")

    else if (pPrice >= 1000 && pPrice < 5000)
        productBox[i].classList.add("from-1000to5000")

    else if (pPrice >= 5000 && pPrice < 15000)
        productBox[i].classList.add("from-5000to15000")
    else
        productBox[i].classList.add("More-than15000")
}


// filter by Brnad
let modelBrand = document.querySelectorAll(".Model-Brand")

for (let i = 0; i < productBox.length; i++) {
    let pBrand = modelBrand[i].textContent.toLowerCase();

    switch (pBrand) {
        case "hp":
            productBox[i].classList.add("Hp");
            break;
        case "dell":
            productBox[i].classList.add("Dell");
            break;
        case "mac":
            productBox[i].classList.add("Mac");
            break;
        case "acer":
            productBox[i].classList.add("Acer");
            break;
        case "samsung":
            productBox[i].classList.add("Samsung");
            break;
        case "huawei":
            productBox[i].classList.add("Huawei");
            break;
        case "iphone":
            productBox[i].classList.add("IPhone");
            break;
        case "oppo":
            productBox[i].classList.add("Oppo");
            break;
        case "realme":
            productBox[i].classList.add("Realme");
            break;
        case "xiaomi":
            productBox[i].classList.add("xiaomi");
            break;
    }
}