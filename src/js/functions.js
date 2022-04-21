$(document).ready(function() {

  // add Class
  $('header .ico-menu').click(function() {
          $('body').toggleClass("menu-open");
          $('.wrapper-navigation').fadeIn();
    });
    $('.wrapper-navigation .ico-close').click(function() {
      $(this).addClass("close");
      $('.wrapper-navigation').fadeOut();
          $('body').removeClass("menu-open");
    });

    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 40,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
      
});