// const onbutton = document.querySelector('.on')
// const offbutton = document.querySelector('.off')
const switchbutton = document.querySelector('.switch')
const circle =document.querySelector('.circle')

// onbutton.addEventListener('click',() => {
//     circle.style.backgroundColor ='yellow'
// })

// offbutton.addEventListener('click',() => {
//     circle.style.backgroundColor ='black'
// })
let bulb = 'off'
switchbutton.addEventListener('click',() =>{
    if (bulb =="off"){
        circle.style.backgroundColor ="yellow"
        switchbutton.textContent ="OFF"
        bulb = 'on'
    }
    else{
        circle.style.backgroundColor ="black"
        switchbutton.textContent ="ON"
        bulb ='off'
    }

})



