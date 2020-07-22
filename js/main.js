$(function () {
    $('.btn__start').on('click', function () {
        $("html").toggleClass("visible");
    });

    $('.btn__start').on('click', function () {
        $("body").toggleClass("visible");
    });

    $('.btn__start').on('click', function () {
        $(".header__start-bg ").toggleClass("out");
    });

    $('.btn__start').on('click', function () {
        $(".btn__start ").toggleClass("animate__slower animate__animated animate__zoomOutUp");
    });

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    $('.btn__start').on('click', function () {
        $(".content").toggleClass("active animate__animated animate__bounceInUp");
    });


    $('.btn__start').on('click', function () {
        $(".why, .hot, .price, .reviews, .photo, .give, .servise, .footer").toggleClass("active");
    });


    $('.btn__start').on('click', function () {
        $(".history, .header__wrapper, .history__wrapper").toggleClass("active");
    });




    $(function () {

        initDropDowns($("div.shy-menu"));

    });

    function initDropDowns(allMenus) {

        allMenus.children(".shy-menu-hamburger").on("click", function () {

            var thisTrigger = jQuery(this),
                thisMenu = thisTrigger.parent(),
                thisPanel = thisTrigger.next();

            if (thisMenu.hasClass("is-open")) {

                thisMenu.removeClass("is-open");

                jQuery(document).off("click");
                thisPanel.off("click");

            } else {

                allMenus.removeClass("is-open");
                thisMenu.addClass("is-open");

                jQuery(document).on("click", function () {
                    allMenus.removeClass("is-open");
                });
                thisPanel.on("click", function (e) {
                    e.stopPropagation();
                });
            }

            return false;
        });
    }

    $(document).ready(function () {
        var button = $('#button-up');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                button.fadeIn();
            } else {
                button.fadeOut();
            }
        });
        button.on('click', function () {
            $('body, html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});