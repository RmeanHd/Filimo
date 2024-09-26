const Menu = async () => {
  let menu = "";
  let submenu = "";
  let login = "";
  try {
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/menu.json");
    menu = res.data.map((item) => {
      return `
            <div class="logo border-l-[1px] border-solid border-[#FFFFFF]/[0.3] ml-[18px] ">
                <a class="flex items-center justify-center ml-[18px] " href=${item.link}>
                  <img class="w-[80px] h-[24px] " src=${item.src} alt=${item.alt}>
                </a>
                
              </div>
            `;
    });
    document
      .querySelector(".menu nav .logo")
      .insertAdjacentHTML("beforeend", menu.join(""));

    let sub = await axios.get("https://rmeanhd.github.io/Filimo-database/submenu.json");

    submenu = sub.data.map((item) => {
      if (item.svg) {
        if (item.dropdown) {
          return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px] group">
            <a class="flex flex-wrap items-center gap-x-[4px] text-white hover:text-[#f9ad03] ease-out text-[11px] font-thin " href="${
              item.link
            }">
            
            <img class="w-[20px] h-[20px] " src=${item.svg} alt=${item.alt}>
              ${item.name}
              ${item.arrow}
            </a>

            <div class="dropdown min-w-[333px] min-h-[376px] hidden flex-wrap items-center justify-start bg-[#1a1a1a] group-hover:flex ease-linear absolute right-0 top-[52px]">
            ${item.dropdown
              .map((drop) => {
                return `<div class="dropdown__main w-[50%]">
              <a class="block px-[7px] py-[10px] hover:text-[#f9ad03] text-[#e0e0e0] text-[11px]" href="#">
              ${drop.name}
              </a>
            </div>`;
              })
              .join("")}
         </div>

          </div>
          
          
          
          `;
        } else {
          return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
            <a class="flex flex-wrap items-center gap-x-[4px] text-white hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
            
            <img class="w-[20px] h-[20px] " src=${item.svg} alt=${item.alt}>
              ${item.name}
            </a>
          </div>`;
        }
      } else if (item.svgtag === "ui-icon-fire") {
        return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
            <a class="flex flex-wrap items-center gap-x-[4px] text-white group hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
            
            <svg class=" w-[24px] h-[24px] group-hover:fill-[#f9ad03]" viewBox="0 0 24 24"><g id="ui-icon-fire" viewBox="0 0 20 20">
            <path d="M14.9817 9.29572C14.7793 9.03171 14.5329 8.8029 14.3041 8.57409C13.7145 8.04606 13.0456 7.66764 12.4824 7.11321C11.486 6.13683 11.079 4.67766 11.3079 3.31885C11.3932 2.81244 10.953 2.3161 10.5056 2.56826C10.1542 2.76632 9.82751 2.99853 9.52546 3.24102C7.24615 5.07151 6.3485 8.30127 7.42216 11.0734C7.45736 11.1614 7.49256 11.2494 7.49256 11.3638C7.49256 11.5574 7.36055 11.7334 7.18455 11.8039C6.98214 11.8919 6.77092 11.8391 6.60372 11.6982C6.55091 11.6542 6.51571 11.6102 6.48051 11.5486C6.02925 10.9776 5.75014 10.2942 5.64237 9.58309C5.54699 8.9538 4.70017 8.51622 4.43263 9.09373C3.98868 10.052 3.77785 11.1298 3.84038 12.1735C3.89318 12.6135 3.94598 13.0535 4.09559 13.4935C4.2188 14.0216 4.45641 14.5496 4.72042 15.016C5.67087 16.5385 7.31655 17.6297 9.08544 17.8498C10.9687 18.0874 12.984 17.7442 14.4273 16.4417C16.0378 14.9808 16.601 12.6399 15.7738 10.6334L15.6594 10.4046C15.4746 9.99976 14.9817 9.29572 14.9817 9.29572ZM12.2008 14.84C11.9544 15.0512 11.5496 15.28 11.2327 15.368C10.5182 15.6232 9.80358 15.4344 9.24326 15.0899C8.97628 14.9257 9.0751 14.5425 9.34969 14.3914C9.99764 14.0349 10.3962 13.4412 10.5375 12.8423C10.6871 12.1383 10.4055 11.5574 10.2911 10.8798C10.2373 10.5481 10.2155 10.2415 10.2384 9.94018C10.2647 9.59462 10.6858 9.56464 10.8834 9.84938C10.9196 9.90155 10.9568 9.95182 10.9951 9.99976C11.6728 10.8798 12.7376 11.267 12.9664 12.4639C13.0016 12.5871 13.0192 12.7103 13.0192 12.8423C13.0456 13.5639 12.7288 14.356 12.2008 14.84Z" fill="url(#paint0_radial_923_68543)"></path>
            <defs>
            <radialGradient id="paint0_radial_923_68543" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13 21.5005) rotate(-115.942) scale(20.573 28.2969)">
            <stop stop-color="#F58540"></stop>
            <stop offset="0.541667" stop-color="#F99F3E"></stop>
            <stop offset="1" stop-color="#FEC23B"></stop>
            </radialGradient>
            </defs>
            </g></svg>
              ${item.name}
            </a>
          </div>`;
      } else if (item.svgtag === "icon-school") {
        return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
            <a class="flex flex-wrap items-center gap-x-[4px] text-white group hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
            
            <svg class="fill-white w-[24px] h-[24px] group-hover:fill-[#f9ad03]" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.7471 15.0152C20.71 14.9917 20.7094 14.9619 20.7088 14.9335L20.7085 14.9229C20.7004 14.7153 20.6691 14.5106 20.627 14.3074C20.437 13.3978 20.0721 12.5655 19.4694 11.8383C19.2029 11.5166 18.8959 11.2356 18.5477 11.0005C18.1155 10.7088 17.6819 10.4181 17.241 10.1391C16.1661 9.45871 15.0632 8.8235 13.9467 8.20948C13.0418 7.7116 12.1284 7.22911 11.1945 6.78379C10.835 6.61186 10.4735 6.44325 10.0987 6.30386C9.96258 6.25312 9.82426 6.20577 9.68356 6.16861C9.50319 6.12068 9.3201 6.12507 9.13939 6.17788C9.03793 6.20776 8.9477 6.25709 8.86786 6.3248C8.85347 6.33703 8.83859 6.34854 8.81968 6.36317L8.79142 6.38515C8.79316 6.37422 8.79423 6.36512 8.79516 6.35729L8.79516 6.35728C8.79681 6.3433 8.79798 6.33335 8.80163 6.32422C9.20723 5.31744 9.80902 4.44848 10.6978 3.78281C11.1491 3.44493 11.6515 3.20166 12.1935 3.03363C12.3513 2.98446 12.506 2.99497 12.6631 3.02833C12.8721 3.07303 13.0707 3.14678 13.2679 3.22575C13.7621 3.42374 14.2421 3.65253 14.7167 3.89141C16.1828 4.62934 17.6093 5.43382 18.9855 6.32133C19.3162 6.53464 19.6408 6.75622 19.9523 6.99602C20.0935 7.10453 20.2259 7.22216 20.351 7.34781C20.4464 7.44308 20.5105 7.5554 20.5488 7.6823C20.6306 7.95197 20.673 8.22894 20.7038 8.50764C20.8191 9.551 20.851 10.5978 20.8579 11.6462C20.8626 12.3896 20.857 13.1328 20.8234 13.8757C20.8118 14.1296 20.7946 14.3834 20.7773 14.6371L20.7773 14.6376C20.7698 14.7484 20.7622 14.8591 20.7552 14.9699C20.7548 14.9773 20.7533 14.9847 20.7512 14.9944L20.7512 14.9944C20.75 15.0003 20.7485 15.007 20.7471 15.0152ZM14.1533 20.3588C13.7899 20.5327 13.4234 20.6999 13.045 20.8418C13.0991 20.5394 13.2081 19.6916 12.7595 18.7589C12.293 17.7893 11.5108 17.3239 11.238 17.1774C11.238 17.1774 14.0733 15.7034 15.1411 15.0891C16.072 14.5532 16.9945 14.0036 17.8864 13.4073C18.1238 13.2486 18.3568 13.0831 18.5856 12.9129C18.7181 12.8145 18.8451 12.7075 18.9628 12.5927C19.1201 12.4394 19.2176 12.2516 19.2427 12.0339C19.2484 11.9831 19.2429 11.9308 19.2375 11.8791L19.236 11.8641C19.2333 11.8378 19.2274 11.8119 19.2198 11.7781L19.2198 11.778L19.2197 11.7776C19.2158 11.7604 19.2114 11.7411 19.2068 11.7187C19.2195 11.7306 19.2292 11.7395 19.237 11.7465L19.237 11.7465L19.237 11.7465L19.237 11.7465L19.2371 11.7466C19.2493 11.7577 19.2566 11.7643 19.2626 11.7717C19.8065 12.4279 20.212 13.1545 20.4432 13.9694C20.5586 14.3746 20.6162 14.7883 20.621 15.2084C20.6255 15.5716 20.5762 15.9295 20.4985 16.2841C20.4737 16.397 20.423 16.5003 20.3438 16.5865C20.2578 16.6803 20.1697 16.7735 20.0738 16.8573C19.8438 17.0586 19.592 17.2339 19.3391 17.4066C18.6205 17.897 17.8759 18.3475 17.1209 18.7824C16.1505 19.3416 15.1661 19.8751 14.1533 20.3588ZM8.07684 20.6392L9.61375 18.8289C10.8451 19.5824 10.6784 20.7516 10.645 20.9856L10.643 21H8.25158C8.05981 21 7.95469 20.7829 8.07684 20.6392ZM8.38959 15.5583C8.39937 15.7507 8.15125 15.8425 8.02494 15.6938L6.36162 13.7348C6.27829 13.637 6.12363 13.6379 6.04209 13.7371L4.40541 15.7243C4.28446 15.8713 4.04102 15.7905 4.03829 15.603C4.02161 14.4008 3.98611 11.5985 4.00578 10.6796C4.0171 10.1601 4.04221 9.64066 4.08256 9.12216C4.10971 8.77004 4.13899 8.41759 4.20292 8.06952C4.22743 7.93593 4.25935 7.80324 4.29493 7.67204C4.32591 7.5574 4.41639 7.38929 4.50066 7.3037C4.65268 7.14833 4.81994 7.00985 4.99435 6.87981C5.42888 6.55551 5.88317 6.25917 6.34468 5.97286C7.7077 5.12691 9.10825 4.34453 10.5554 3.64194C10.6434 3.59952 10.7321 3.55848 10.8208 3.51742C10.8527 3.50264 10.8847 3.48786 10.9166 3.473C10.9205 3.4713 10.9249 3.47083 10.9313 3.47013C10.9358 3.46963 10.9414 3.46902 10.9486 3.46779C10.9362 3.50878 10.9088 3.52466 10.883 3.53958C10.8765 3.54336 10.87 3.54708 10.864 3.55114C10.0759 4.0804 9.45886 4.75881 9.00457 5.57687C8.75245 6.03063 8.58161 6.51279 8.49777 7.02235C8.46662 7.21248 8.449 7.40493 8.43461 7.59631C8.37912 8.33482 8.3266 9.07366 8.30353 9.81366C8.26744 10.9882 8.25459 12.1625 8.28446 13.3374C8.29136 13.6155 8.35171 14.8154 8.38959 15.5583Z"></path></svg>
              ${item.name}
            </a>
          </div>`;
      } else if (item.svgtag === "icon-horse") {
        if (item.dropdown) {
          return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px] relative group">
                <a class="w-full h-full flex flex-wrap items-center gap-x-[4px] text-white group-hover:text-[#f9ad03] ease-out text-[11px] font-thin " href="${
                  item.link
                }">
                <svg class="fill-white w-[24px] h-[24px] group-hover:fill-[#f9ad03]" viewBox="0 0 24 24"><g id="icon-horse">
                <path d="M6.25015 8.39496C6.51482 8.48643 6.67713 8.75266 6.63743 9.02979L5.4822 17.0783C6.35602 17.4208 7.21972 17.6956 8.07719 17.9031C8.07719 14.9984 10.3151 13.1186 12.7351 13.1186C13.9818 13.1186 15.1538 13.6017 16.0358 14.4786C16.8496 15.2886 17.3265 16.3442 17.3953 17.4769C18.2244 17.2017 19.0597 16.8634 19.9043 16.4621L18.9289 9.74637C18.8838 9.43732 18.6121 9.20417 18.2964 9.20417H12.6137C12.2859 9.20417 12.025 8.93435 12.0298 8.61137C12.0976 4.13068 10.7512 2.78679 9.03174 2.02522C8.83264 1.93702 8.61075 2.09178 8.6234 2.30916L8.68789 3.41668C8.71202 3.69536 8.58708 3.96821 8.35821 4.13286C8.26231 4.20187 8.50554 4.10487 4.49122 5.53253C3.80831 5.77595 3.52608 6.57979 3.90192 7.16301C4.33673 7.83435 4.89753 7.92855 6.25015 8.39496Z"></path>
                <path d="M2 17.3057V19.2199C2 19.355 2.07866 19.4772 2.20096 19.5346C8.07766 22.2886 15.838 22.2886 21.7274 19.5341C21.8498 19.4769 21.9285 19.3545 21.9285 19.2193V17.3152C21.9285 17.0544 21.6512 16.8872 21.4204 17.0088C15.1563 20.3083 9.1784 20.4761 2.50643 16.9983C2.27589 16.8781 2 17.0457 2 17.3057H2Z"></path>
            </g></svg>
            
              ${item.name}
            
              ${item.arrow}
                  
                      </a>
                      <div class="dropdown min-w-[333px] hidden flex-wrap items-center justify-start bg-[#1a1a1a] group-hover:flex ease-linear absolute right-0 top-[52px]">
                      ${item.dropdown
                        .map((drop) => {
                          return `<div class="dropdown__main w-[50%]">
                        <a class="block px-[7px] py-[10px] hover:text-[#f9ad03] text-[#e0e0e0] text-[11px]" href="#">
                        ${drop.name}
                        </a>
                      </div>`;
                        })
                        .join("")}
                   </div>
                  </div>`;
        } else {
          return `
                <div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
                  <a class="flex flex-wrap items-center gap-x-[4px] text-white group hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
                  
                  <svg class="fill-white w-[24px] h-[24px] group-hover:fill-[#f9ad03]" viewBox="0 0 24 24"><g id="icon-horse">
                  <path d="M6.25015 8.39496C6.51482 8.48643 6.67713 8.75266 6.63743 9.02979L5.4822 17.0783C6.35602 17.4208 7.21972 17.6956 8.07719 17.9031C8.07719 14.9984 10.3151 13.1186 12.7351 13.1186C13.9818 13.1186 15.1538 13.6017 16.0358 14.4786C16.8496 15.2886 17.3265 16.3442 17.3953 17.4769C18.2244 17.2017 19.0597 16.8634 19.9043 16.4621L18.9289 9.74637C18.8838 9.43732 18.6121 9.20417 18.2964 9.20417H12.6137C12.2859 9.20417 12.025 8.93435 12.0298 8.61137C12.0976 4.13068 10.7512 2.78679 9.03174 2.02522C8.83264 1.93702 8.61075 2.09178 8.6234 2.30916L8.68789 3.41668C8.71202 3.69536 8.58708 3.96821 8.35821 4.13286C8.26231 4.20187 8.50554 4.10487 4.49122 5.53253C3.80831 5.77595 3.52608 6.57979 3.90192 7.16301C4.33673 7.83435 4.89753 7.92855 6.25015 8.39496Z"></path>
                  <path d="M2 17.3057V19.2199C2 19.355 2.07866 19.4772 2.20096 19.5346C8.07766 22.2886 15.838 22.2886 21.7274 19.5341C21.8498 19.4769 21.9285 19.3545 21.9285 19.2193V17.3152C21.9285 17.0544 21.6512 16.8872 21.4204 17.0088C15.1563 20.3083 9.1784 20.4761 2.50643 16.9983C2.27589 16.8781 2 17.0457 2 17.3057H2Z"></path>
                  </g></svg>
                  ${item.name}
                  </a>
               </div>`;
        }
      } else if (item.svgtag === "search") {
        return `


        <div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
            <a class="flex flex-wrap items-center gap-x-[4px] text-white group hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
            
            <svg class="fill-white w-[20px] h-[20px] group-hover:fill-[#f9ad03]" viewBox="0 0 24 24">
            <g id="ui-icon-search" viewBox="0 0 24 24"><path d="M19.16 4.84a8 8 0 0 0-12 10.56l-4.4 4.39a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L8.6 16.82a8 8 0 0 0 10.56-12Zm-1.42 9.9a6 6 0 1 1 0-8.48A6 6 0 0 1 17.74 14.74Z"></path></g></svg>
              ${item.name}
            </a>
          </div>


        
          `;
      } else if (item.dropdown) {
        return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px] relative group">
                    <a class="flex flex-wrap items-center gap-x-[4px] text-white hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${
                      item.link
                    }">
              
                ${item.name}
              ${item.arrow}
               
              </a>
              <div class="dropdown min-w-[333px] hidden flex-wrap items-center justify-start bg-[#1a1a1a] group-hover:flex ease-linear absolute right-0 top-[52px]">
              ${item.dropdown
                .map((drop) => {
                  return `<div class="dropdown__main w-[50%]">
                <a class="block px-[7px] py-[10px] hover:text-[#f9ad03] text-[#e0e0e0] text-[11px]" href="#">
                ${drop.name}
                </a>
              </div>`;
                })
                .join("")}
           </div>
            </div>`;
      } else {
        return `<div class="h-[inherit] py-[14px] flex flex-wrap items-center ml-[18px]">
                    <a class="text-white hover:text-[#f9ad03] ease-out text-[11px] font-thin" href="${item.link}">
                      ${item.name}
                    </a>
                  </div>`;
      }
    });
    document
      .querySelector(".menu nav .submenu")
      .insertAdjacentHTML("beforeend", submenu.join(""));

    let log = await axios.get("https://rmeanhd.github.io/Filimo-database/login.json");

    login = log.data.map((item) => {

      if (item.name === "خرید اشتراک") {
        return `

          <a class:"tablet:hidden mobile:flex" href="#">

          <svg class="mobile:w-[24px] mobile:h-[24px] tablet:hidden fill-white" viewBox="0 0 24 24"><use xlink:href="#ui-icon-search"></use></svg>
        </a>
                
                <button class="btn btn-sm btn-success px-[16px] py-[10px] flex items-center justify-center w-[125px] h-[40px] rounded-[4px]"> <a class="w-full h-full flex flex-wrap items-center justify-center text-white text-[11px] font-light" href="${item.link}">
          ${item.name}
          </a></button>
              
            
      `;
      } else {
        return `

        
        <button class="h-[40px] btn btn-sm bg-white/20 rounded-[4px] w-[54px]">
        <a class="w-full h-full flex flex-wrap items-center justify-center text-white text-[11px] font-light" href="${item.link}">
        ${item.name}
        </a>
        </button>      
     
              
        `;
      }
    });
    document
      .querySelector(".menu nav .login")
      .insertAdjacentHTML("beforeend", login.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Menu;
