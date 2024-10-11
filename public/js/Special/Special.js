const Special = async () => {
  try {
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/special.json");
    let special = res.data.map((item) => {
      if (item.header) {
        return `
        ${item.header
          .map((head) => {
            return `
              <!-- Special Header -->
            <div
              class="special__header w-full mb-[24px] h-[30px] flex flex-wrap items-center justify-between"
            >
            
              <a href=${head.textlink} class="text-white text-[14px] hover:text-[#FDC13C] ease-linear duration-100"> ${head.title}</a>
              <a href=${head.link} class="text-[#FDC13C] text-[11px] flex flex-wrap items-center justify-center">
              ${head.viewall}
                <svg class="w-[10px] h-[10px] fill-[#FDC13C] mr-[4px]" viewBox="0 0 24 24">
                  <g id="ui-icon-arrow_back_ios" viewBox="0 0 24 24">
                    <path
                      d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41A1 1 0 0 1 16 20.5Z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <!-- Special Header Ends Here -->
              `;
          })
          .join("")}
            
            `;
      } else {
        return `
        <div
            class="slides w-full h-auto grid desktop:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3 mobileL:grid-cols-2 mobile:grid-cols-2 justify-center gap-y-[10px] gap-x-[5px] z-2"
          >
            ${item.slides
              .map((slide) => {
                return `
            <a href="#" class="w-full h-full flex relative">
              <img
                class="w-full h-[inherit] object-cover rounded-[8px]"
                src=${slide.src}
                alt=${slide.alt}
              />
              <div class="w-[80px] h-[20px] absolute top-1 left-3 bg-[#1cb561] rounded-[50px] text-white font-medium text-[11px] px-[7px] py-[1px]">
              ${slide.freetext}
              </div>
              <div class="w-full h-full group absolute">
                <div
                  class="w-full h-full hover__main group-hover:flex flex-wrap items-end group-hover:bg-[#292929]/[0.7] group-hover:ease-linear duration-100 rounded-[8px]"
                >
                  <div class="text w-full pr-[10px]">
                    <div
                      class="w-full text-white hidden group-hover:block mb-[8px] text-[11px]"
                    >
                      ${slide.description}
                    </div>
                    <div
                      class="w-full text-white hidden group-hover:block mb-[8px] text-[11px]"
                    >
                     ${slide.details}
                    </div>
                  </div>
                </div>
              </div>
            </a>
                `;
              })
              .join("")}

            
          </div>
        `;
      }
    });
    document.querySelector(".special .tabs").insertAdjacentHTML("beforeend", special.join(""));
  } catch (error) {
    console.log(error.message);
  }
};

export default Special;
