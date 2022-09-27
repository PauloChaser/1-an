import 'swiper/css/bundle';
import './css/style.css';


import {initHeader} from "./js/header";
import {initMainSlider} from "./js/mainSlider";
import {initMap} from "./js/map";
import {initForm} from "./js/form";
import {initInfo} from "./js/info";


document.addEventListener('DOMContentLoaded', function () {
    initHeader()
    initMainSlider()
    initMap()
    initForm()
    initInfo()
    initSlideUp()
});


function initSlideUp() {
    const slideUpButton = document.querySelector('.js-slide-up');

    if (!slideUpButton) {
        return;
    }

    slideUpButton.addEventListener('click', function() {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    });
}