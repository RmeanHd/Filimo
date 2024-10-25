const New = async () => {
  try {
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/newer.json");
    let ser = await axios.get("https://rmeanhd.github.io/Filimo-database/newer.json");
    var swiper = new Swiper(".myNew", {
      breakpoints: {
        375: { // mobile
          slidesPerView: 1.5,
        },
        520: { // mobile
          slidesPerView: 2.5,
        },
        680: { // mobile
          slidesPerView: 3.5,
        },
        770: { // tablet
          slidesPerView: 4,
        },
        1070: { // desktop
          slidesPerView: 5,
        },
        1440: { // desktop
          slidesPerView: 8,
        },
      },

        spaceBetween: 0,
        
      });
    var swiper = new Swiper(".myComment", {
      breakpoints: {
        375: { // mobile
          slidesPerView: 1,
        },
        520: { // mobile
          slidesPerView: 1,
        },
        680: { // mobile
          slidesPerView: 2,
        },
        770: { // tablet
          slidesPerView: 2,
        },
        1070: { // desktop
          slidesPerView: 3,
        },
        1440: { // desktop
          slidesPerView: 3,
        },
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
        spaceBetween: 15,
        
      });
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });
  } catch (error) {
    console.log(error.message);
  }
};

export default New;
