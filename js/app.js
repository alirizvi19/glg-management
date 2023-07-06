$(document).ready(function () {
  $(".stellarnav").stellarNav({
    breakpoint: 991,
    position: "right",
  });

  var swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 30,
    effect: "fade",
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".vertSwiper", {
    freeMode: {
      enabled: true,
      sticky: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    //direction: "vertical",
    speed: 800,
    mousewheel: {
      releaseOnEdges: true,
    },

    breakpoints: {
      1199: {
        direction: "vertical",
      },
      991: {
        direction: "vertical",
      },
      767: {
        direction: "horizontal",
      },
    },
  });

  // Equal height
  $(function () {
    $(".eq-abt").matchHeight();
  });

  // var imgHight = $(".abs-val").outerHeight(true);
  // $(".our-val .imageshadowbxrow").css("height", imgHight);
});

window.addEventListener("load", (event) => {
  $(document).ready(function () {
    var topheaderHeight = $(".topheader").outerHeight(true);
    //alert(topheaderHeight);
    $(".bannerWrapper").css("margin-top", topheaderHeight);
    $(".innerbanner").css("margin-top", topheaderHeight);
  });
});
