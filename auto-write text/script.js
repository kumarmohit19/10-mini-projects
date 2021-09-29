const text = 'This is my First Auto write block, Thanks for Watching!!'

let index =0

function autowrite(){
    document.body.innerText=text.slice(0,index)

    index++;
    if(index == text.length+1){
        index=0
    }
}

setInterval(autowrite,200)