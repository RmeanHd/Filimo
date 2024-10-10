const Frequent = async () => {

  try {

  
    function toggle(){
      
        let tab = document.querySelectorAll(".question__tab");
          tab.forEach((q) => {
          q.addEventListener("click", () => {
            let svg = q.querySelector(".question__svg");
            let answer = q.querySelector(".answer");
            let text = q.querySelector(".question__text")
            q.classList.add("duration-1000");
            q.classList.add("transition-[height]");
            q.classList.add("ease-out");
            q.classList.add("h-auto");
            if (answer.classList.contains("hidden")){
              svg.classList.add("rotate-45");
              answer.classList.remove("hidden");
              answer.classList.add("block");
              answer.classList.add("transition-all");
              answer.classList.add("duration-150");
              answer.classList.add("ease-in-out");
              answer.classList.add("auto");
              answer.classList.add("overflow-hidden");
              text.classList.add("text-[#f4843f]");
              text.classList.add("duration-150");
              text.classList.add("ease-linear");
              text.classList.remove("text-white");
            } else{
              svg.classList.remove("rotate-45");
              answer.classList.remove("block");
              answer.classList.add("hidden");
              text.classList.remove("text-[#f4843f]");
              text.classList.add("text-white");
            } 
            
  
          });
        });
    }

    
  
    let res = await axios.get("https://rmeanhd.github.io/Filimo-database/frequent.json");
    let frequent = res.data.map((item) => {
      return `
      <div class="w-full text flex flex-wrap justify-center mb-8">
            <div
              class="title w-full font-normal text-[16px] text-white text-center mb-3"
            >
             ${item.title}
            </div>
            <div
              class="title w-full font-normal text-[12px] text-[#9e9e9e] text-center mb-8"
            >
              ${item.subtitle}
            </div>
           
            ${item.tab.map((tab)=>{
              return `
              <div
              class="question__tab overflow-hidden mb-2 tablet:max-w-[600px] mobile:max-w-[390px] w-full laptop:max-w-[1200px] h-[55px] rounded-xl border-[1px] border-solid border-[#33353d] bg-[#ffffff05] cursor-pointer flex flex-wrap items-center p-[16px]">
              <div
                class="w-full question flex flex-wrap items-center justify-between"
              >
                <div class="question__text text-[13px] text-white font-bold">
                  ${tab.question}
                </div>
                <svg
                  class="w-[14px] h-[14px] fill-[#ff9800] question__svg ease-linear duration-150"
                  viewBox="0 0 24 24"
                >
                  <g id="ui-icon-close" viewBox="0 0 24 24">
                    <path
                      d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59 5.71 4.29A1 1 0 0 0 4.29 5.71L10.59 12l-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                class="answer w-full text-[12px] pt-[16px] text-right ease-linear duration-150 hidden"
              >${tab.answer}
                <a
                  href="https://www.aparat.com/v/d2fri/"
                  class="text-[#fdc13c] font-medium mx-1"
                >
                ${tab.link1}
                </a>
                
                <a
                  href="https://www.aparat.com/v/d2fri/"
                  class="text-[#fdc13c] font-medium mx-1"
                >
                ${tab.link2}

                </a>
                ${tab.endtext}
              </div>
            </div>`
            }).join("")}
           
           
            
          </div>`
    });
    document
      .querySelector(".frequent")
      .insertAdjacentHTML("beforeend", frequent.join(""));
      toggle()
  } catch (error) {
    console.log(error.message);
  }
};
export default Frequent;
