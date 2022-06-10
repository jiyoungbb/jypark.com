$(document).ready(function(){

    /* nav */
    $('.menu_btn').click(function(){
        $('.menu_btn, .menu_btn span, .nav').toggleClass('active')
    })
    $('section').click(function(){
        $('.menu_btn, .menu_btn span, .nav').removeClass('active')
    })
})