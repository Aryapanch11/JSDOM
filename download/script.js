var btn = document.querySelector('button')
var h1 =document.querySelector('h1')
var green = document.querySelector('.green')
var h2 = document.querySelector('h2')

var grow = 0
var random = Math.floor(Math.random()*100)

btn.addEventListener('click',function(){
   
    var progressing = setInterval(function(){
        grow++
        h1.innerHTML= grow +'%'
        green.style.width = grow +'%'
    },random)

    setTimeout(function(){
        clearInterval(progressing)    
        btn.innerHTML ='Downloaded'
        btn.style.opacity = 0.2
        btn.style.pointerEvents ='none'
        h2.innerHTML = `your File is download in ${random/10} seconds`
    },random*100)

 })