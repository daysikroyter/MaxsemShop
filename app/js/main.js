$(function () {

  function checkScreenWidth() {
    const $lists = $('.footer__list');

    if ($(window).width() < 769) {
      if (!$('.footer__name').data('initialized')) {
        $('.footer__name').on('click', function () {
          const $list = $(this).next('.footer__list');
          $list.slideToggle(400);

          $(this).toggleClass('footer__name--active');
        }).data('initialized', true);
      }

      $lists.each(function () {
        if ($(this).is(':visible')) {
          $(this).hide();
        }
      });

    } else {
      $('.footer__name').off('click').data('initialized', false);
      $lists.show();

      $('.footer__name').removeClass('footer__name--active');
    }
  }

  checkScreenWidth();

  $(window).resize(function () {
    checkScreenWidth();
  });

  $('.menu__btn').on('click', function () {
    $('.menu-burger').addClass('menu-burger--active');
    $('body').addClass('lock');
  });

  $('.menu-burger__btn').on('click', function () {
    $('.menu-burger').removeClass('menu-burger--active');
    $('body').removeClass('lock');
  });

  $(document).on('click', function (event) {
    if ($(event.target).hasClass('lock')) {
      $('.menu-burger').removeClass('menu-burger--active');
      $('body').removeClass('lock');
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() >= 769) {
      if ($('.menu-burger').hasClass('menu-burger--active')) {
        $('.menu-burger').removeClass('menu-burger--active');
        $('body').removeClass('lock');
      }
    }
  });

  $('.promo__list').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
  });

});
