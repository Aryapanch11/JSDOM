var arr =[
    {
        model:'sumsung',
        price:50000,
        color:'black',
        quantity:43
    },
    {
        model:'Iphone 13',
        price:70000,
        color:'black',
        quantity:64
    },
     {
        model:'One plus',
        price:10000,
        color:'black',
        quantity:54
    } 
]
var totBill=0;

arr.forEach(function(elem){
    tot += elem.quantity *elem.price
})

console.log(totBill)