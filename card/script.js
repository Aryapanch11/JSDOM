var btn = document.querySelector('.Friend')
var istatus = document.querySelector('h5')
var img = document.querySelector('img')


btn.addEventListener( 'click',function(){
 if (btn.textContent ==="Add Friend"){
  istatus.textContent = "Request sending..."
  istatus.style.color = "Yellow"
   btn.style.backgroundColor ="yellow"
   img.style.borderColor="yellow"
  btn.textContent = "Adding"

  setTimeout(function(){
   btn.style.backgroundColor ="green"
   istatus.innerHTML =" Friends"
   istatus.style.color ="green"
   img.style.borderColor="green"
   btn.textContent = "Remove Friend"
  },2000)
 }
 else{
  istatus.textContent = "Request sending..."
  istatus.style.color = "Yellow"
  img.style.borderColor="yellow"
  btn.style.backgroundColor ="yellow"
  btn.textContent = "Removing"

    setTimeout(function(){
    btn.style.backgroundColor ="red"
     istatus.innerHTML ="Stranger"
    istatus.style.color ="red"
    img.style.borderColor="red"
    btn.textContent = " Add Friend"

  },2000)
 }
})