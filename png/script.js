var body = document.querySelector('body')
var btn = document.querySelector('button')

var btfly =['https://freepngimg.com/thumb/butterfly/19-blue-butterfly-png-image.png',
    'https://freepngimg.com/thumb/butterfly/54-flying-butterfly-png-image.png',
    'https://freepngimg.com/thumb/butterfly/48-pink-butterfly-png-image-butterflies.png',
    'https://www.nicepng.com/png/full/1-16703_butterfly-butterfly-png-hd-colors.png',
    'https://freepngimg.com/thumb/butterfly/60-pink-butterfly-png-image-butterflies.png',
    'https://freepngimg.com/thumb/butterfly/62-butterfly-png-image.png',
    'https://freepngimg.com/thumb/butterfly/67-orange-butterfly-png-image-butterflies-download.png']

btn.addEventListener('click',function(){

    var img = document.createElement('img')

    var valueX = Math.random()*97
    var valueY = Math.random()*96    
    var rot = Math.random()*360   
    var num = Math.floor(Math.random()*btfly.length) 

   
    img.setAttribute('src',btfly[num])
    img.style.height ='200px'
    img.style.position ='absolute'
    img.style.left = valueX + '%'
    img.style.top =  valueY + '%'
    img.style.rotate = rot +'deg'

    

    body.appendChild(img)

})