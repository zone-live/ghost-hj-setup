/**
 * Main JS file for Casper behaviours
 */

(function ($) {
    "use strict";

    $(document).ready(function(){

    var mainMenu = function () {
        var menuOvrl = $('.js-main-menu-ovrl'),
            menuHamburger = $('.js-main-menu-open');
        $('.js-main-menu-open').on('click', function (e) {
            e.preventDefault();
            menuHamburger.hide();
            menuOvrl.addClass('open');
        });
        $('.js-main-menu-close').on('click', function (e) {
            e.preventDefault();
            menuOvrl.removeClass('open');
            menuHamburger.show();
        });
    }

    
mainMenu();


    });

}(jQuery));
