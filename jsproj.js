var count=0;

function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      url: event.target.url.value,
      blog: event.target.blog.value,
      phone: event.target.phone.value,
    };
   
    var b=document.querySelector("span")
    count+=1;

    b.innerHTML=count;

    document.getElementById("url").value = "";
    document.getElementById("blog").value = "";
    document.getElementById("phone").value = "";
    axios
    .post(
      "https://crudcrud.com/api/8f20ea72d19a435e86fed6b448703a6b/data",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));
    
  }
  
  function displayUserOnScreen(userDetails) {
    console.log(userDetails._id)
    const userItem = document.createElement("p");
    userItem.id=userDetails._id;
    img = document.createElement('img');

    img.src=userDetails.url;
    userItem.appendChild(img);
   userItem.appendChild(document.createElement("br"))
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.blog} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios
    .delete(
      `https://crudcrud.com/api/8f20ea72d19a435e86fed6b448703a6b/data/${event.target.parentElement.id}`
    
  ) .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
      
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      axios
    .delete(
      `https://crudcrud.com/api/8f20ea72d19a435e86fed6b448703a6b/data/${event.target.parentElement.id}`
    
  ) .then((response) => console.log(response.data))
  .catch((error) => console.log(error));
    
      document.getElementById("url").value = userDetails.url;
      document.getElementById("blog").value = userDetails.blog;
      document.getElementById("phone").value = userDetails.phone;
    });
  }

  