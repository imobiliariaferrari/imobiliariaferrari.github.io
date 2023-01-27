const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
   
    idx++;

    if(idx > img.length - 1){
         idx = 0;
    }
    
    imgs.style.transform = `translateX(${-idx * 950}px)`;

    if (window.matchMedia("(max-width:950px)").matches) {
        imgs.style.transform = `translateX(${-idx * (innerWidth+8)}px)`;
    }
}

setInterval(carrossel, 2300);





