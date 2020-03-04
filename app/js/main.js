$(window).on('load', function(){
   $('.preloader path').each(function(){
      $(this).addClass('active')
   })
   setTimeout(function(){
      let preloader = $('#preloader');
      if( !preloader.hasClass('hide') ){
         preloader.addClass('hide')
      }
   }, 3200)
})

$(function () {

   $(document).mousemove(function(e){
      $('.cursor').css({left: e.clientX, top: e.clientY});
      if(e.target === $('a')[0] || e.target === $('button')[0] || e.target === $('.slick-next')[0] || e.target === $('.slick-prev')[0]){
         $('.cursor').removeClass('remove-hover');
         $('.cursor').addClass('hover');
      } else {
         $('.cursor').removeClass('hover')
         $('.cursor').addClass('remove-hover')
      }
   })

   var wow = new WOW();
   wow.init();

   $('.technical__box.btn').on('click', function () {
      $(this).next().toggleClass('active');
      $(this).parent().toggleClass('active');
      $(this).toggleClass('active');
   })

   $('.burger').on('click', function () {
      $('.header__menu-list').addClass('active');
   })

   $('.header__close').on('click', function () {
      $('.header__menu-list').removeClass('active');
   })

   $('.header__arrow').on('click', function () {
      $(this).parent().toggleClass('active');
      $('.header__menu-list').toggleClass('item_clicked');
   });

   $('.header__menu-item.disable').on('click', function () {
      $(this).removeClass('active');
      $('.header__menu-list').removeClass('item_clicked');
   })

   $('.header__details').on('click', function () {
      var offset = $('.about').offset().top;
      $('html, body').animate({
         scrollTop: offset
      }, 700)
   })

   $('#form__number').mask("+7 (999) 999-99-99");

   $('#form__name').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.name').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.name').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('#form__email').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.email').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.email').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   $('#form__text').focusout(function () {
      if ($(this).val() == '') {
         $('.form__block.text').addClass('active');
      } else if ($(this).val() !== '') {
         $('.form__block.text').removeClass('active');
      }
      if ($(this).val() == '') {
         $(this).prev().removeClass('active');
      }
   });

   if (window.innerWidth < 1175) {
      $('.about__what-title.first').hide();
      $('.about__what-title.second').show();
      $('.about__what-title.second').removeClass('hide');
   }
   if (window.innerWidth < 975) {
      $('.success__title.first').hide();
      $('.success__title.second').show();
      $('.success__title.second').removeClass('hide');
   }
   if (window.innerWidth < 400) {
      $('.news__item-title.first').hide();
      $('.news__item-title.second').show();
      $('.news__item-title.second').removeClass('hide');
   }
   if (window.innerWidth < 600) {
      $('.about__earn-text.first').hide();
      $('.about__earn-text.second').show();
      $('.about__earn-text.second').removeClass('hide');
      $('.about__earn-money').show();
   } else {
      $('.about__earn-money').hide();
   }

   $('#form__name').focus(function () {
      $(this).prev().addClass('active');
   });

   $('#form__email').focus(function () {
      $(this).prev().addClass('active');
   });

   $('#form__text').focus(function () {
      $(this).prev().addClass('active');
   });

   // if(window.innerWidth < 1000){
   //    $('#form__name').on('focus',function () {
   //       $(this).prev().addClass('active');
   //       console.log('sdfsdfsdf')
   //    });
   
   //    $('#form__email').focus(function () {
   //       $(this).prev().addClass('active');
   //    });
   
   //    $('#form__text').focus(function () {
   //       $(this).prev().addClass('active');
   //    });
   // }

   if ($('.header__top').hasClass('header__other-page')) {
      $(window).on('scroll', function () {
         var offset = 150;
         var html = $('html').scrollTop();
         if (offset <= html) {
            $('.header__top').addClass('active');
            $('.header__top').removeClass('active-static');
         }
         else {
            $('.header__top').removeClass('active');
            $('.header__top').addClass('active-static');
         }
      });
   } else {
      $(window).on('scroll', function () {
         var offset = 150;
         var html = $('html').scrollTop();
         if (offset <= html) {
            $('.header__top').addClass('active');
         }
         else {
            $('.header__top').removeClass('active');
         }
      });
   }


   $('.news__more').on('click', function () {
      $('.news__inner').addClass('active');
      $('.news__item').addClass('active');
      $(this).hide();
   });


   let quantity = $('.news__item').length - 2;

   if (quantity < 1) { } else {
      if (quantity === 1 || quantity % 10 === 1) {
         $('.news__more').text("Показать ещё " + quantity + " новость");
      } else if (quantity > 4 && quantity < 21) {
         $('.news__more').text("Показать ещё " + quantity + " новостей");
      } else if (quantity % 10 > 1 && quantity % 10 < 5) {
         $('.news__more').text("Показать ещё " + quantity + " новости");
      } else if (quantity % 10 > 4 || quantity % 10 === 0) {
         $('.news__more').text("Показать ещё " + quantity + " новостей");
      }
   }

   $('.slider__inner').slick({
      nextArrow: '<div class="slider__next controls"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"><g><g><path fill="#fff" d="M7.588 11.766l5.145-5.177a.813.813 0 0 0 0-1.144L7.588.268A.801.801 0 0 0 6.215.84c0 .207.079.414.235.572l3.774 3.617H.804C.36 5.029 0 5.57 0 6.017c0 .446.36.968.804.968h9.42L6.45 10.622a.814.814 0 0 0 0 1.144.8.8 0 0 0 1.138 0z"/></g></g></svg></div>',
      prevArrow: '<div class="slider__prev controls"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12"><g><g><path fill="#fff" d="M5.412.234L.268 5.41a.813.813 0 0 0 0 1.144l5.145 5.177a.801.801 0 0 0 1.373-.572.81.81 0 0 0-.235-.571L2.776 6.971h9.42c.444 0 .804-.542.804-.989 0-.446-.36-.968-.804-.968h-9.42L6.55 1.378a.814.814 0 0 0 0-1.144.8.8 0 0 0-1.138 0z"/></g></g></svg></div>',
   });

   $("#lightgallery").lightGallery();

   $('.verification__inner .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.verification__inner').find('.tab-item').removeClass('active-tab').hide();
      $('.verification__inner .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.verification__inner.verification-mobile .tab').on('click', function () {
      $(this).toggleClass('active-mobile');
      $(this).next().toggleClass('show');
   });

   $('.create__item-1 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-1').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-1 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-2 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-2').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-2 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-3 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-3').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-3 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-4 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-4').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-4 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-5 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-5').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-5 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-6 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-6').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-6 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-7 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-7').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-7 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-8 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-8').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-8 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-9 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-9').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-9 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-10 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-10').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-10 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-11 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-11').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-11 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('.create__item-12 .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.create__item-12').find('.tab-item').removeClass('active-tab').hide();
      $('.create__item-12 .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });




   $('.better__content').slick({
      dots: true,
      arrows: false,
      draggable: false,
      swipe: false,
      loop: false,
      responsive: [
         {
            breakpoint: 1060,
            settings: {
               draggable: false,
               loop: false
            }
         }
      ]
   });

   $('.better__content.create-mobile .tab').on('click', function () {
      $(this).toggleClass('active-mobile');
      $(this).next().toggleClass('show');
   });


   $('.franchise__slider').slick({
      dots: true,
      arrows: true,
      draggable: false,
      swipe: false,
      loop: false,
      dotsClass: 'franchise__dots',
      fade: true,
      // speed: 40,
      slidesToShow: 1,
      responsive: [
         {
            breakpoint: 1000,
            settings: "unslick"
         }
      ]
   });

   $('.franchise__slider .slick-next').on('click', function (){
      $('.franchise__slider .slick-active').find('.franchise__inner > *').addClass('animate');
      $('.franchise__dots .slick-active').addClass('active');
      let prevIndex = $('.franchise__dots .slick-active').index() - 1;
      $('.franchise__dots li').eq(prevIndex).addClass('active');
      for (let i = 3; i <= 5; i++) {
         if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).addClass('wait');
            $('.franchise__dots li').eq(i).addClass('disable');
         }
      }
      if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
         $('.franchise__dots li').eq(6).addClass('wait');
         $('.franchise__dots li').eq(7).addClass('disable');
      } else {
         $('.franchise__dots li').eq(6).removeClass('wait');
      }
      if ($('.franchise__dots li').eq(13).hasClass('slick-active')) {
         $('.franchise__dots li').css("display", "none");
      }
      let index = $('.slick-current').index();
      $('.franchise__wrapper').addClass('style-' + index);
      $('.franchise__wrapper').removeClass('style-' + --index);
      if (index === 11) {
         $('.franchise__wrapper .slick-next').css("display", "none");
      } else {
         $('.franchise__wrapper .slick-next').css("display", "block");
      }
   })


   

   $('.franchise__dots li').on('click', function () {
      
      if ($(this).index() < 2 || $(this).index() > 6) {
         $('.franchise__dots li').eq(2).removeClass('wait');
      }
      for (let i = 0; i < $(this).index(); i++) {
         let index = $('.slick-current').index();
         if (index === 12) {
            $('.franchise__wrapper .slick-next').css("display", "none");
         } else {
            $('.franchise__wrapper .slick-next').css("display", "block");
         }
         $('.franchise__wrapper').removeClass('style-' + i);
         $('.franchise__wrapper').addClass('style-' + index);
         $('.franchise__dots li').eq(i).addClass('active');
         for (let i = 3; i <= 5; i++) {
            if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).addClass('wait');
               $('.franchise__dots li').eq(i).addClass('disable');
            }
         }
         if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
            $('.franchise__dots li').eq(6).addClass('wait');
            $('.franchise__dots li').eq(7).addClass('disable');
         } else {
            $('.franchise__dots li').eq(6).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
            $('.franchise__dots li').eq(11).addClass('wait');
         }
      }
      for (let j = $('.franchise__dots li').last().index(); j > $(this).index(); j--) {
         $('.franchise__dots li').eq(j).removeClass('active');
         $('.franchise__dots li').eq(j + 1).removeClass('active');
         if ($(this).index() < 2 || $(this).index() > 6) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         let index1 = $('.slick-current').index();
         if (index1 === 12) {
            $('.franchise__wrapper .slick-next').css("display", "none");
         } else {
            $('.franchise__wrapper .slick-next').css("display", "block");
         }
         $('.franchise__wrapper').removeClass('style-' + j);
         $('.franchise__wrapper').addClass('style-' + index1);
         for (let i = 3; i <= 5; i++) {
            if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).addClass('wait');
               $('.franchise__dots li').eq(i).addClass('disable');
            }
         }
         if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
            $('.franchise__dots li').eq(6).addClass('wait');
            $('.franchise__dots li').eq(7).addClass('disable');
         } else {
            $('.franchise__dots li').eq(6).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(8).hasClass('slick-active')) {
            $('.franchise__dots li').eq(9).removeClass('active');
         }
         if ($('.franchise__dots li').eq(12).hasClass('slick-active')) {
            $('.franchise__dots li').eq(11).addClass('wait');
         }
      }
   })

   $('.franchise__slider').on('wheel', (function (e) {
      e.preventDefault();
      
      $('.franchise__slider .slick-active').find('h1, h3').not('.test-div').addClass('animateHideTitle');
      $('.franchise__slider .slick-active').find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateHideText');
      $('.franchise__slider .slick-active').find('.franchise__inner div').not('.test-div').addClass('animateHideBlock');
      $('.franchise__slider .slick-active').find('img').addClass('animateHideImg');

      $('.franchise__slider .slick-active').next().find('h1, h3').addClass('animateShowTitle');
      $('.franchise__slider .slick-active').next().find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateShowText');
      $('.franchise__slider .slick-active').next().find('.franchise__inner div').not('.test-div').addClass('animateShowBlock');
      $('.franchise__slider .slick-active').next().find('img').addClass('animateShowImg');
      $('.franchise__dots .slick-active').next().addClass('animateDots');

      $('.franchise__slider .slick-active').prev().find('h1, h3').addClass('animateShowTitle');
      $('.franchise__slider .slick-active').prev().find('p, span, ul, a, button').not('.franchise__dots, .franchise__dots button').addClass('animateShowText');
      $('.franchise__slider .slick-active').prev().find('.franchise__inner div').not('.test-div').addClass('animateShowBlock');
      $('.franchise__slider .slick-active').prev().find('img').addClass('animateShowImg');
      $('.franchise__dots .slick-active').prev().addClass('animateDots');
      setTimeout(function() {
         if (e.originalEvent.deltaY < 0) {
            $('.franchise__slider').slick('slickPrev');
         } else {
            $('.franchise__slider').slick('slickNext');
         }
         if ($('.franchise__dots li').index() < 2 || $('.franchise__dots li').index() > 6) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         for (let i = 3; i <= 5; i++) {
            if ($('.franchise__dots li').eq(i).hasClass('slick-active')) {
               $('.franchise__dots li').eq(2).addClass('wait');
               $('.franchise__dots li').eq(i).addClass('disable');
            }
         }
         if ($('.franchise__dots li').eq(6).hasClass('slick-active')) {
            $('.franchise__dots li').eq(2).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(7).hasClass('slick-active')) {
            $('.franchise__dots li').eq(6).addClass('wait');
            $('.franchise__dots li').eq(7).addClass('disable');
         } else {
            $('.franchise__dots li').eq(6).removeClass('wait');
         }
         if ($('.franchise__dots li').eq(13).hasClass('slick-active')) {
            $('.franchise__dots li').css("display", "none");
         }
         let index = $('.slick-current').index();
         if (index === 12 || index === 13) {
            $('.franchise__wrapper .slick-next').css("display", "none");
         } else {
            $('.franchise__wrapper .slick-next').css("display", "block");
         }
         if (index === 13) {
            $('.franchise__wrapper .franchise__dots').css("display", "none");
         } else {
            $('.franchise__wrapper .franchise__dots').css("display", "flex");
         }
         for(let v = 0; v <= index; v++){
            $('.franchise__dots li').eq(v).addClass('active');
         }
         for(let c = $('.franchise__dots li').last().index(); c >= index; c--){
            $('.franchise__dots li').eq(c).removeClass('active');
         }
         $('.franchise__wrapper').addClass('style-' + index);
         $('.franchise__wrapper').removeClass('style-' + --index);
         $('.franchise__wrapper').removeClass('style-' + (index + 2));


         setTimeout(function() {
            $('*').removeClass('animateHideTitle');
            $('*').removeClass('animateHideText');
            $('*').removeClass('animateHideBlock');
            $('*').removeClass('animateHideImg');
         }, 500);
         setTimeout(function() {
            $('*').removeClass('animateShowTitle');
            $('*').removeClass('animateShowText');
            $('*').removeClass('animateShowBlock');
            $('*').removeClass('animateShowImg');
         }, 900);
         
     }, 1200);
   }));
      
      


   window.REMODAL_GLOBALS = {
      NAMESPACE: 'modal',
      DEFAULTS: {
      }
   };




})