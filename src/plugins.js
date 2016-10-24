window['$'] = window['jQuery'] = window['jquery'] = require('jquery');
require('bootstrap-sass');
require('metismenu');


$(function () {
    /*
     *
     * Zix Development Admin Them Setup
     *
     */

    $(document).ready(function () {

        // Add body-small class if window less than 768px
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }

        // MetsiMenu
        $('#side-menu').metisMenu();

        // Minimalize menu
        $('.navbar-minimalize').on('click', function () {
            $("body").toggleClass("mini-navbar");
            SmoothlyMenu();

        });

    })

    function SmoothlyMenu() {
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
})
