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

  $('.user-menu__btn--profile').on('click', function () {
    $('.profile-menu').addClass('profile-menu--active');
    $('body').addClass('lock');
  });

  $('.user-menu__btn--basket').on('click', function () {
    $('.menu-catalog--basket').addClass('menu-catalog--basket-active');
    $('body').addClass('lock');
  });

  $('.user-menu__btn--heart').on('click', function () {
    $('.menu-catalog--heart').addClass('menu-catalog--heart-active');
    $('body').addClass('lock');
  });

  $('.profile-menu__close').on('click', function () {
    $('.profile-menu').removeClass('profile-menu--active');
    $('body').removeClass('lock');
  });

  $('.menu-catalog__btn-basket').on('click', function () {
    $('.menu-catalog--basket').removeClass('menu-catalog--basket-active');
    $('body').removeClass('lock');
  });

  $('.menu-catalog__btn-heart').on('click', function () {
    $('.menu-catalog--heart').removeClass('menu-catalog--heart-active');
    $('body').removeClass('lock');
  });

  $(document).on('click', function (event) {
    if ($(event.target).hasClass('lock')) {
      $('.menu-burger').removeClass('menu-burger--active');
      $('.profile-menu').removeClass('profile-menu--active');
      $('.menu-catalog--basket').removeClass('menu-catalog--basket-active');
      $('.menu-catalog--heart').removeClass('menu-catalog--heart-active');
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

  $('.tab').on('click', function (e) {
    e.preventDefault();

    const $tabs = $(this).closest('.tabs');
    const index = $(this).parent().index();

    $tabs.find('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');

    const $contents = $tabs.next('.tabs-container').find('.tabs-content');
    $contents.removeClass('tabs-content--active');
    $contents.eq(index).addClass('tabs-content--active');
  });


  $(document).on('click', '.product-card__favorite', function () {
    $(this).toggleClass('product-card__favorite--active');
  });

  $('.showcase__list').slick({
    slidesToShow: 4,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z" fill="#2F3035" /></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z" fill="#2F3035" /></svg></button>',
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
    ]
  });

  $('.menu-catalog__number-input').each(function () {
    var $input = $(this);
    var $numberElement = $input.find('.menu-catalog__number');
    var min = Number($input.attr('min')) || 0;
    var max = Number($input.attr('max')) || Infinity;
    var step = Number($input.attr('step')) || 1;
    var value = Number($numberElement.text()) || min;

    function increase() {
      if (value + step <= max) {
        value += step;
        $numberElement.text(value);
      }
    }

    function decrease() {
      if (value - step >= min) {
        value -= step;
        $numberElement.text(value);
      }
    }

    $input.find('.menu-catalog__button.plus').on('click', increase);
    $input.find('.menu-catalog__button.minus').on('click', decrease);
  });

});