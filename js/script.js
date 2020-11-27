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

    
    // scroll down fixed body header 
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
      
          if (scroll >= 200) {
              $("#body__header").addClass("header-fixed");
          } else {
              $("#body__header").removeClass("header-fixed");
          }
      });

      
    $(".close").click(function(){
        $(".modal").fadeOut(400);
        $(".form__wrap").fadeOut(400);
    });

    $(".show__phone").click(function(){
        $(".modal").fadeIn(400);
    });



  // owl slider
    var $owl = $('.section__location .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });

    
    var $owl = $('.section__testimonial .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      // center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000000,
      // autoplayHoverPause: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });

    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });
})