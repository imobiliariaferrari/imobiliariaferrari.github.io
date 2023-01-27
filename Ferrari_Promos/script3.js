const imgs3 = document.getElementById("img3");
const img3 = document.querySelectorAll("#img3 img");

let idx3 = 0;

function carrossel3(){
   
    idx3++;

    if(idx3 > img3.length - 1){
         idx3 = 0;
    }
    
    imgs3.style.transform = `translateX(${-idx2 * 950}px)`;

    if (window.matchMedia("(max-width:950px)").matches) {
        imgs3.style.transform = `translateX(${-idx3 * (innerWidth+8)}px)`;
    }
}

setInterval(carrossel3, 2300);





