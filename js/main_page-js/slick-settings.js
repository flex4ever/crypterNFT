const privet = 'fggfgf'
$('.main-slider-line').slick({
    Infinite: true,
    appendArrows: $('.descNft__arrows-group'),
    fade: true,
    speed: 1000
})
$('.pop-sellers__slider-line').slick({
    slidesToShow: 5,
    infinite: false,
    centerPadding: '60px',
    adaptiveHeight: true,
    adaptiveHeight: true,
    slidesToScroll: 4,
});
$('.hot-bid-slider').slick({
    slidesToShow: 4,
    infinite: false,
    centerPadding: '60px',
    adaptiveHeight: true,
    adaptiveHeight: true,
    slidesToScroll: 4,
    appendArrows: $('.hot-bid__slider-buttons-block')
});
$('.hot-collections__card-block').slick({
    slidesToShow: 3,
})
