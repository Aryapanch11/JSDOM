 var users =[
  {
    name:'Arya',
    age:21,
    city:'Bhopal'
  },
  {
    name:'Archi',
    age:22,
    city:'Delhi'
  },
  {
    name:'Antra',
    age:16,
    city:'Indore'
  },
]
var sum =''
users.forEach(function(elem){
    sum += ` <div class="card">
        <h2>${elem.name}</h2>
        <h4>${elem.age},${elem.city}</h4>
        <p>She’s a blend of strength and grace, carving her path with passion and purpose</p>  
    </div>`
})
var body = document.querySelector('body')

body.innerHTML = sum