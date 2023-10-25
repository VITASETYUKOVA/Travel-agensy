$(".nav__btn").on("click", () => $(".nav").toggleClass("nav--open"));
        
        $('.destinations__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.destinations__btn--prev'),
    nextArrow: $('.destinations__btn--next'),
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 0,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews__btn--prev'),
    nextArrow: $('.reviews__btn--next'),
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: 0,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

