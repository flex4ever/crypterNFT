
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
    responsive:[
        {
            breakpoint: 1025,
            settings:{
                appendArrows: $('.pop-sellers__buttons-addaptive'),
                slidesToShow: 4,
            }
        }
    ]
});
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
        }
    ]
})
