if (document.querySelector(".main-block__swiper")) {
  new Swiper(".main-block__swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 50,
    parallax: true,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".controll-main-block__dotts",
      clickable: true,
    },
    on: {
      init: (swiper) => {
        const allSlides = document.querySelector(".fraction-controll__all");
        allSlides.innerHTML =
          swiper.slides.length < 10
            ? `0${swiper.slides.length}`
            : swiper.slides.length;
      },

      slideChange: (swiper) => {
        const currentSlide = document.querySelector(
          ".fraction-controll__current"
        );
        currentSlide.innerHTML =
          swiper.realIndex + 1 < 10
            ? `0${swiper.realIndex + 1}`
            : swiper.realIndex + 1;
      },
    },
  });
}

if (document.querySelector(".new-products__slider")) {
  new Swiper(".products-slider__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".products-slider__dotts",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1370: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".new-products__slider")) {
  new Swiper(".new-products__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".new-products__dotts",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".product-items__slider")) {
  new Swiper(".product-items__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 50,
    parallax: true,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".product-items__dotts",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".images-product")) {
  const thumbsSwiper = new Swiper(".thumbs-product__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 800,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });

  new Swiper(".images-product__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
}
