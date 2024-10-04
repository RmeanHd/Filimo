const Footer = async () => {
    try {
     
    
      let res = await axios.get("https://rmeanhd.github.io/Filimo-database/footer.json");
      let footer = res.data.map((item) => {
        return `
        <div class="cinema__features w-full mobile:h-auto mb-[16px] flex flex-wrap items-center justify-center laptop:max-w-[1493px] laptop:justify-center gap-x-[16px]">
        <div class="img w-full flex flex-wrap items-center justify-center">
          <img class="w-[190px] mb-[48px]" src=${item.src} alt="">
        </div>
        <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
          <div class="tick__svg w-[24px] h-[24px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
            <svg class="fill-[#1cb561] w-[24px] h-[24px] p-[3px]  " viewBox="0 0 24 24">
              <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
            </svg>
          </div>
          <div class="text font-thin text-[15px] leading-[24px] text-[#d8d8d8]">
           ${item.text1}
          </div>
        </div>
        <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
          <div class="tick__svg w-[24px] h-[24px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
            <svg class="fill-[#1cb561] w-[24px] h-[24px] p-[3px]  " viewBox="0 0 24 24">
              <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
            </svg>
          </div>
          <div class="text font-thin text-[15px] leading-[24px] text-[#d8d8d8]">
          ${item.text2}
          </div>
        </div>
        <div class="cinema__text mobile:w-full laptop:w-auto mb-[16px] flex flex-wrap items-center justify-center">
          <div class="tick__svg w-[24px] h-[24px] bg-[#142D1C] rounded-[50%] mt-[2px] ml-[8px]">
            <svg class="fill-[#1cb561] w-[24px] h-[24px] p-[3px]  " viewBox="0 0 24 24">
              <g id="ui-icon-check" viewBox="0 0 24 24"><path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path></g>
            </svg>
          </div>
          <div class="text font-thin text-[15px] leading-[24px] text-[#d8d8d8]">
    
          ${item.text3}
          </div>
        </div>
        <div class="w-full flex flex-wrap items-center justify-center mt-[20px]">
          <a class="flex w-full max-w-[285px] h-[60px] rounded-lg text-white fill-white bg-[#17924e] hover:bg-[#17924e]/80 ease-linear duration-150 text-[15px] py-[17px] flex-wrap items-center justify-center"  href="#">
            <svg class="w-[24px] h-[24px] ml-1 fill-white" viewBox="0 0 24 24">
              <g id="ui-icon-subscription" viewBox="0 0 24 24"><path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path><path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path><circle cx="16" cy="9" r="1"></circle><circle cx="16" cy="15" r="1"></circle><circle cx="16" cy="12" r="1"></circle></g>
            </svg>
           ${item.btntext}
          </a>
        </div>
      </div>
            `;
      });
      document
        .querySelector("footer")
        .insertAdjacentHTML("beforeend", footer.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Footer;
  