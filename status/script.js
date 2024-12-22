var arr =[
    {
        profilepic : "https://i.pinimg.com/736x/d7/b3/94/d7b3943d5c7a166b587f0858f94463f7.jpg",
        name: 'Nobita',
        uploadtime: ' 23 minutes ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/17/aa/a2/17aaa2430a32809ea66040e3f8b482b2.jpg",
        name: 'Suniyo',
        uploadtime: ' 30 minutes ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/74/c2/b5/74c2b5a500e7c01cf4139945d1870263.jpg",
        name: 'Sizuka',
        uploadtime: ' 5 minutes ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/07/6c/d1/076cd13186b9f43a92792bd45ef1d9dd.jpg",
        name: 'Geyan',
        uploadtime: ' 2 hrs ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/4c/61/64/4c6164b1906e122ba539442e1a2fded0.jpg",
        name: 'ME chain',
        uploadtime: ' 4 hrs ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/61/0f/f1/610ff1212af4e0fc10ce35932879139b.jpg",
        name: 'Dorimi',
        uploadtime: ' 5 hrs ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/f3/be/1e/f3be1e978cf30abd65bf21aa89db6969.jpg",
        name: 'Doremon',
        uploadtime: ' 6 hrs ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/93/72/f0/9372f0016b4486c241619fd6a0505006.jpg",
        name: 'Dekizuki',
        uploadtime: ' 23 minutes ago'
    },
    {
        profilepic : "https://i.pinimg.com/736x/a7/11/5c/a7115c44daf82e953f834aee594c81c1.jpg",
        name: 'Jaiko',
        uploadtime: ' 23 minutes ago'
    }
]

 var statuscontainer =''
var allstatus = document.querySelector('.allstatus')
arr.forEach(function(elem){
    statuscontainer += ` <div class="status">
                    <img src="${elem.profilepic}">
                    <div class="data">
                      <h2>${elem.name}</h2>
                       <h4> ${elem.uploadtime}</h4>
                    </div>
                 </div>`
})

allstatus.innerHTML = statuscontainer