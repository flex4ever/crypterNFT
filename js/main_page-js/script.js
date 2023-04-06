
    $('.main-slider-line').slick({
        Infinite: true,
        dots: false,
        autoplay: false,
        appendArrows: $('.descNft__arrows-group'),
        fade: true,
        speed: 1000
    })
const sellersBtn = document.querySelector('.pop-sellers__timeframe'),
    sellersWindow = document.querySelector('.pop-sellers__show-hide-block'),
    sellersContent = document.querySelectorAll('.pop-sellers__show-hide-text'),
    sellersContentBtn = document.getElementById('timeframeContent')
sellersBtn.addEventListener('click', ()=>{
    sellersWindow.classList.toggle('pop-sellers__show-hide-block_active')
})
sellersContent.forEach((el)=>{
    el.addEventListener('click', (elem)=>{
        sellersContent.forEach((el)=>{
            el.classList.remove('pop-sellers__show-hide-text_active')
        })
        sellersContentBtn.innerHTML = elem.target.outerText
        elem.target.classList.add('pop-sellers__show-hide-text_active')
        sellersWindow.classList.remove('pop-sellers__show-hide-block_active')
        
    })
})
$('.pop-sellers__slider-line').slick({
    slidesToShow: 5,
    infinite: false,
    centerPadding: '60px',
    adaptiveHeight: true,
    adaptiveHeight: true,
    slidesToScroll: 4,
});

