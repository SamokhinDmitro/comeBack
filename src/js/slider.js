/*Slick Slider*/


$(document).ready(function(){

    //Owl-Carousel
    $(".owl-carousel").owlCarousel({
        loop:true,
        //margin:10,
        nav:true,
        items: 1,
        autoplay:true,
        autoplayTimeout: 5000
    });

    //Slick Slider

    //Services Slider
    $('.services-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    //arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    //arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    //arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });

    //Features Slider
    $('.features-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        //adaptiveHeight: true,
        //slidesPerRow: 1,
        //rows: 1,

        //mobileFirst: true,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',

        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots slick__dots'
                }
            }
        ],
        autoplay: true,
        autoplaySpeed: 2000
    });



    //Feedback Slider
    $('.feedback-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });

    //Portfolio Slider
    $('.portfolio-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });


    //Example Slider
    $('.example-slider').slick({
        infinite: true,
        focusOnSelect: true,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev example-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next example-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',

        autoplay: true,
        autoplaySpeed: 2000
    });

    //Team Slider
    $('.team-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });

    /*Rates-Page*/

    //Rate Slider
    $('.rate-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dots: false,
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });


    //Plan Slider
    $('.plan-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });

    //Including Slider
    $('.including-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slider-button slider-button__prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-button slider-button__next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slick-dots slick__dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }
        ],

        autoplay: true,
        autoplaySpeed: 2000
    });

});
