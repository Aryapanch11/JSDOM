var teams=['CSK','GT','RCB','KKR','LSG','MI','SRH','PBKS','RR','DC']
var imgs =['https://i.pinimg.com/736x/10/28/45/102845c28bd32233a24934e2aed5e142.jpg','https://i.pinimg.com/736x/dc/43/7e/dc437ebc71fc8541ae9fbb711fc44931.jpg','https://i.pinimg.com/736x/8e/ea/15/8eea15a828b6fc88f3129ff2b48ef96b.jpg','https://i.pinimg.com/736x/c8/e9/e6/c8e9e65d1d2f9d2472dd64a875c5c238.jpg','https://i.pinimg.com/736x/6a/3a/37/6a3a37f1b80d9f3aceae0b43997d0e14.jpg','https://i.pinimg.com/736x/26/c1/bb/26c1bb87839b2dcdfa82c09b13b6acb3.jpg','https://i.pinimg.com/736x/dd/f4/8a/ddf48af7e7957a4e192a714d2a27131f.jpg','https://i.pinimg.com/736x/6a/90/75/6a9075c90746ca7d0f9de928546ef285.jpg','https://i.pinimg.com/736x/3c/b7/89/3cb7898be033622d2fcff689bbf96491.jpg','https://i.pinimg.com/736x/9a/2b/84/9a2b84a7f7bb32c454045715b1a3a2b7.jpg']
var btn = document.querySelector('.button')
var h1 =document.querySelector('h1')
var body = document.querySelector('.main')

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()* teams.length)
    h1.innerHTML =teams[num]
    body.style.backgroundImage = `url(${imgs[num]})`
    h1.style.color ='white'
    h1.style.fontFamily ='Distant Feeling'
})




