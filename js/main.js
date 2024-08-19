$(function () {

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
    dots: true,
    arrows: false,
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
        }
      },
      {
        breakpoint: 860,
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

  var $range1 = $(".js-range-slider-1"),
    $inputFrom1 = $(".js-input-from-1"),
    $inputTo1 = $(".js-input-to-1"),
    min1 = 0,
    max1 = 200,
    from1 = 50,
    to1 = 150;

  $range1.ionRangeSlider({
    type: "double",
    min: min1,
    max: max1,
    from: from1,
    to: to1,
    min_interval: 20,
    onStart: updateInputs1,
    onChange: updateInputs1
  });

  function updateInputs1(data) {
    $inputFrom1.prop("value", data.from);
    $inputTo1.prop("value", data.to);
  }

  $inputFrom1.on("input", function () {
    var val = Math.min(Math.max($(this).val(), min1), to1);
    $range1.data("ionRangeSlider").update({ from: val });
  });

  $inputTo1.on("input", function () {
    var val = Math.min(Math.max($(this).val(), from1), max1);
    $range1.data("ionRangeSlider").update({ to: val });
  });

  var $range2 = $(".js-range-slider-2"),
    $inputFrom2 = $(".js-input-from-2"),
    $inputTo2 = $(".js-input-to-2"),
    min2 = 0,
    max2 = 114,
    from2 = 20,
    to2 = 100;

  $range2.ionRangeSlider({
    type: "double",
    min: min2,
    max: max2,
    from: from2,
    to: to2,
    min_interval: 20,
    onStart: updateInputs2,
    onChange: updateInputs2
  });

  function updateInputs2(data) {
    $inputFrom2.prop("value", data.from);
    $inputTo2.prop("value", data.to);
  }

  $inputFrom2.on("input", function () {
    var val = Math.min(Math.max($(this).val(), min2), to2);
    $range2.data("ionRangeSlider").update({ from: val });
  });

  $inputTo2.on("input", function () {
    var val = Math.min(Math.max($(this).val(), from2), max2);
    $range2.data("ionRangeSlider").update({ to: val });
  });

  var $range3 = $(".js-range-slider-3"),
    $inputFrom3 = $(".js-input-from-3"),
    $inputTo3 = $(".js-input-to-3"),
    min3 = 96,
    max3 = 4876,
    from3 = 900,
    to3 = 4000;

  $range3.ionRangeSlider({
    type: "double",
    min: min3,
    max: max3,
    from: from3,
    to: to3,
    min_interval: 650,
    onStart: updateInputs3,
    onChange: updateInputs3
  });

  function updateInputs3(data) {
    $inputFrom3.prop("value", data.from);
    $inputTo3.prop("value", data.to);
  }

  $inputFrom3.on("input", function () {
    var val = Math.min(Math.max($(this).val(), min3), to3);
    $range3.data("ionRangeSlider").update({ from: val });
  });

  $inputTo3.on("input", function () {
    var val = Math.min(Math.max($(this).val(), from3), max3);
    $range3.data("ionRangeSlider").update({ to: val });
  });

  $('.select-style').styler();

  $('.link--disabled').on('click', function (e) {
    e.preventDefault();
  });

});