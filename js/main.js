$(document).ready(function(){
    new WOW().init();
    
    // MENU
    $('body').on('click', '.menu-icon', function(){
        $('#menu, #header').toggleClass('menu-in');
    });

    $('.work').click(function(e){
        $('.work-menu').addClass('sub-menu-in');
    });

    $('.contact').click(function(e){
        $('.contact-menu').addClass('sub-menu-in');
    });

    $('.back, .menu-icon').click(function(){
        $('.sub-menu').removeClass('sub-menu-in');
    });

    // ANCHOR
    var wTop = $(window).scrollTop();
    var wHeight = $(window).height()
    var docHeight = $(document).height();

    $(document).scroll(function(){
        wTop = $(window).scrollTop();
        wHeight = $(window).height()
        docHeight = $(document).height();
        if(wTop >= (docHeight - wHeight - 100)){
            $('.scroll-anchor').addClass('rotate').css('bottom', '140px');
        } else {
            $('.scroll-anchor').removeClass('rotate').css('bottom', '30px');
        }
    })

    $('.scroll-anchor').click(function(){
        wTop = $(window).scrollTop();
        wHeight = $(window).height()
        docHeight = $(document).height();

        if( wTop >= (docHeight - wHeight - 30) ){
            $("html, body").animate({ scrollTop: 0 });
        } else{
            $("html, body").animate({ scrollTop: (wTop + wHeight) });
        }
    })

    // BANER H1 ANIMATION

    var bannerH1Text = $('#banner h1').text();
    document.styleSheets[2].addRule('#banner .banner-content h1:after', 'content: "'+ bannerH1Text +'"');
    document.styleSheets[2].addRule('#banner .banner-content h1:before', 'content: "'+ bannerH1Text +'"');

    // IMG SLIDER

    $('.img-slider').each(function(index, element) {
        var slider = $(this);
        var next = $(this).parents('.slider-wrapper').find('.right');
        var prev = $(this).parents('.slider-wrapper').find('.left');
        slider.slick({
            slidesToShow: 3,
            nextArrow: next,
            prevArrow: prev,
            infinite: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                //   }
                // },
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        })
    });

    // FULLSCREEN SLIDER
    $('.img-slider').click(function(){
        $('.slick-fullscreen-close').html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>')
    })

    // SEND FORM TO SHEETS
    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbx7N-XBfzG4CK87-INgfhwH3-pCv9ppdhIRHkSeEI4UqXQ_ih1_/exec'

    $('#submit-form').on('click', function (e) {
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        }).success();
    })
})



