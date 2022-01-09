import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => { 
    'use strict'

    if (localStorage.getItem('gift')) {
        document.querySelector('.fixed-gift').style.display = 'none';
    }
    
    modals();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();

});