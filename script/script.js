// загрузка страницы
const array = ["media/winter.jpg", "media/spring.jpg", "media/summer.jpg", "media/fall.jpg"];
const imageNode = document.querySelector(".image");
const leftBtnNode = document.getElementById("left_btn");
const rightBtnNode = document.getElementById("right_btn");
imageNode.src = array[0];
let i = 0;


rightBtnNode.addEventListener("click", () => {
    if (i === array.length-1) {
        i = 0;
    } else {
        i++;
    };
    imageNode.src = array[i];
})

leftBtnNode.addEventListener("click", ()=> {
    if (i===0){
        i=array.length-1;
    }else{
       i--; 
    }
    imageNode.src = array[i];
 })