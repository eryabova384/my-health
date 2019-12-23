import Swiper from 'swiper'
import ButtonScroll from './ButtonScroll.js'
import FormValidate from './FormValidate.js'

document.addEventListener('DOMContentLoaded', ()=> {
    const buttons = document.querySelectorAll('.button[data-button]'),
        form = document.querySelector('.subscribe-form'),
        carouselImg = new Swiper('.carousel__img .swiper-container', {
            speed: 400,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }),
        carouselText = new Swiper('.carousel__description .swiper-container', {
            speed: 400,
            slidesPerView: 1,
        });
    
    carouselImg.on('slideChange', function () {
        carouselText.slideTo(carouselImg.activeIndex);
    });

    carouselText.on('slideChange', function () {
        carouselImg.slideTo(carouselText.activeIndex);
    });

    const buttonScroll = new ButtonScroll(buttons, form);
    buttonScroll.init();

    const formValidate = new FormValidate(form);
    formValidate.init();
});