const phone = "91XXXXXXXXXX";

function askPrice(productName){

const message =
"Hello! I want to know the price of " + productName;

window.open(
"https://wa.me/"+phone+"?text="+encodeURIComponent(message),
"_blank"
);

}

function loadProducts(){

const container=document.getElementById("products");

container.innerHTML="";

products.forEach(product=>{

container.innerHTML+=`

<div class="product">

<img src="${product.image}" alt="${product.name}">

<h2>${product.name}</h2>

<p>${product.description}</p>

<button onclick="askPrice('${product.name}')">
Ask for Price
</button>

</div>

`;

});

}

window.onload=loadProducts;
