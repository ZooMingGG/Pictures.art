import modals from './modules/modals';
import sliders from './modules/sliders';
import showDemoPictures from './modules/demo-pictures';
import accordion from './modules/accordion';
import forms from './modules/forms';
import mask from './modules/mask';
import checkInputsText from './modules/check-inputs-text';
import showMoreStyles from './modules/show-more-styles';
import calculatePrice from './modules/calculate-price';
import filterPortfolio from './modules/filter-portfolio';
import burger from './modules/burger';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    showDemoPictures('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    forms();
    mask('[name="phone"]');
    checkInputsText('[name="name"]');
    checkInputsText('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2');
    calculatePrice('#size', '#material', '#options', '.promocode', '.calc-price');
    filterPortfolio();
    burger('.burger', '.burger-menu');
});