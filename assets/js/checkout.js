$('.catogery-list').click(function(){
    $(this).addClass('catogery-list-active');
    $(this).siblings().removeClass('catogery-list-active');
})
