let ShoppingCart = document.getElementById('shopping-cart')
let label = document.getElementById('label')
let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation =()=>{
    let CartIcon = document.getElementById("cartAmount"); 
   CartIcon.innerHTML = basket.map((X) => x.item).reduce((x,Y)=> x + Y, 0);
   };
   
   calculation ();

   let generateCartItem =()=>{
    let cartRows = document.getElementById("cartRows");
   }