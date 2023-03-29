window.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-menu'),
        navBtnLineUp = document.getElementById('nav-menu__lineUp'),
        navBtnLineDown = document.getElementById('nav-menu__lineDown'),
        navModal = document.querySelector('.modal-nav'),
        notificationBtn = document.querySelector('.other-block__notification'),
        notificationModal = document.querySelector('.notifications')
    let linePage = 0

    notificationBtn.addEventListener('mouseover', () => {
        notificationModal.classList.toggle('notifcations_active')
    })
    notificationModal.addEventListener('mouseout', () => {
        // notificationModal.classList.remove('notifcations_active')

    })

    navBtn.addEventListener('click', () => {
        linePage++
        navBtnLineUp.classList.remove('nav-close-one')
        navBtnLineDown.classList.remove('nav-close-two')
        navBtnLineUp.classList.remove('nav-menu__line-one-open')
        navBtnLineDown.classList.remove('nav-menu__line-two-open')
        console.log(linePage)
        if (linePage == 1) {
            navModal.classList.add('modal-nav_active')
            navBtnLineUp.classList.add('nav-menu__line-one-open')
            navBtnLineDown.classList.add('nav-menu__line-two-open')

        } else if (linePage == 2) {
            navModal.classList.remove('modal-nav_active')
            navBtnLineUp.classList.add('nav-close-one')
            navBtnLineDown.classList.add('nav-close-two')
            linePage = 0
        }

    })
})
