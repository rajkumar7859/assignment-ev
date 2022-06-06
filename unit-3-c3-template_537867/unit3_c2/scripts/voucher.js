
const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

let getData=async()=>{
  try {
    let value =await fetch(url);
    let data = await value.json();
    // console.log(data);
    append(data[0].vouchers)

  } catch (error) {
    console.log("errr");
  }
}
getData()


let append=(data)=>{

  let container=document.getElementById("voucher_list")

  let Purchases=JSON.parse(localStorage.getItem("purchases"))

  data.forEach(ele => {
    let div=document.createElement("div")

let img=document.createElement("img")
img.src=ele.image

let proName=document.createElement("h3")
proName.innerText=ele.name;

let proPrice=document.createElement("h5")
proPrice.innerText=ele.price;

let btn=document.createElement("button")
btn.innerText="Buy";
btn.style.cursor="pointer";
btn.addEventListener("click",function(){
  coupenBuy(ele)
})
div.append(img,proName,proPrice,btn)
container.append(div)
// console.log(image.proName,proPrice);
  });

  function coupenBuy(ele){

    Purchases.push(ele)
    localStorage.setItem("purchases",JSON.stringify(Purchases))

    alert("Hurray! purchase successful")
  }

}