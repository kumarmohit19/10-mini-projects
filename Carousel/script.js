const img = document.querySelectorAll('#imgs img');
const imgs = document.getElementById('imgs');

let index = 0

function run(){
    index++;
    if (index > img.length-1){
        index=0;
    }
    imgs.style.transform='translateX('+(-index*500)+'px)';
    // let idx = -index*500+'px';
    // console.log(idx + img.length)
    // imgs.style.transform='translateX('+idx+')';
}
setInterval(run,2000);