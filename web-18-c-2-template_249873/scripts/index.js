// Add the coffee to local storage with key "coffee"

const url='https://masai-mock-api.herokuapp.com/coffee/menu'

async function getData(){
  try {
    let res =await fetch(url)
    let users=await res.json();

    append(users.menu.data)

    // console.log(users);

  } catch (error) {
    console.log('error');
  }
}
getData()

let arr = JSON.parse(localStorage.getItem("coffee")) || []
function append(data){
  

  let container=document.getElementById("menu")
  data.forEach(function (el){

    let div=document.createElement("div")

    let images=document.createElement("img")
    images.src=el.image;

    let name=document.createElement("h3")
    name.innerText=el.title;

    let Price=document.createElement("h5")
    Price.innerText=el.price;

    let add=document.createElement("button")
    add.innerText="Add to bucket"
    add.style.cursor="pointer";
    add.addEventListener("click",function(){
      productadd(el)
    })
   
    // console.log(images,name,Price);
    div.append(images,name,Price ,add)
    container.append(div)
  });

  function productadd(el){
 arr.push(el)

 localStorage.setItem("coffee",JSON.stringify(arr))
  }
}