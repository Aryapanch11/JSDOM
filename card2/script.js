var btn = document.querySelector('button')
var h3 = document.querySelector('h3')

btn.addEventListener('click',function(){
    h3.innerHTML =" Request pending...."
    h3.style.color = "yellow"
    btn.innerHTML=" pending"
    btn.style.color ="yellow"

    setTimeout(function(){
        h3.innerHTML ="Friends"
        h3.style.color ="green"
        btn.innerHTML="Remove Friend"
        btn.style.color ="red"
    
    },3000)
})