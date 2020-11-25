$(document).ready(function(){
    // hamberger mobile navigation
    $("#hamberger").click(function(){
        $("#header-nav").slideToggle();
    })

    var wrap = $("#body-header");

    wrap.on("scroll", function(e) {
    
      if (this.scrollTop > 200) {
        wrap.addClass("fix-search");
      } else {
        wrap.removeClass("fix-search");
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



    var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 3,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true
});

$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});
})