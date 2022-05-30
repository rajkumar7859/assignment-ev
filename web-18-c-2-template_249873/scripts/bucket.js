// On clicking remove button the item should be removed from DOM as well as localstorage.


var arr = JSON.parse(localStorage.getItem("coffee")) || []
displayData(arr)
function displayData(data){

let container=document.getElementById("bucket")

data.forEach(function (ele,index){

  let div=document.createElement("div")

  let images=document.createElement("img")
  images.src=ele.image;

  let name=document.createElement("h3")
  name.innerText=ele.title;

  let Price=document.createElement("h5")
  Price.innerText=ele.price;

  let btn=document.createElement("button")
  btn.innerText="Remove"
  btn.style.cursor="pointer"
  btn.addEventListener("click",function(){
   
    removes(ele,index)
  })
 
  // console.log(images,name,Price);
  div.append(images,name,Price ,btn)
  container.append(div)
});

}

function removes(ele,index){
arr.splice(index,1)
console.log(arr);

localStorage.setItem("coffee",JSON.stringify(arr))

location.reload()
}