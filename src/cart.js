let ShoppingCart = document.getElementById('shopping-cart')
let label = document.getElementById('label')
let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation =()=>{
    let CartIcon = document.getElementById("cartAmount"); 
   CartIcon.innerHTML = basket.map((X) => x.item).reduce((x,Y)=> x + Y, 0);
   };
   
   calculation ();

   let generateCartItem =()=>{
    if (basket.length !== 0){
        return ShoppingCart.innerHTML = basket
        .map((x)=>{
            let{id, item} = x;
            let search = shopItemData.find((y)=>y.id === id) || [];
          return `
          div class="cart-item">
          <img width="100" src=${search.img} alt="" />
          <div ckass="details">

          <div class="tittle-price-x">
            <h4 class"tittle-price">
            <p>${search.name}</p>
            <p class="cart-item-price">${search.price}</p>
            </h4>
            <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
            </div>
          <div class="cart-buttons">
                <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantuty">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
          
          <h3>$ ${item * search.price}</h3>
          </div>`
        })
        .join("");
    }
    else{
        label.innerHTML = `
        <h2> Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to home</button></a>`;

        ShoppingCart.innerHTML = ``;
    }
   };

   generateCartItems();

let increment = (id)=>{
    let selectedItem = id;
    let search = basket.find((X) => X.id === selectedItem.id);
    
if(search === undefined) return

else if (search === undefined){
    basket.push({
        id:  selectedItem.id,
        item: 1,
    });
}
else {
    search.item += 1;
}
generateCartItems();
update(selectedItem.id);
localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((X) => X.id === selectedItem.id);

if (search.item === 0) return;
else {
    search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=> x.item !==0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
    let search = basket.find((x) =>x.id ===id )
       document.getElementById(id).innerHTML = search.item;
       calculation()
};

let removeItem =(id)=>{}