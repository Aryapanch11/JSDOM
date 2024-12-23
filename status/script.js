var arr =[
    {
        profilepic : "https://i.pinimg.com/736x/d7/b3/94/d7b3943d5c7a166b587f0858f94463f7.jpg",
        name: 'Nobita',
        uploadtime: ' 23 minutes ago',
        story:'https://i.pinimg.com/736x/a8/f0/e1/a8f0e1a445cd09a33def32b378031d3d.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/17/aa/a2/17aaa2430a32809ea66040e3f8b482b2.jpg",
        name: 'Suniyo',
        uploadtime: ' 30 minutes ago',
        story:'https://i.pinimg.com/736x/5a/3b/58/5a3b5872d829a54b8c8cfd5e1e78a3b5.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/74/c2/b5/74c2b5a500e7c01cf4139945d1870263.jpg",
        name: 'Sizuka',
        uploadtime: ' 5 minutes ago',
        story:'https://i.pinimg.com/736x/05/60/c0/0560c067c7a362188195fad01c1ea780.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/07/6c/d1/076cd13186b9f43a92792bd45ef1d9dd.jpg",
        name: 'Geyan',
        uploadtime: ' 2 hrs ago',
        story:'https://i.pinimg.com/736x/5f/26/30/5f263068d646a05b936412b5ee877389.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/4c/61/64/4c6164b1906e122ba539442e1a2fded0.jpg",
        name: 'ME chain',
        uploadtime: ' 4 hrs ago',
        story:"https://i.pinimg.com/736x/d7/4d/8c/d74d8ccc86b1948a4b054089d258e28f.jpg"
    },
    {
        profilepic : "https://i.pinimg.com/736x/61/0f/f1/610ff1212af4e0fc10ce35932879139b.jpg",
        name: 'Dorimi',
        uploadtime: ' 5 hrs ago',
        story:'https://i.pinimg.com/736x/61/0f/f1/610ff1212af4e0fc10ce35932879139b.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/f3/be/1e/f3be1e978cf30abd65bf21aa89db6969.jpg",
        name: 'Doremon',
        uploadtime: ' 6 hrs ago',
        story:'https://i.pinimg.com/736x/fa/dd/fe/faddfe057de0de39fd13435435cb4a29.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/93/72/f0/9372f0016b4486c241619fd6a0505006.jpg",
        name: 'Dekizuki',
        uploadtime: ' 23 minutes ago',
        story:'https://i.pinimg.com/originals/90/57/bd/9057bd53caec187b1c0e41a776488d79.jpg'
    },
    {
        profilepic : "https://i.pinimg.com/736x/a7/11/5c/a7115c44daf82e953f834aee594c81c1.jpg",
        name: 'Jaiko',
        uploadtime: ' 23 minutes ago',
        story:'https://i.pinimg.com/736x/7d/7a/ae/7d7aaec5eecedfa5f2380b62b78458ed.jpg'
    }
]

 var statuscontainer =''
var allstatus = document.querySelector('.allstatus')
var full =document.querySelector('.full')
arr.forEach(function(elem,index){
    statuscontainer += ` <div class="status" id="${index}">
                    <img src="${elem.profilepic}">
                    <div class="data">
                      <h2>${elem.name}</h2>
                       <h4> ${elem.uploadtime}</h4>
                    </div>
                 </div>`
           
})

allstatus.innerHTML = statuscontainer

var full =document.querySelector('.full')

allstatus.addEventListener('click',function(dets){
    var gold= arr[dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    setTimeout(function(){
        full.style.display ='none'
    },3000)
})