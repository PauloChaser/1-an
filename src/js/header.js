export function initHeader() {
    const sublistOpenButton = document.querySelector('.js-open-button-sublist')
    const sublistOpen = document.querySelector('.js-open-sublist')
    const menuSublist = document.querySelector('.js-menu-sublist')

    const menuBurger = document.querySelector('.js-menu-burger')
    const headerMenuMob = document.querySelector('.js-header-menu-mob')

    sublistOpenButton.addEventListener('click', function () {
            menuSublist.classList.toggle('header__menuSubList--active')
            sublistOpen.classList.toggle('header__menuLinkItem--active')
    })

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.js-open-sublist')) {
            menuSublist.classList.remove('header__menuSubList--active')
            sublistOpen.classList.remove('header__menuLinkItem--active')
        }
    })

        menuBurger.addEventListener('click', function () {
            if (!document.body.offsetWidth < 768) {
                return
            }
            headerMenuMob.classList.toggle('header__menu--active')
            menuBurger.classList.toggle('header__menuBurger--active')
        })



}
