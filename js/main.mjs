let shop = document.getElementById("shop");


let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let {id, name, price, desc, img} =x;
        let search = basket.find((x) =>x.id === id) || []
        return `
        <div id=product-id-${id}class="item">
            <img width="220" src=$ (img) alt="">${image}</img>
            <div class="details">
                <h3>${title}</h3>
                <P>${description}</P>
                <div class="price-quantity">
                    <h2>$ ${price}/h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantuty">
                        ${search.item === undefined? 0: search.item}</i>
                        </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div
            </div>
        `;
    })
    .join(""));


};

generateShop();

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

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id)=>{
let search = basket.find((x) =>x.id ===id )
   document.getElementById(id).innerHTML = search.item;
   calculation()
};

let calculation =()=>{
 let CartIcon = document.getElementById("cartAmount"); 
CartIcon.innerHTML = basket.map((X) => x.item).reduce((x,Y)=> x + Y, 0);
};

calculation ();