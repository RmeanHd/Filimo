const Sliders = async () => {
  try {
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/sliders.json");
    
    let sliders = res.data.map((item) => {
      return `

      <div class="new w-full mb-4"> 
     
  
      <!-- newer Header -->
      ${item.slidertitle.map((title) => {
        return `
            <div class="new__header w-full flex items-center justify-end">
            <div
            class="newer__header w-full mb-[24px] h-[30px] flex flex-wrap items-center justify-between"
            >
            
            <a href=${title.textlink} class="text-white text-[14px] hover:text-[#FDC13C] ease-linear duration-100"> ${title.title}</a>
            <a href=${title.link} class="text-[#FDC13C] text-[11px] flex flex-wrap items-center justify-center">
            ${title.viewall}
                <svg class="w-[10px] h-[10px] fill-[#FDC13C] mr-[4px]" viewBox="0 0 24 24">
                <g id="ui-icon-arrow_back_ios" viewBox="0 0 24 24">
                    <path
                    d="M16 20.5a1 1 0 0 1-.68-.27l-8-7.5a1 1 0 0 1 0-1.46l8-7.5a1 1 0 1 1 1.36 1.46L9.46 12l7.22 6.77a1 1 0 0 1 .05 1.41A1 1 0 0 1 16 20.5Z"
                    ></path>
                </g>
                </svg>
            </a>
            </div>
            </div>
            `;
      }).join("")}
      <!-- newer Header Ends Here -->
  
  
      

       
      
        <div class="w-full swiper myNew">
          <div class="swiper-wrapper tablet:h-[320px] mobile:h-auto flex">
            
            ${item.slider.map((slide) => {
              return `
                <div class="h-full swiper-slide">
                <a href="#" class="max-w-[171px] laptop:w-auto h-auto flex flex-wrap items-center justify-center relative">
                
                <div class="w-full h-[230px] rounded-[8px] mb-4">
                    <img
                        class="w-full h-[230px] object-cover rounded-[8px]"
                        src=${slide.src}
                        alt=${slide.alt}
                    />
                </div>
                <span class="block w-full text-center text-[#e8e8e8] text-nowrap whitespace-nowrap text-[11px] mt-[8px] pb-[4px] hover:text-[#FDC13C] text-ellipsis overflow-hidden text ease-linear duration-100" href="#">
                        ${slide.maintext}
                </span>
                
                    <div class="w-[80px] h-[20px] absolute top-1 left-3 bg-[#1cb561] rounded-[50px] text-white font-medium text-[11px] px-[7px] py-[1px]">
                    ${slide.freetext}
                    </div>
                    <div class="w-full h-[230px] group absolute bottom-[+44.5px]">
                    <div class="w-[90%] h-[inherit] absolute opacity-60 top-[-5px] group-hover:top-0 right-[5%] -z-10 ease-linear duration-100">
                    <img class="object-cover" src=${slide.src}/>
                    </div>
                    <div class="w-[80%] h-[inherit] absolute opacity-60 top-[-11px] group-hover:top-0 right-[10%] -z-10 ease-linear duration-100">
                    <img class="object-cover" src=${slide.src}/>
                    </div>
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
                    </div>`;
            }).join("")}
          </div>
    
    </div>
       
    </div>   
        
         
       
            `;
    });
    document
      .querySelector(".wrapper")
      .insertAdjacentHTML("beforeend", sliders.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Sliders;
