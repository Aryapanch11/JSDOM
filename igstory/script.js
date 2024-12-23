var arr =[
    {
        dp:"https://i.pinimg.com/736x/ab/a4/fe/aba4fea819b33066078a81f7272792e6.jpg",
        story :'https://i.pinimg.com/736x/f2/da/c3/f2dac314c264c32deb28d1a8327e9019.jpg',
        username:'Rashmika_mandana01'
    },
    {
        dp:"https://i.pinimg.com/736x/bb/87/70/bb87702a9bfa951f7ad9c120a40de1f1.jpg",
        story :'https://i.pinimg.com/736x/dd/b6/9b/ddb69b3e83fc39fcc2a38e5b07095dec.jpg',
        username:'Saipallavi__23'
    },
    {
        dp:"https://i.pinimg.com/736x/16/9b/83/169b83626589d012bb61a5ee80cd57e6.jpg",
        story :'https://i.pinimg.com/736x/3f/82/0d/3f820db6497aa2042d081cd6b32c0fa5.jpg',
        username:'Kalyani__13'
    },
    {
        dp:"https://i.pinimg.com/736x/6b/d8/f0/6bd8f02f5a1ca34526f99f098b6a1526.jpg",
        story :'https://i.pinimg.com/736x/5f/88/55/5f88559e99a7099c5d9f8be1805e410b.jpg',
        username:'Mrunal_Thakur'
    },
    {
        dp:"https://i.pinimg.com/736x/af/e9/22/afe922b5d8e2bc46002028db16ac113f.jpg",
        story :'https://i.pinimg.com/736x/65/7e/e2/657ee2f0887f150dce9348ada718cdd5.jpg',
        username:'Sammantha__33'
    },
    {
        dp:"https://i.pinimg.com/736x/43/ba/06/43ba06b491f1f71cca4d4ea34c1ee9e2.jpg",
        story :'https://i.pinimg.com/736x/1b/10/e6/1b10e6ab274413f1e09c55062401e9d6.jpg',
        username:'Katrina_kaif2'
    },
    {
        dp:"https://i.pinimg.com/736x/cd/90/4f/cd904fc3ba3e063adc0ea346023209d1.jpg",
        story :'https://i.pinimg.com/736x/35/5b/0a/355b0a181d350efd7275c825973a240e.jpg',
        username:'Shraddha_Kappor01'
    },
    {
        dp:"https://i.pinimg.com/736x/65/bf/dc/65bfdc853c99271251594a3a3d698bb4.jpg",
        story :'https://i.pinimg.com/736x/c7/9f/b3/c79fb34930a0dd2be565513fccaca46d.jpg',
        username:'Keerthy__07'
    },

]
 sum = ""
var storyian = document.querySelector('#storyian')
var full = document.querySelector('.full')
var fulluser =document.querySelector('.full h2')
arr.forEach(function(elem,idx){
     sum += ` <div class="story">
                <img id=${elem,idx} src= ${elem.dp} alt="">
            </div>`
})

storyian.innerHTML = sum

storyian.addEventListener('click',function(dets){
     var grow =0

     var str= arr[dets.target.id]

     var int = setInterval(function(){
         grow++
         growth.style.width = grow +'%'
     },30)
     full.style.display = 'block'
     full.style.backgroundImage = `url(${str.story})`
     fulluser.innerHTML = str.username

     setTimeout(function(){
         full.style.display ='none'
        clearInterval(int)
     },3000)
})