$(document).ready(function(){

    /* smooth scrolling */
    $('#home_btn, #about_btn, #skills_btn, #projects_btn, #pr_btn, #contact_btn').click(function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });


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