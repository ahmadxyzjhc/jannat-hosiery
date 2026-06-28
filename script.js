// ===============================
// WHATSAPP NUMBER
// ===============================

const phone = "91XXXXXXXXXX"; // Replace with your real number

let selectedCategory = "All";

// ===============================
// WHATSAPP
// ===============================

function askPrice(productName){

    const message =
    "Hello! I want to know the price of " + productName;

    window.open(
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message),
        "_blank"
    );

}

// ===============================
// DISPLAY PRODUCTS
// ===============================

function displayProducts(productList){

    const container = document.getElementById("products");

    container.innerHTML = "";

    if(productList.length===0){

        container.innerHTML = `
        <div class="col-12 text-center">

        <h3>No Products Found</h3>

        </div>
        `;

        return;

    }

    productList.forEach(product=>{

        container.innerHTML += `

<div class="col-lg-3 col-md-4 col-sm-6">

<div class="product-card position-relative">

<span class="badge-custom">

${product.badge}

</span>

<div class="wishlist">

❤

</div>

<img
src="${product.image}"
class="img-fluid">

<div class="product-body">

<div class="product-brand">

${product.brand}

</div>

<h5 class="product-title">

${product.name}

</h5>

<div class="product-rating">

⭐ ${product.rating}

</div>

<p class="product-description">

${product.description}

</p>

<button
class="btn btn-success w-100 rounded-pill"

onclick="askPrice('${product.name}')">

Ask Price

</button>

</div>

</div>

</div>

`;

    });

}

// ===============================
// CATEGORY BUTTONS
// ===============================

function loadCategories(){

const box=document.getElementById("categories");

box.innerHTML="";

const count={};

products.forEach(product=>{

count[product.category]=(count[product.category]||0)+1;

});

box.innerHTML+=`

<button
class="btn btn-outline-danger"

onclick="filterCategory('All')">

All (${products.length})

</button>

`;

Object.keys(count).forEach(category=>{

box.innerHTML+=`

<button
class="btn btn-outline-danger"

onclick="filterCategory('${category}')">

${category}

(${count[category]})

</button>

`;

});

}

// ===============================
// CATEGORY FILTER
// ===============================

function filterCategory(category){

selectedCategory=category;

updateProducts();

}

// ===============================
// SEARCH
// ===============================

function updateProducts(){

const search=document

.getElementById("search")

.value

.toLowerCase();

const filtered=products.filter(product=>{

const searchMatch=

product.name.toLowerCase().includes(search)||

product.brand.toLowerCase().includes(search)||

product.category.toLowerCase().includes(search)||

product.description.toLowerCase().includes(search);

const categoryMatch=

selectedCategory==="All"||

product.category===selectedCategory;

return searchMatch&&categoryMatch;

});

displayProducts(filtered);

}

// ===============================
// START WEBSITE
// ===============================

window.onload=function(){

loadCategories();

displayProducts(products);

document

.getElementById("search")

.addEventListener("input",updateProducts);

};
