// ===============================
// WHATSAPP NUMBER
// ===============================

const phone = "91XXXXXXXXXX"; // Replace with your number

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

function displayProducts(list){

    const container=document.getElementById("products");

    container.innerHTML="";

    if(list.length===0){

        container.innerHTML="<h2>No products found.</h2>";

        return;

    }

    list.forEach(product=>{

        container.innerHTML+=`

        <div class="product">

            <div class="badge">
                ${product.badge}
            </div>

            <div class="wishlist">
                ❤
            </div>

            <img src="${product.image}" alt="${product.name}">

            <small class="brand">
                ${product.brand}
            </small>

            <h2>${product.name}</h2>

            <div class="rating">

                ⭐ ${product.rating}

            </div>

            <p>${product.description}</p>

            <button onclick="askPrice('${product.name}')">

                Ask for Price

            </button>

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
    <button onclick="filterCategory('All')">
    All (${products.length})
    </button>
    `;

    Object.keys(count).forEach(category=>{

        box.innerHTML+=`

        <button onclick="filterCategory('${category}')">

        ${category} (${count[category]})

        </button>

        `;

    });

}

// ===============================
// FILTER
// ===============================

function filterCategory(category){

    selectedCategory=category;

    updateProducts();

}

// ===============================
// SEARCH
// ===============================

function updateProducts(){

    const text=document
    .getElementById("search")
    .value
    .toLowerCase();

    const filtered=products.filter(product=>{

        const searchMatch=

        product.name.toLowerCase().includes(text)||

        product.category.toLowerCase().includes(text)||

        product.brand.toLowerCase().includes(text)||

        product.description.toLowerCase().includes(text);

        const categoryMatch=

        selectedCategory==="All"||

        product.category===selectedCategory;

        return searchMatch&&categoryMatch;

    });

    displayProducts(filtered);

}

// ===============================
// START
// ===============================

window.onload=function(){

    loadCategories();

    displayProducts(products);

    document
    .getElementById("search")
    .addEventListener("input",updateProducts);

};
