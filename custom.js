
$(function() {

    "use strict" ;

    // Header Height

    $(".header").height ( $(window).height () );

    $(window).resize (function () {

        $(".header").height ( $(window).height () );
   
    });

    // Li Add Active Class

    $("ul li a").click ( function () {

        $(this).parent().addClass ("active").siblings().removeClass("active") ;

    });

    // Smoth Scroll To Div

    $("ul li a").click( function () {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("value") ).offset().top

        }, 1200);

    });

    // Our Slider Code 

    (function autoSlider() {

        $(".slider .active").each(function () {
            
            if (!$(this).is (":last-child")) {
            
                $(this).delay(3000).fadeOut(1000, function (){

                    $(this).removeClass("active").next().addClass("active").fadeIn();

                    autoSlider();

                });
                
            } else {

                $(this).delay(3000).fadeOut(1000, function() {

                    $(this).removeClass("active") ;

                    $(".slider div").eq(0).addClass("active").fadeIn();

                    autoSlider();

                });

            }

        });

    }());

    // Project (Opacity)

    $('.port ul .mobile').click (function(){

        $('.port .row .art').css({

            opacity: ".25"

        });

        $('.port .row .coffee').css({

            opacity: ".25"

        });

        $('.port .row .mobile').css({

            opacity: "1"

        });

    });   

    
    $('.port ul .art').click (function(){

        $('.port .row .coffee').css({

            opacity: ".25"

        });

        $('.port .row .mobile').css({

            opacity: ".25"

        });

        $('.port .row .art').css({

            opacity: "1"

        });

    });   

    
    $('.port ul .coffee').click (function(){

        $('.port .row .mobile').css({

            opacity: ".25"

        });

        $('.port .row .art').css({

            opacity: ".25"

        });

        $('.port .row .coffee').css({

            opacity: "1"

        });

    });   

    $('.port ul .all').click (function(){

        $('.port .row .mobile').css({

            opacity: "1"

        });

        $('.port .row .art').css({

            opacity: "1"

        });

        $('.port .row .coffee').css({

            opacity: "1"

        });

    });  


    $('.port ul li').click (function (){

        $(this).addClass('active').siblings().removeClass('active');

    });












});