const circle = document.querySelectorAll(".circle")
const checkBox = document.querySelectorAll(".checkbox")
for(let i = 0; i < circle.length; i++) {
    checkBox[i].addEventListener("click", () =>{
        if(!circle[i].classList.contains("forward")){
            circle[i].classList.add("forward");
            circle[i].classList.remove("backward")
        }
        else{
            circle[i].classList.add("backward")
            circle[i].classList.remove("forward");
            }
        }
    )
}
for(let i = 0; i < circle.length; i++) {
    checkBox[i].addEventListener("click", () =>{
        if(!checkBox[i].classList.contains("forward")){
            checkBox[i].classList.add("forward");
            checkBox[i].classList.remove("backward")
        }
        else{
            checkBox[i].classList.add("backward")
            checkBox[i].classList.remove("forward");

            }
        }
    )
}