var friends =[
    {
        name:'sarthak',
        weight:69
    },
    {
        name:'Harsh',
        weight:50
    },
    {
        name:'sarthak',
        weight:45
    },
    {
        name:'sarthak',
        weight:67
    },
    {
        name:'sarthak',
        weight:98
    },
    {
        name:'sarthak',
        weight:99
    },
    {
        name:'sarthak',
        weight:60
    },
    
]
var totalweight = 0;

friends.forEach(function(elem){
    totalweight += elem.weight
})
console.log(totalweight)
if (totalweight<500){
    console.log("lift se aao")
}
else{
    console.log("sidhee se aao")
}  
