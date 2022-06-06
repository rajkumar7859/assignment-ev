let Purchases=JSON.parse(localStorage.getItem("purchases"))
  

let container=document.getElementById("purchased_vouchers")

Purchases.forEach(ele => {
  let div=document.createElement("div")

let img=document.createElement("img")
img.src=ele.image

let proName=document.createElement("h3")
proName.innerText=ele.name;

let proPrice=document.createElement("h5")
proPrice.innerText=ele.price;

div.append(img,proName,proPrice)
container.append(div)
});