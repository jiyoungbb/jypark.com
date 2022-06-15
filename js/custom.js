$(document).ready(function(){

    /* nav */
    $('.menu_btn').click(function(){
        $('.menu_btn, .menu_btn span, .nav').toggleClass('active')
    })
    $('section').click(function(){
        $('.menu_btn, .menu_btn span, .nav').removeClass('active')
    })

    /* */
    $(window).scroll(function(){
        if($(window).scrollTop() == 0) {
          $('.loading').removeClass('active')
        }
        else {
          $('.loading').addClass('active')
        }   
      })

      /* introduction */
      $(window).scroll(function(){
        if($(window).scrollTop() > 360) {
          $('.intro').addClass('active')
        }
        else {
          $('.intro').removeClass('active')
        }   
      })
})