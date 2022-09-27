import Swiper from 'swiper/bundle';

export function initMainSlider() {

    new Swiper(".js-main-slider", {
        spaceBetween: 30,
        slidesPerView: '2.5',

        navigation: {
            nextEl: '.js-slider-next',
            prevEl: '.js-slider-prev',
        },
        pagination: {
            el: '.js-pagination',
        },
        breakpoints: {
            320: {
                spaceBetween: 10
            },
            767: {
                spaceBetween: 17
            },
            1200: {
                spaceBetween: 22
            }
        }
    });
}
