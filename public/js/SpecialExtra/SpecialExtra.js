const SpecialExtra = async () => {
  let res = await axios.get("https://rmeanhd.github.io/Filimo-database/specialextra.json");
  let extra = res.data.map((item) => {
        return `
       
           
              <a href="#" class="w-full h-full relative flex">
              <img
                class="w-full h-[inherit] object-cover rounded-[8px]"
                src=${item.src}
                alt=${item.alt}
              />
             
              <div class="w-[80px] h-[20px] absolute top-1 left-3 bg-[#1cb561] rounded-[50px] text-white font-medium text-[11px] px-[7px] py-[1px]">
              ${item.freetext}
              </div>
              <div class="w-full h-full group absolute">
                <div
                  class="w-full h-full hover__main group-hover:flex flex-wrap items-end group-hover:bg-[#292929]/[0.7] group-hover:ease-linear duration-100 rounded-[8px]"
                >
                  <div class="text w-full pr-[10px]">
                    <div
                      class="w-full text-white text-start hidden group-hover:block mb-[8px] text-[11px]"
                    >
                      ${item.description}
                    </div>
                    <div
                      class="w-full text-white text-start hidden group-hover:block mb-[8px] text-[11px]"
                    >
                     ${item.details}
                    </div>
                  </div>
                </div>
              </div>
            </a>
              
    
          
        `
  });document.querySelector(".special .tab").insertAdjacentHTML("beforeend",extra.join(""))
};
export default SpecialExtra;
