import "./slider";
import modal from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    console.log(1);

    modal('[data-popup-engineer]', '.popup_engineer');
    modal('.phone_link', '.popup');
});