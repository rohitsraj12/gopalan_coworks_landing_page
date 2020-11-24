$(document).ready(function(){
    // hamberger mobile navigation
    $("#hamberger").click(function(){
        $("#header-nav").slideToggle();
    })

    
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
      
          if (scroll >= 200) {
              $(".header").addClass("header-fixed");
          } else {
              $(".header").removeClass("header-fixed");
          }
      });


    // const mq = window.matchMedia( "(min-width: 768px)" );

    // if (mq.matches) {
    // // window width is at least 768px
    //     $(window).scroll(function () {
    //         var height = $(window).height();
    //         if ($(window).scrollTop() > height) {
    //             $('.body__header').addClass('slider__header').fadeIn(700);
    //         } else {
    //             $('.body__header').removeClass('slider__header').fadeOut(700);
    //         }
    //     });
    // } else {
    // // window width is less than 500px
    //     $('.body__header').removeClass('slider__header');
    // }


    // $("#toggle-form").click(function(){
    //     $("#form__wrap").fadeToggle();
    // })

    // tab section
    // $(".tab__btn").click(function() {
    //     var selectAtt = $(this).attr("data-tab");
    
    //     $(".tab__btn").removeClass("active__tab");
    //     $(this).addClass("active__tab");
    
    //     $(".tab__list").hide();
    //     $("#" + selectAtt).fadeIn();
    // });

    $(".close").click(function(){
        $(".modal").fadeOut(400);
        $(".form__wrap").fadeOut(400);
    });

    $(".show__phone").click(function(){
        $(".modal").fadeIn(400);
    });


})