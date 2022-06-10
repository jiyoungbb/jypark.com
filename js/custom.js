$(document).ready(function(){

    /* nav */
    $('.menu_btn').click(function(){
        $(this).toggleClass('active')
        $('.menu_btn span, .nav').toggleClass('active')
    })
})