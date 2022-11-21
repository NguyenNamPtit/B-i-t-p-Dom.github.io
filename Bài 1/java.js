const icondownEl = document.querySelector(".list-icon");

icondownEl.addEventListener("click", ()=>{
    const element = document.querySelector(".info-1");
    element.classList.toggle("active");
});
const icondown2El = document.querySelector(".list-icon-1");

icondown2El.addEventListener("click", ()=>{
    const elementt = document.querySelector(".info-2");
    elementt.classList.toggle("active");
});
const icondown3El = document.querySelector(".list-icon-2");

icondown3El.addEventListener("click", ()=>{
    const elementt = document.querySelector(".info-3");
    elementt.classList.toggle("active");
});