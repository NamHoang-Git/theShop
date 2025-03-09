"use strict";
document.addEventListener("DOMContentLoaded", function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const navReg = $('.nav__register');
    const navLogin = $('.nav__login');

    const overlay = $('.modal__overlay');
    const driftReg = $('.drift-register');
    const driftLogin = $('.drift-login');

    const closeReg = $('.modal__auth-close-reg');
    const closeLogin = $('.modal__auth-close-log');

    const footerReg = $('.footer__link-reg');
    const footerLog = $('.footer__link-log');

    const searchInput = $('.media-form__search-input');
    const dropdown = $('.suggest-form');

    const navLists = $$('.account__nav-item .account__nav-item-acc ul > a')

    let hideTimeout;

    const app = {
        navListClick: function() {
            // NavList 
            navLists.forEach((item) => {
                item.onclick = function() {
                    $('.account__nav-item .account__nav-item-acc ul > a.active').classList.remove('active')
                    this.classList.add('active');
                };
            });
        },
    
        start: function() {
            this.navListClick();
        }
    }
    app.start();
});
