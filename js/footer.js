const pageOne = document.querySelectorAll('.footer__list1__show-element'),
    pageTwo = document.querySelectorAll('.footer__list2__show-element'),
    showList1 = document.getElementById('accordion-btn-footer-list1'),
    showList2 = document.getElementById('accordion-btn-footer-list2');
showList1.addEventListener('click', () => {
    pageOne.forEach((element) => {
        element.classList.toggle('footer__list__show-element-active')

    })
})
showList2.addEventListener('click', () => {
    pageTwo.forEach((element) => {
        element.classList.toggle('footer__list__show-element-active')

    })
})