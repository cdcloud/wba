/**
 * Created by ibarron on 9/18/17.
 */

$(document).ready(function () {

    var menu = $('.navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top navbarFixedMargin');
            $('.content').addClass('menu-padding');
        } else {
            $('.navbar').removeClass('navbar-fixed-top navbarFixedMargin');
            $('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;

});
