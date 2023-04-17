"use strict"
////////////////////////////////////////////////////////////////////
const nftPageButtons = document.querySelectorAll('.nftPage__info-tabs-button'),
    tabsBlock = document.querySelectorAll('.nftPage__info-tab')

tabsButtonsClass(nftPageButtons, 'nftPage__info-tabs-button_active')
nftPageButtons.forEach((el) => {
    el.addEventListener('click', (el) => {
        tabsBlock.forEach((el) => {
            el.classList.remove('nftPage__info-tab_active')
        })
        switch (el.target.dataset.btn) {
            case '1':
                tabsBlock[0].classList.add('nftPage__info-tab_active')
                break
            case '2':
                tabsBlock[1].classList.add('nftPage__info-tab_active')
                break
            case '3':
                tabsBlock[2].classList.add('nftPage__info-tab_active')
                break
            case '4':
                tabsBlock[3].classList.add('nftPage__info-tab_active')
                break

        }
    })
})
///////////////////////////////////////////////////////////////
const modalOverlay = document.querySelector('.nftModalWrap'),
    modalBlock = document.querySelector('.nftModal'),
    modalCircle = document.querySelector('.nftModal__title-btn'),
    modalTitle1 = document.getElementById('textPage-one'),
    modalTitle2 = document.getElementById('textPage-two'),
    modalOpenBtn = document.getElementById('ModalOpenBtn')
let modal3Timeout
modalBlock.addEventListener('click', (el) => {
    console.log(el)
})
modalBlock.children[6].children[0].addEventListener('click', () => {
    modalTitle1.classList.add('disp-n_active')
    modalTitle2.classList.remove('disp-n_active')
    modalTitle2.classList.add('disp-b_active')
    modalBlock.children[3].classList.add('disp-n_active')
    modalBlock.children[2].classList.add('disp-f_active')
    modalBlock.children[4].classList.add('disp-n_active')
    modal3Timeout = setTimeout(viewModalPage3, 3000)
    modalBlock.children[0].children[1].classList.remove('disp-n_active');
    modalBlock.children[0].children[1].classList.add('disp-b_active');

})

modalOpenBtn.addEventListener('click', ()=>{
    modalOverlay.classList.add('nftModalWrap_active')
})
modalCircle.addEventListener('click', modalToDefalut)
modalBlock.children[6].children[1].addEventListener('click', modalToDefalut)

///////////////////////////////////////////////////////

function viewModalPage3() {
    for (let i = 0; modalBlock.children.length > i; i++) {
        console.log(i)
        console.log(modalBlock.children[i])
        modalBlock.children[i].classList.remove('disp-n_active');
        modalBlock.children[i].classList.remove('disp-f_active');
        modalBlock.children[i].classList.add('disp-n_active');
    }
    modalBlock.children[0].classList.remove('disp-n_active');
    modalBlock.children[0].classList.add('nftModal__title-btn_flexEnd');
    modalBlock.children[0].children[1].classList.remove('disp-b_active');
    modalBlock.children[0].children[1].classList.add('disp-n_active');
    modalBlock.children[1].classList.remove('disp-n_active');
    modalBlock.children[1].classList.add('disp-f_active')
}

function modalToDefalut() {
    for (let i = 0; modalBlock.children.length > i; i++) {
        console.log(i)
        console.log(modalBlock.children[i])
        modalBlock.children[i].classList.remove('disp-n_active');
        modalBlock.children[i].classList.remove('disp-f_active')
        modalBlock.children[0].children[1].classList.remove('disp-b_active');
        modalBlock.children[0].children[1].classList.add('disp-n_active');
    }
    modalBlock.children[0].children[0].classList.add('disp-b_active');
    modalBlock.children[0].children[0].classList.remove('disp-n_active');
    modalBlock.children[0].classList.remove('nftModal__title-btn_flexEnd');
    clearTimeout(modal3Timeout)
    modalOverlay.classList.remove('nftModalWrap_active')

}

function tabsButtonsClass(buttonsArray, activeClass) {
    buttonsArray.forEach((el) => {
        el.addEventListener('click', (elem) => {
            buttonsArray.forEach((el) => {
                el.classList.remove(activeClass)
            })
            elem.target.classList.add(activeClass)
        })
    })
};