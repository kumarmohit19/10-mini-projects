const btn = document.getElementById('btn')

btn.addEventListener('click',() =>{
    var color = changeBackground();
    document.body.style.background=color;
    btn.style.color=color;
    // console.log(changeBackground())
});


function changeBackground(){
    return 'hsl('+Math.floor(Math.random()*360)+',100%,50%)'
}