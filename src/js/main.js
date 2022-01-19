import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filterPictures from './modules/filterPictures';
import picturesSize from './modules/picturesSize';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict'

    if (localStorage.getItem('gift')) {
        document.querySelector('.fixed-gift').style.display = 'none';
    }

    let modalState = {
        size: '',
        material: '',
        options: '',
        price: ''
    };
    
    modals();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms(modalState);
    mask();
    showMoreStyles('.button-styles', '#styles .row');
    calc(modalState);
    filterPictures();
    picturesSize('.sizes-block');
    accordion();
    burger('.burger-menu', '.burger');
});