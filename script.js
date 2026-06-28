// ===========================
// WHATSAPP
// ===========================

const phone = "91XXXXXXXXXX"; // Replace with your number

// ===========================
// VARIABLES
// ===========================

let selectedCategory = "All";

// ===========================
// WHATSAPP
// ===========================

function askPrice(productName){

    const message =
    "Hello! I want to know the price of " + productName;

    window.open(
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message),
        "_blank"
    );

}

// ===========================
// DISPLAY PRODUCTS
// ===========================

function displayProducts(list){

    const container =
    document.getElementById("products");

    container.innerHTML="";

    if(list.length===0){

        container.innerHTML=
        "<h2>No products found.</h2>";

        return;

    }

    list.forEach(product=>{

        container.innerHTML+=`

        <div class="product">

            <img src="${product.image}">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <button
            onclick="askPrice('${product.name}')">

            Ask for Price

            </button>

        </div>

        `;

    });

}

// ===========================
// AUTO CATEGORY BUTTONS
// ===========================

function loadCategories(){

    const box =
    document.getElementById("categories");

    box.innerHTML="";

    const categoryCount={};

    products.forEach(product=>{

        categoryCount[product.category]=
        (categoryCount[product.category]||0)+1;

    });

    box.innerHTML+=`
    <button onclick="filterCategory('All')">
    All (${products.length})
    </button>
    `;

    Object.keys(categoryCount).forEach(cat=>{

        box.innerHTML+=`

        <button onclick="filterCategory('${cat}')">

        ${cat}
        (${categoryCount[cat]})

        </button>

        `;

    });

}

// ===========================
// FILTER
// ===========================

function filterCategory(category){

    selectedCategory=category;

    updateProducts();

}

// ===========================
// SEARCH
// ===========================

function updateProducts(){

    const search=

    document
    .getElementById("search")
    .value
    .toLowerCase();

    const filtered=

    products.filter(product=>{

        const searchMatch=

        product.name.toLowerCase().includes(search)||

        product.description
        .toLowerCase()
        .includes(search)||

        product.category
        .toLowerCase()
        .includes(search);

        const categoryMatch=

        selectedCategory==="All"||

        product.category===selectedCategory;

        return searchMatch&&categoryMatch;

    });

    displayProducts(filtered);

}

// ===========================
// START
// ===========================

window.onload=function(){

    loadCategories();

    displayProducts(products);

    document
    .getElementById("search")
    .addEventListener("input",updateProducts);

};
