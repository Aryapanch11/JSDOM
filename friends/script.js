var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
moveX =0

document.addEventListener('keydown',function(dets){
    if( dets.code == 'ArrowRight'){
        moveX++
       img1.style.left = moveX + "%"
       img2.style.right = moveX + "%"
    }
    else if(dets.code == 'ArrowLeft'){
        moveX--
        img1.style.left = moveX + "%"
        img2.style.right = moveX + "%"
     }  

})