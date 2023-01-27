const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");

let idx2 = 0;

function carrossel2(){
   
    idx2++;

    if(idx2 > img2.length - 1){
         idx2 = 0;
    }
    
    imgs2.style.transform = `translateX(${-idx2 * 950}px)`;

    if (window.matchMedia("(max-width:950px)").matches) {
        imgs2.style.transform = `translateX(${-idx2 * (innerWidth+8)}px)`;
    }
}

setInterval(carrossel2, 2300);





