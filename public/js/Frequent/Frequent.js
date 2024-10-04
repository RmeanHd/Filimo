const Frequent = async () => {
  try {
    document.addEventListener("DOMContentLoaded", () => {
        let tab = document.querySelectorAll(".question__tab");
  
        tab.forEach((q) => {
          q.addEventListener("click", () => {
            let svg = q.querySelector(".question__svg");
            let answer = q.querySelector(".answer");
            let text = q.querySelector(".question__text")
            if (answer.classList.contains("hidden")){
              svg.classList.add("rotate-45");
              answer.classList.remove("hidden");
              answer.classList.add("block");
              text.classList.add("text-[#f4843f]");
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
      });
  
    let res = await axios.get("http://localhost:3000/frequent");
    let frequent = res.data.map((item) => {
      return `
            
          `;
    });
    document
      .querySelector(".frequent")
      .insertAdjacentHTML("beforeend", frequent.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Frequent;
