function handleFormSubmit(event)
{
  event.preventDefault();
let myObj={
   email: event.target.email.value,
   phone : event.target.phone.value,
     username: event.target.username.value

 }
let m=JSON.stringify(myObj)
localStorage.setItem("User Details", m)
const li1=document.createElement('li');
 

  
  const t1=document.createTextNode(event.target.username.value+" "+event.target.email.value+" "+event.target.phone.value)
  li1.appendChild(t1);
   

const u=document.querySelector('ul');
  u.appendChild(li1)
   
const b=document.createElement('button')
  const bt=document.createTextNode('Delete')
  b.appendChild(bt)
  b.className='del'
  li1.appendChild(b)
  u.addEventListener('click',function(event){
  if(event.target.classList.contains('del'))
    {
      const fruitsToDelete=event.target.parentElement;
      console.log(fruitsToDelete)
      u.removeChild(fruitsToDelete)
      localStorage.removeItem("User Details")

    }
})
}

