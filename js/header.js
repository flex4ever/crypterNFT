window.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-menu'),
        navBtnLineUp = document.getElementById('nav-menu__lineUp'),
        navBtnLineDown = document.getElementById('nav-menu__lineDown'),
        navModal = document.querySelector('.modal-nav'),
        notificationBtn = document.querySelector('.other-block__notification'),
        notificationModal = document.querySelector('.notifications'),
        notificationModalWrapper = document.querySelector('.notifications-wrapper'),
        body = document.querySelector('body')
    let linePage = 0

    notificationBtn.addEventListener('click', (el) => {
        notificationModal.classList.toggle('notifcations_active')

    })
    navBtn.addEventListener('click', () => {
        linePage++
        console.log(linePage)
        if (linePage == 1) {
            navModal.classList.add('modal-nav_active')         
            navBtnLineUp.style.animation = "0.3s nav-menuAnimUp ease  forwards"
            navBtnLineDown.style.animation = " 0.3s nav-menuAnimDown ease forwards"
        } else if (linePage == 2) {
            navModal.classList.remove('modal-nav_active')   
            navBtnLineUp.style.animation = "0.3s nav-menuAnimUp2 reverse forwards  "
            navBtnLineDown.style.animation = " 0.3s nav-menuAnimDown2 reverse forwards"
            linePage = 0
        }
    })
})
