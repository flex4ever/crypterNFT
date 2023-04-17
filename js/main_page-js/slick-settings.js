let page = 0
console.log(window)
// let sliderFunc = function (el) {
//     if ((el.currentTarget.outerWidth || window.screen.availWidth) <= 425) {
//         $('.latest-upload__creators-block').slick({
//             infinite: false,
//             slidesToShow: 4,
//             responsive: [
//                 {
//                     breakpoint: 1025,
//                     settings: {
//                         slidesToShow: 1.5,
//                     }
//                 }
//             ]
//         })
//     } else {
//         $('.latest-upload__creators-block').slick('unslick')
//     }
// }
// let wind =  window.addEventListener('resize', sliderFunc(el) )

$('.main-slider-line').slick({
    Infinite: true,
    appendArrows: $('.descNft__arrows-group'),
    fade: true,
    speed: 1000
})
$('.pop-sellers__slider-line').slick({
    slidesToShow: 5,
    infinite: false,
    adaptiveHeight: true,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                appendArrows: $('.pop-sellers__buttons-addaptive'),
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 426,
            settings: {
                appendArrows: $('.pop-sellers__buttons-addaptive'),
                slidesToShow: 1.5,
                slidesToScroll: 1
            }
        }
    ]
});

$('.latest-upload__creators-block').slick({
    infinite: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1981,
            settings: "unslick"
        },
        {
            breakpoint: 426,
            settings: {
                speed: 300,
                slidesToShow: 1.5,
            }
        }
    ]
})

$('.hot-bid-slider').slick({
    slidesToShow: 4,
    infinite: false,
    adaptiveHeight: true,
    adaptiveHeight: true,
    slidesToScroll: 4,
    appendArrows: $('.hot-bid__slider-buttons-block'),
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.hot-collections__card-block').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                appendArrows: $('.hot-collections__buttons-block-addaptive')
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: $('.hot-collections__btn-mobile')
            }
        }
    ]
})
$('.dicover__cards-block').slick({
    slidesToShow: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 2000,
            settings: "unslick"
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.15,
                slidesToScroll: 1,
                appendArrows: $('.discover-cards-slider-mobile_buttons')
            }
        }
    ]
})
