const Cinema = async () => {
  try {
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/cinema.json");
    let cinema = res.data.map((item) => {
        return `
        <div class="cinema__title mt-[30px] w-full h-[20px] mb-[32px] font-bold text-[17px] leading-[20px] text-white flex flex-wrap items-center justify-center">           
        ${item.title}
  </div>

  <div class="cinema__features w-full mobile:h-auto laptop:h-[40px] mb-[16px] flex flex-wrap items-center justify-center laptop:max-w-[1320px] laptop:justify-evenly">
    <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
      <div class="tick__svg w-[20px] h-[20px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
        <svg class="fill-[#1cb561] w-[20px] h-[20px] p-[3px]  " viewBox="0 0 24 24">
          <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
        </svg>
      </div>
      <div class="text font-thin text-[13px] leading-[24px] text-[#d8d8d8]">
          ${item.text1}
      </div>
    </div>
    <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
      <div class="tick__svg w-[20px] h-[20px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
        <svg class="fill-[#1cb561] w-[20px] h-[20px] p-[3px]  " viewBox="0 0 24 24">
          <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
        </svg>
      </div>
      <div class="text font-thin text-[13px] leading-[24px] text-[#d8d8d8]">
        ${item.text2}
      </div>
    </div>
    <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
      <div class="tick__svg w-[20px] h-[20px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
        <svg class="fill-[#1cb561] w-[20px] h-[20px] p-[3px]  " viewBox="0 0 24 24">
          <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
        </svg>
      </div>
      <div class="text font-thin text-[13px] leading-[24px] text-[#d8d8d8]">

        ${item.text3}
      </div>
    </div>
  </div>

  <div class="cinema__slide w-full max-w-[1320px] min-h-[270px] flex flex-wrap items-center justify-center">
        <div class="cinema__slide__main mobile:w-full laptop:w-[528px] laptop:h-[245px] p-[10px]  border-[1px] m-[12px]  border-solid border-[#33353d] backdrop-blur-[50px] bg-transparent rounded-[12px] bg-white-60 shadow-lg flex flex-col flex-wrap items-start justify-start relative">

          <div class="flex flex-wrap items-center">
            <a href="#" class="cinema__slide__image flex ml-[16px]">
              <img class="rounded-[8px] w-[165px] h-[220px]" src=${item.src}>
            </a>

            <div class="cinema__slide__title w-[105px] min-h-[224px] flex flex-wrap items-start justify-start">
                  <a href="#" class="w-full flex text-white font-bold leading-[24px] text-[13px]">
                   ${item.name}
                  </a>
                  <div class="w-full flex text-[#d8d8d8] font-thin leading-[16px] text-[12px]" >
                        ${item.director}
                  </div>  

                  <div class="w-full flex flex-wrap gap-2 items-center justify-start category mb-[24px] text-white font-bold leading-[24px] text-[11px]">
                    <div>
                        ${item.genre1}
                    </div>
                   <div>
                   ${item.genre2}
                   </div>
                  </div>

                  <a href="#" class="min-w-[70px] h-[40px] p-[10px] rounded-[8px] flex flex-wrap items-center justify-center border-[1px] border-solid border-white  text-white text-[11px] font-thin hover:bg-red-950 ease-linear duration-100">
                    خرید بلیت
                  </a>  
            </div>
          </div>
         <div class="online__text mobile:hidden mobileL:flex absolute left-5 top-5 w-[80px] h-[25px] bg-black/40 font-thin text-[10px] text-white px-[6px] py-1 flex-wrap items-center justify-center">
          اکران آنلاین
        
         </div>
        </div>
        
  </div>
        `
    });document
    .querySelector(".cinema")
    .insertAdjacentHTML("beforeend", cinema.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Cinema;
