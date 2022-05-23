//store the products array in localstorage as "products"
function productsData(typ,des,pri,img){
    this.type=typ;
    this.desc=des;
    this.price=`Rs.${pri}`;
    this.image=img;
     }
     // console.log(productsData);
   
     function newProducts(e){
     e.preventDefault();
     let form=document.getElementById("products");
     let Type =form.type.value;
     let Description =form.desc.value;
     let Price =form.price.value;
     let Image =form.image.value;
   
   
     let all= new productsData(Type,Description,Price,Image);
   
     let data =JSON.parse(localStorage.getItem("products")) || [];
   
   data.push(all);
   
   localStorage.setItem("products",JSON.stringify(data))
   
   // console.log(all);
   
   
   products.reset()
     }
   