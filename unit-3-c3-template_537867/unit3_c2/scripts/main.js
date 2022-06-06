let inform=document.getElementById("form")
document.querySelector("#form").addEventListener("submit",function(event){4
event.preventDefault()

let data={

  name:inform.name.value,
  email:inform.email.value,
  address:inform.address.value,
  wallet:inform.amount.value

}
console.log(data);
form.reset()

localStorage.setItem("users",JSON.stringify(data))
})