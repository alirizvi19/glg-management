$(document).ready(function () {
  $(".stellarnav").stellarNav({
    breakpoint: 991,
    position: "right",
  });

  var SwiperTop = new Swiper(".swiper--top", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
  var SwiperTop = new Swiper(".swiper--serv", {
    spaceBetween: 40,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 5,
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  var mySwiper = new Swiper(".video-slider-inner", {
    loop: true,
    slidesPerView: 1.7,
    centeredSlides: true,
    spaceBetween: 0,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      transitionStart: function () {
        var videos = document.querySelectorAll("video");

        Array.prototype.forEach.call(videos, function (video) {
          video.pause();
        });
      },

      transitionEnd: function () {
        var activeIndex = this.activeIndex;
        var activeSlide =
          document.getElementsByClassName("swiper-slide")[activeIndex];
        var activeSlideVideo = activeSlide.getElementsByTagName("video")[0];
        activeSlideVideo.play();
      },
    },
  });

  //!debashis
  var swiper = new Swiper(".swiper--prod", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      enabled: true,
      delay: 5000,
    },
  });
  var swiper = new Swiper(".swiper--prod2", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
      enabled: true,
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //!Debashis

  // Equal height
  $(function () {
    $(".eq-abt").matchHeight();
  });

  // var imgHight = $(".abs-val").outerHeight(true);
  // $(".our-val .imageshadowbxrow").css("height", imgHight);
});

//!debashis
window.addEventListener("load", (event) => {
  $(document).ready(function () {
    var topheaderHeight = $(".about-sec1 .content").outerHeight(true);
    //alert(topheaderHeight);
    $(".about-sec1").css("height", topheaderHeight);
    //$(".innerbanner").css("margin-top", topheaderHeight);
  });
});
//!debashis