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
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg class="arrow"><use xlink:href="images/icons/sprite/sprite.svg#prev-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg class="arrow"><use xlink:href="images/icons/sprite/sprite.svg#prev-arrow"></use></svg></button>',
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

});

document.addEventListener('DOMContentLoaded', () => {
  const numberInputs = document.querySelectorAll(".menu-catalog__number-input");

  numberInputs.forEach(input => {
    const numberElement = input.querySelector(".menu-catalog__number");
    const min = Number(input.getAttribute("min")) || 0;
    const max = Number(input.getAttribute("max")) || Infinity;
    const step = Number(input.getAttribute("step")) || 1;

    let value = Number(numberElement.textContent) || min;

    function increase() {
      if (value + step <= max) {
        value += step;
        numberElement.textContent = value;
      }
    }

    function decrease() {
      if (value - step >= min) {
        value -= step;
        numberElement.textContent = value;
      }
    }

    input.querySelector(".menu-catalog__button.plus").addEventListener("click", increase);
    input.querySelector(".menu-catalog__button.minus").addEventListener("click", decrease);
  });
});