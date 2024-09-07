$(function () {

  $('.menu__btn').on('click', function () {
    $('.menu-burger').toggleClass('menu-burger--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('body').toggleClass('locked');
  });
  
  $('.box__phone-btn').on('click', function () {
    $('.phone-popup').addClass('phone-popup--active');
    $('body').addClass('lock');
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('.header').removeClass('locked');
  });

  $('.search__input').on('focus', function () {
    $('body').addClass('locked');
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__btn').removeClass('menu__btn--active');
    
    if ($('.menu__categories-items').hasClass('menu__categories-items--active')) {
      $('.menu__categories-items').slideToggle();
      $('.menu__categories-items').removeClass('menu__categories-items--active');
    };

    if ($('.menu__filters-items').hasClass('menu__filters-items--active')) {
      $('.menu__filters-items').slideToggle();
      $('.menu__filters-items').removeClass('menu__filters-items--active');
    };
  });

  $('.search__input').on('blur', function () {
    $('body').removeClass('locked');
  });

  $('.user-menu__btn--profile').on('click', function () {
    $('.profile-menu').addClass('profile-menu--active');
    $('body').addClass('lock');
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('.header').removeClass('locked');
  });

  $('.user-menu__btn--basket').on('click', function () {
    $('.menu-catalog--basket').addClass('menu-catalog--basket-active');
    $('body').addClass('lock');
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('.header').removeClass('locked');
  });

  $('.user-menu__btn--heart').on('click', function () {
    $('.menu-catalog--heart').addClass('menu-catalog--heart-active');
    $('body').addClass('lock');
    $('.menu-burger').removeClass('menu-burger--active');
    $('.menu__btn').removeClass('menu__btn--active');
    $('.header').removeClass('locked');
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

  $('.phone-popup__close').on('click', function () {
    $('.phone-popup').removeClass('phone-popup--active');
    $('body').removeClass('lock');
  });

  $(document).on('click', function (event) {
    if ($(event.target).hasClass('lock')) {
      $('.profile-menu').removeClass('profile-menu--active');
      $('.menu-catalog--basket').removeClass('menu-catalog--basket-active');
      $('.menu-catalog--heart').removeClass('menu-catalog--heart-active');
      $('.phone-popup').removeClass('phone-popup--active');
      $('.menu-responsive').removeClass('menu-responsive--active');
      $('body').removeClass('lock');
    }
  });

  $(document).on('click', function (event) {
    if ($(event.target).hasClass('locked')) {
      $('.menu-burger').removeClass('menu-burger--active');
      $('body').removeClass('locked');
      $('.menu__btn').removeClass('menu__btn--active');
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() >= 993) {
      if ($('.menu-responsive').hasClass('menu-responsive--active')) {
        $('.menu-responsive').removeClass('menu-responsive--active');
        $('body').removeClass('lock');
      }
    }
    if ($(window).width() <= 992) {
      if ($('.menu-burger').hasClass('menu-burger--active')) {
        $('.menu-burger').removeClass('menu-burger--active');
        $('.menu__btn').removeClass('menu__btn--active');
        $('body').removeClass('locked');
      }
    }
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
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.input-field').each(function () {
    var $input = $(this);
    var $numberElement = $input.find('.input-field__number');
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

    $input.find('.input-field__button.plus').on('click', increase);
    $input.find('.input-field__button.minus').on('click', decrease);
  });

  $('.link--disabled').on('click', function (e) {
    e.preventDefault();
  });

  $('.shop__title-dropdown').on('click', function () {
    $(this).next('.shop__dropdown-list').slideToggle();
    $(this).toggleClass('shop__title-dropdown--active')
  });

  $('.user-menu__btn--search').on('click', function () {
    $('.menu__content-search').slideToggle();
    $('.header').toggleClass('header--active');
  });
  
  $('.menu__content-btn--catalog').on('click', function () {
    $('.menu__categories-items').slideToggle();
    $('.menu__categories-items').toggleClass('menu__categories-items--active');

    if ($('.menu__filters-items').hasClass('menu__filters-items--active')) {
      $('.menu__filters-items').slideToggle();
      $('.menu__filters-items').removeClass('menu__filters-items--active');
    };
  });

  $('.menu__content-btn--filter').on('click', function () {
    $('.menu__filters-items').slideToggle();
    $('.menu__filters-items').toggleClass('menu__filters-items--active');

    if ($('.menu__categories-items').hasClass('menu__categories-items--active')) {
      $('.menu__categories-items').slideToggle();
      $('.menu__categories-items').removeClass('menu__categories-items--active');
    };
  })

  $('.menu__btn-responsive').on('click', function () {
    $('.menu-responsive').addClass('menu-responsive--active');
    $('body').addClass('lock');
  });
  
  $('.menu-responsive__close').on('click', function () {
    $('.menu-responsive').removeClass('menu-responsive--active');
    $('body').removeClass('lock');    
  });

  $('.menu-responsive__btn').on('click', function () {
    $('.menu-responsive').removeClass('menu-responsive--active');
  });

  $('.menu-responsive__popup').on('click', function () {
    $('.menu-responsive').removeClass('menu-responsive--active');
  });

});

document.querySelectorAll(".slider-wrapper").forEach(wrapper => {
  const rangeInputs = wrapper.querySelectorAll(".range-input input");
  const priceInputs = wrapper.querySelectorAll(".price-input input");
  const range = wrapper.querySelector(".slider .progress");
  const priceGap = parseInt(wrapper.closest(".shop__filters-item").getAttribute("data-gap"), 10);

  function updateProgress() {
    let minVal = parseInt(rangeInputs[0].value),
      maxVal = parseInt(rangeInputs[1].value);
    const max = rangeInputs[0].max;
    const min = rangeInputs[0].min;

    const leftPercentage = ((minVal - min) / (max - min)) * 100;
    const rightPercentage = 100 - ((maxVal - min) / (max - min)) * 100;

    range.style.left = `${leftPercentage}%`;
    range.style.right = `${rightPercentage}%`;
  }

  priceInputs.forEach(input => {
    input.addEventListener("input", e => {
      let minPrice = parseInt(priceInputs[0].value),
        maxPrice = parseInt(priceInputs[1].value);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputs[1].max) {
        if (e.target.className === "input-min") {
          rangeInputs[0].value = minPrice;
        } else {
          rangeInputs[1].value = maxPrice;
        }
        updateProgress();
      }
    });
  });

  rangeInputs.forEach(input => {
    input.addEventListener("input", e => {
      let minVal = parseInt(rangeInputs[0].value),
        maxVal = parseInt(rangeInputs[1].value);

      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === "range-min") {
          rangeInputs[0].value = maxVal - priceGap;
        } else {
          rangeInputs[1].value = minVal + priceGap;
        }
      } else {
        priceInputs[0].value = minVal;
        priceInputs[1].value = maxVal;
        updateProgress();
      }
    });
  });

  updateProgress();
});
