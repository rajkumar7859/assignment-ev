function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let all_products=document.getElementById("products");


    data.forEach (function(el){

      let div =document.createElement("div");
      
      let  image=document.createElement("img")
    image.src=el.image;

      let type =document.createElement("p")
      type.innerText=el.type;

      let descri =document.createElement("p")
      descri.innerText=el.desc

      let price =document.createElement("p")
      price.innerText=el.price;

      let btn =document.createElement("button")
      btn.innerText="Remove product";
      btn.addEventListener("click",function (){
        remove(el)

      });

      div.append(image,type,descri,price,btn)
    // console.log(image,type,descri,price,button);
    document.getElementById("all_products").append(div)
    });
  }
  append();

  // <---------------remove function-------------->
    function remove(el)
    {
      let data = JSON.parse(localStorage.getItem("products")) || [];
      let rem=data.indexOf(el)
      data.splice(rem,1)
      console.log(data);
      localStorage.setItem("products",JSON.stringify(data))
    }