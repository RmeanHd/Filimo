const Comment = async () => {
    try {
      let res = await axios.get("https://rmeanhd.github.io/Filimo-database/comments.json");
      let comments = res.data.map((item) => {
          return `
          <div class="comments__main px-[60px] w-full max-w-[1450px] h-[260px] relative">
          <div class="comments__title w-full mb-10 justify-between ">
            <div
              class="w-full text-white font-bold leading-6 text-[17px] text-right"
            >
              ${item.title}
            </div>
            <div class="w-[100px] absolute mobile:hidden mobileL:block tablet:left-[50px] top-4">
              <div
                class="swiper-button-next w-[40px] h-[40px] bg-black/[0.4] size-0 flex flex-wrap items-center justify-center rounded-[50%] text-white"
              ></div>
              <div
                class="swiper-button-prev w-[40px] h-[40px] bg-black/[0.4] size-0 flex flex-wrap items-center justify-center rounded-[50%] text-white"
              ></div>
            </div>
          </div>
          <div class="slider w-full h-[200px]">
            <div class="swiper myComment">
              <div class="swiper-wrapper">
               ${item.slider.map((slide)=>{
                return `
                <div
                class="swiper-slide w-full h-[190px] bg-[#ffffff05] rounded-xl p-6 border-[1px] border-solid border-[#33353d] flex flex-wrap items-start justify-center"
              >
                <div
                  class="user w-full h-full flex flex-wrap items-start justify-between"
                >
                  <div
                    class="username leading-[24px] flex flex-wrap items-center justify-between text-[#959ba2] text-[14px]"
                  >
                    <img
                      class="w-[24px] h-[24px] ml-2"
                      src=${slide.profile}
                    />
                    ${slide.username}
                  </div>
                  <div class="comma">
                    <img
                      class="w-[40px] h-[34px]"
                      src="https://www.filimo.com/assets/web/ui/img-KpotX5g2dIxoRKAEJGUuJA/campaigns/big-screen_v2/virgol.png"
                      alt=""
                    />
                  </div>
                  <div
                    class="text w-full h-[75px] text-right font-normal leading-[18px] text-[11px] text-[#f9f9f9]"
                  >
                    ${slide.text}
                  </div>
                </div>
              </div>`
               }).join("")}
              </div>
            </div>
          </div>
        </div>
          `
      });document
      .querySelector(".comments")
      .insertAdjacentHTML("beforeend", comments.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  export default Comment;
  