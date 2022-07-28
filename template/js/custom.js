$(function(){

    'use strict';

    // Carousel Header
    $('.owl-header').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        tlr:true,
        nav:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        stagePadding:30,
        // smartSpeed:450,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });


    // Carousel Product
    $('.owl-product').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        tlr:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    // Carousel Product
    $('.owl-offers').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        tlr:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    // Carousel owl-otherProdect
    $('.owl-otherProdect').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        tlr:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    // Toggle Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
    //Toggle Fixed Header
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 148) {
            $('.group-fixed').addClass('fixed-header');
        }
        else {
            $('.group-fixed').removeClass('fixed-header');
        }
    });

    // Show And Hidden Button Scroll Top
    $('body').append("<div class='go-top'><i class='fas fa-angle-double-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600)
            $('.go-top').addClass('active');
        if (scrolled < 600)
            $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 50);
    });

    // Toggle Cart
    $('.button-cart').click(function(e){
        e.preventDefault();
        $('.box-cart').fadeIn(1000);
    });

    $(document).mouseup(function(e){
        if($(e.target).closest('.box-cart').length === 0){
            $('.box-cart').hide();
        }
    });

    // Rating 
    $('.clickRate li').click(function(){
        $('.clickRate li').removeClass('fillStar');
        var $i = 0;
        for ($i = 0; $i <= $('.clickRate li').index(this) ; $i++) {
            $('.clickRate li').eq($i).addClass('fillStar');
        }
    });

    // Toggle Input Pluse And Minus
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    // PlaY owl-imgs In Section owl-imgs
    $('.owl-imgs .thumbnails img').on('click', function () {
        $('.owl-imgs .master-img img').hide().attr('src' , $(this).attr('src')).fadeIn(500);
    });

   
});