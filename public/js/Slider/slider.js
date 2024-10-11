const Slider = async () => {
  try {
    let slider = "";
    let sli = await axios.get("https://rmeanhd.github.io/Filimo-database/slider.json");
    slider = sli.data.map((item) => {
      if (item.movieLogo || item.details || item.exclusive) {


        if (item.movieLogo){
          return `<div class="swiper-slide relative">
          <img class="object w-full tablet:block laptop:block desktop:block min-h-[800px] mt-[190px] mobile:hidden" src=${item.desktopSrc} alt=${item.alt} />
          <img class="object w-full h-[inherit] mobile:block tablet:hidden laptop:hidden" src=${item.mobileSrc} alt=${item.alt} />
          <img class="absolute laptop:w-auto laptop:h-auto mobile:max-w-[188px] mobile:h-[150px] tablet:top-[32%] mobile:bottom-[150px] right-6 " src=${item.movieLogo} alt=${item.movieAlt} />
          <img class="absolute w-[140px] h-[20px] tablet:top-[59%] mobile:bottom-[120px]  right-6 ml-4 my-[16px]" src=${item.exclusive} alt=${item.alt} />
          
          <div
              class="details w-[270px] h-auto text-white text-[17px] font-thin drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] absolute tablet:top-[68%] right-6 mobile:bottom-[35px]">
              <div class="w-full h-[inherit] text-start pb-[15px]">
                ${item.details}
              </div>
              <button
                class="btn btn-sm bg-white hover:bg-white border-0 flex flex-wrap items-center justify-center w-[141px] h-[40px] rounded-[4px] "
              >
              
                <a class="w-full h-[inherit] flex flex-wrap items-center justify-center flex-row ml-1 text-[#151515] text-[12px] font-medium" href=${item.btnLink}>
                  <svg class="w-[18px] h-[18px] mb-1 ml-1" viewBox="0 0 24 24">
                    <g id="ui-icon-play_vod_fill" viewBox="0 0 24 24">
                      <path
                        d="M7.09 20a1.28 1.28 0 0 1-.65-.14C5.12 19.08 5 13.58 5 11.92c0-2.09.14-7 1.43-7.76h0c1.3-.76 5.62 1.58 7.42 2.62C15.3 7.61 20 10.43 20 12s-4.24 4.12-6.07 5.17C12.34 18.08 8.82 20 7.09 20Z"
                      ></path>
                    </g>
                  </svg>
                  ${item.btnText}

                </a>
              </button>
            </div>
         </div>`
        }

        else {return `
        <div class="swiper-slide relative">
        <img class="object w-full tablet:block laptop:block desktop:block min-h-[800px] mt-[190px] mobile:hidden" src=${item.desktopSrc} alt=${item.alt} />
        <img class="object w-full h-[inherit] mobile:block tablet:hidden laptop:hidden" src=${item.mobileSrc} alt=${item.alt} />
        <img class="absolute w-[140px] h-[20px] tablet:top-[59%] mobile:bottom-[120px]  right-6 ml-4 my-[16px]" src=${item.exclusive} alt=${item.alt} />
        <div class="exclusive h-[28px] absolute tablet:top-[59%] mobile:bottom-[120px] right-[180px] bg-[#19191940] px-[8px] py-[4px] my-[12px] text-[12px] text-[#e8e8e8] font-bold backdrop-blur-2xl rounded-2xl flex">
            <svg class="w-[18px] h-[18px] fill-white ml-1 " viewBox="0 0 24 24">
              <g id="ui-icon-calendar">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V7ZM19 7H5V18H19V7Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 13H4V11H20V13Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 9C7.44772 9 7 8.55228 7 8L7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4L9 8C9 8.55228 8.55228 9 8 9Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 9C16.5523 9 17 8.55228 17 8L17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4L15 8C15 8.55228 15.4477 9 16 9Z"
                ></path>
              </g>
            </svg>

              ${item.time}     
        </div>
        <div
            class="details w-[270px] h-auto text-white text-[17px] font-thin drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)] absolute tablet:top-[68%] right-6 mobile:bottom-[35px]">
            <div class="w-full h-[inherit] text-start pb-[15px]">
              ${item.details}
            </div>
            <button
              class="btn btn-sm bg-white hover:bg-white  border-0 flex flex-wrap items-center justify-center w-[141px] h-[40px] rounded-[4px] "
            >
            
              <a class="w-full h-[inherit] flex flex-wrap items-center justify-center flex-row ml-1 text-[#151515] text-[12px] font-medium" href=${item.btnLink}>
                <svg class="w-[18px] h-[18px] mb-1 ml-1" viewBox="0 0 24 24">
                  <g id="ui-icon-play_vod_fill" viewBox="0 0 24 24">
                    <path
                      d="M7.09 20a1.28 1.28 0 0 1-.65-.14C5.12 19.08 5 13.58 5 11.92c0-2.09.14-7 1.43-7.76h0c1.3-.76 5.62 1.58 7.42 2.62C15.3 7.61 20 10.43 20 12s-4.24 4.12-6.07 5.17C12.34 18.08 8.82 20 7.09 20Z"
                    ></path>
                  </g>
                </svg>
                ${item.btnText}

              </a>
            </button>
          </div>
       </div>
            `;}
      }
      
      else {
        return `
            <div class="swiper-slide ">
                <img class="object w-full block min-h-[800px] mt-[190px]" src=${item.src} alt=${item.alt} />
            </div>
                    `;
      }
    });
    document
      .querySelector(".slider .swiper-wrapper")
      .insertAdjacentHTML("beforeend", slider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider;
