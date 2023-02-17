const imgs4 = document.getElementById("img4");
const img4 = document.querySelectorAll("#img4 img");

let idx4 = 0;

function carrossel4(){
   
    idx4++;

    if(idx4 > img4.length - 1){
         idx4 = 0;
    }
    
    imgs4.style.transform = `translateX(${-idx4 * 1200}px)`;

    if (window.matchMedia("(max-width:950px)").matches) {
        imgs4.style.transform = `translateX(${-idx4 * (innerWidth+8)}px)`;
    }
}

setInterval(carrossel4, 2700);





