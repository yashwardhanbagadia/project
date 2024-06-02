function handleFormSubmit(event)
{
  event.preventDefault();
let myObj={
   exp: event.target.exp.value,
   des : event.target.des.value,
   cat: event.target.cat.value

 }
let m=JSON.stringify(myObj)
localStorage.setItem(myObj.exp, m)
const li1=document.createElement('li');
const t1=document.createTextNode(event.target.exp.value+" "+event.target.des.value+" "+event.target.cat.value)
li1.appendChild(t1);
const u=document.querySelector('ul');
u.appendChild(li1)
const b=document.createElement('button')
  const bt=document.createTextNode('Delete')
  b.appendChild(bt)
  b.className='del'
  li1.appendChild(b)
  const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    li1.appendChild(editBtn);
  u.addEventListener('click',function(event){
  if(event.target.classList.contains('del'))
    {
     
      u.removeChild(event.target.parentElement)
      localStorage.removeItem("User Details")

    }
})
editBtn.addEventListener("click", function (event) {
  u.removeChild(event.target.parentElement);
  localStorage.removeItem(myObj.exp)

  document.getElementById("exp").value = myObj.exp;
  document.getElementById("des").value = myObj.des;
  document.getElementById("cat").value = myObj.cat;
});
}

