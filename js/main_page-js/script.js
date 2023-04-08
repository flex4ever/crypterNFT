
const sellersBtn = document.querySelector('.pop-sellers__timeframe'),
    sellersWindow = document.querySelector('.pop-sellers__show-hide-block'),
    sellersContent = document.querySelectorAll('.pop-sellers__show-hide-text'),
    sellersContentBtn = document.getElementById('timeframeContent')



sellersBtn.addEventListener('click', () => {
    sellersWindow.classList.toggle('pop-sellers__show-hide-block_active')

})
dropDownList(sellersContent, 'pop-sellers__show-hide-text_active',
 'pop-sellers__show-hide-block_active', sellersContentBtn, sellersWindow)

const recentlyBtn = document.getElementById('recetly-added-btn'),
    recentlyHideBlock = document.getElementById('recetly-added-hide-block'),
    recentlyTitle = document.getElementById('d-main__date'),
    recentlyText = document.querySelectorAll('.d-main__recently-added-text')

recentlyBtn.addEventListener('click', () => {
    recentlyHideBlock.classList.toggle('show-hide-block_active_height-recently')
})
dropDownList(recentlyText, 'show-hide-text_active','show-hide-block_active_height-recently',
 recentlyTitle, recentlyHideBlock )
    

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




