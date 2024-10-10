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
    // let newer = res.data.map((item) => {
    //   return `
    //         ${item.header
    //           .map((head) => {
    //             return `
    //               <!-- newer Header -->
    //             <div
    //               class="newer__header w-full mb-[24px] h-[30px] flex flex-wrap items-center justify-between"
    //             >
                
    //               <a href=${head.textlink} class="text-white text-[14px] hover:text-[#FDC13C] ease-linear duration-100"> ${head.title}</a>
    //               <a href=${head.link} class="text-[#FDC13C] text-[11px] flex flex-wrap items-center justify-center">
    //               ${head.viewall}
    //                 <svg class="w-[10px] h-[10px] fill-[#FDC13C] mr-[4px]" viewBox="0 0 24 24">
    //                   <g id="ui-icon-arrow_back_ios" viewBox="0 0 24 24">
    //                     <path
    //                       d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41A1 1 0 0 1 16 20.5Z"
    //                     ></path>
    //                   </g>
    //                 </svg>
    //               </a>
    //             </div>
    //             <!-- newer Header Ends Here -->
    //               `;
    //           })
    //           .join("")}`;
    // });
    // document
    //   .querySelector(".new .new__header")
    //   .insertAdjacentHTML("beforeend", newer.join(""));

    // let newerslider = ser.data.map((item) => {
    //   return `<div class="h-full swiper-slide">
    //   <a href="#" class="max-w-[173px] h-auto flex flex-wrap items-center justify-center relative">
    //   <div class="w-full h-[276px] rounded-[8px] mb-4">
    //     <img
    //         class="w-full h-[276px] object-cover rounded-[8px]"
    //         src=${item.src}
    //         alt=${item.alt}
    //     />
    //   </div>
    //   <span class="text-[#e8e8e8] text-nowrap whitespace-nowrap text-[11px] mt-[8px] pb-[4px] hover:text-[#FDC13C] text-ellipsis overflow-hidden text ease-linear duration-100" href="#">
    //         ${item.maintext}
    //   </span>
     
    //     <div class="w-[80px] h-[20px] absolute top-1 left-3 bg-[#1cb561] rounded-[50px] text-white font-medium text-[11px] px-[7px] py-[1px]">
    //     ${item.freetext}
    //     </div>
    //     <div class="w-full h-[276px] group absolute bottom-[+44px]">
    //         <div
    //         class="w-full h-full hover__main group-hover:flex flex-wrap items-end group-hover:bg-[#292929]/[0.7] group-hover:ease-linear duration-100 rounded-[8px]"
    //         >
    //         <div class="text w-full pr-[10px]">
    //             <div
    //             class="w-full text-white hidden group-hover:block mb-[8px] text-[11px]"
    //             >
    //             ${item.description}
    //             </div>
    //             <div
    //             class="w-full text-white hidden group-hover:block mb-[8px] text-[11px]"
    //             >
    //             ${item.details}
    //             </div>
    //         </div>
    //         </div>
            
    //   </div>
     
    //   </a>
    //   </div> `;
    // });
    // document
    //   .querySelector(".new .swiper .swiper-wrapper")
    //   .insertAdjacentHTML("afterbegin", newerslider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};

export default New;
