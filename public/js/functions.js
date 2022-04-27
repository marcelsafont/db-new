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

    //filtre clients

    $('.paragraph-list-clientes .filters').click(function(){
      $('#filter-form-clients').addClass('active');
    })

    $('#filter-form-clients .top').click(function(){
      $('#filter-form-clients').removeClass('active');
    })

    const swiper = new Swiper('.swiper-custom-carousel', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
    
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
      breakpoints: {
        750: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    });

    const swiper2 = new Swiper('.swiper-slider-clients', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
    })
      
});