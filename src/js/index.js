import modals from './modules/modals';
import sliders from './modules/sliders';
import showDemoPictures from './modules/demo-pictures';
import accordion from './modules/accordion';
import forms from './modules/forms';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();

    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

    showDemoPictures('.sizes-block');

    accordion('.accordion-heading', '.accordion-block');

    forms();
});