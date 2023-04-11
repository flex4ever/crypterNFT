
const sellersBtn = document.querySelector('.pop-sellers__timeframe'),
    sellersWindow = document.querySelector('.pop-sellers__show-hide-block'),
    sellersContent = document.querySelectorAll('.pop-sellers__show-hide-text'),
    sellersContentBtn = document.getElementById('timeframeContent')
sellersBtn.addEventListener('click', () => {
    sellersWindow.classList.toggle('pop-sellers__show-hide-block_active')

})
dropDownList(sellersContent, 'pop-sellers__show-hide-text_active',
    'pop-sellers__show-hide-block_active', sellersContentBtn, sellersWindow)
    ////////////////////////////////////////////////
const recentlyBtn = document.getElementById('recetly-added-btn'),
    recentlyHideBlock = document.getElementById('recetly-added-hide-block'),
    recentlyTitle = document.getElementById('d-main__date'),
    recentlyText = document.querySelectorAll('.d-main__recently-added-text')

recentlyBtn.addEventListener('click', () => {
    recentlyHideBlock.classList.toggle('show-hide-block_active_height-recently')
})
dropDownList(recentlyText, 'show-hide-text_active', 'show-hide-block_active_height-recently',
    recentlyTitle, recentlyHideBlock)
    ////////////////////////////////////////
const priceBtn = document.getElementById('d-main__priceBtn'),
    priceHideBlock = document.getElementById('d-main__price-block'),
    priceTitle = document.getElementById('d-main__priceBtnContent'),
    priceText = document.querySelectorAll('.d-main__price-hide-text')
toggleClass(priceBtn, priceHideBlock, 'show-hide-block_active_height-price')
dropDownList(priceText, 'show-hide-text_active', 'show-hide-block_active_height-price', priceTitle, priceHideBlock)
    //////////////////////////////////////////  
const likesBtn = document.getElementById('d-main__LikesBtn'),
    likesHideBlock = document.getElementById('d-main__likes-hide-block'),
    likesTitle = document.getElementById('d-main__LikesContentBtn'),
    likesText = document.querySelectorAll('.d-main__likes-hide-text')
toggleClass(likesBtn, likesHideBlock, 'show-hide-block_active_height-price')
dropDownList(likesText, 'show-hide-text_active', 'show-hide-block_active_height-price', likesTitle, likesHideBlock)
    /////////////////////////////////////////////////

const creatorBtn = document.getElementById('d-main__creatorBtn'),
    creatorHideBlock = document.getElementById('d-main__creatorShowBlock'),
    creatorTitle = document.getElementById('d-main__creatorContentBtn'),
    creatorText = document.querySelectorAll('.d-main__creator-drop-list-btn-txt')

toggleClass(creatorBtn, creatorHideBlock, 'show-hide-block_active_height-price')
dropDownList(creatorText, 'show-hide-text_active', 'show-hide-block_active_height-price', creatorTitle, creatorHideBlock)
    /////////////////////////////////////////////////

const inputRange = document.querySelector('.d-main__input-block-input'),
    inputWindow = document.querySelector('.d-main__input-block-input-num')
inputRange.addEventListener('input', function(){
    console.log(this.value)
    inputWindow.style.left = this.value * 22 + 'px'
    inputWindow.innerHTML = this.value

})
////////////////////////////////////////////////////
const categoriesBtn = document.getElementById('AllItems-added-btn'),
    categoriesHideBlock = document.getElementById('AllItems-added-hide-block'),
    categoriesTitle = document.getElementById('AllItems__item'),
    categoriesText = document.querySelectorAll('.d-main__AllItems-added-text')

toggleClass(categoriesBtn, categoriesHideBlock, 'show-hide-block_active_height-price')
dropDownList(categoriesText, 'show-hide-text_active', 'show-hide-block_active_height-price', categoriesTitle, categoriesHideBlock)
////////////////////////////////////////////////////
const filtresBlock = document.querySelector('.d-main__filtres-block'),
    filtresBtn = document.querySelector('.d-main__filter-btn'),
    borderBlockBtn = document.querySelector('.d-main__main-buttons')
    cardsBlockDiscover = document.querySelector('.dicover__cards-block')
filtresBtn.addEventListener('click', ()=>{
    filtresBlock.classList.toggle('d-main__filtres-block_active')
    borderBlockBtn.classList.toggle('d-main__main-buttons_active')
    cardsBlockDiscover.classList.toggle('dicover__cards-block_active-margin')
    console.log('dfgfgd')
})






function dropDownList(array, classAdd, classRemove, elementOne, elementTwo) {
    array.forEach((el) => {
        el.addEventListener('click', (elem) => {
            array.forEach((el) => {
                el.classList.remove(classAdd)
            })
            elementOne.innerHTML = elem.target.outerText
            elem.target.classList.add(classAdd)
            elementTwo.classList.remove(classRemove)

        })
    })
}
function toggleClass(btn, blockToggle, toggleClass) {
    btn.addEventListener('click', () => {
        blockToggle.classList.toggle(toggleClass)
    })
}




