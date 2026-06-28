// =========================
// WHATSAPP NUMBER
// =========================

const phone = "91XXXXXXXXXX"; // Replace with your real WhatsApp number

// =========================
// CURRENT PRODUCTS
// =========================

let currentProducts = [...products];

// =========================
// LOAD PRODUCTS
// =========================

function loadProducts(productList = currentProducts) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                No products found.
            </h2>
        `;

        return;
    }

    productList.forEach(product => {

        container.innerHTML += `

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

// =========================
// WHATSAPP BUTTON
// =========================

function askPrice(productName){

    const message =
    "Hello! I want to know the price of " + productName;

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );

}

// =========================
// SEARCH
// =========================

const searchBox = document.getElementById("search");

searchBox.addEventListener("keyup", function(){

    const text = searchBox.value.toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(text) ||

        product.category.toLowerCase().includes(text) ||

        product.description.toLowerCase().includes(text)

    );

    currentProducts = filtered;

    loadProducts(filtered);

});

// =========================
// CATEGORY FILTER
// =========================

function filterCategory(category){

    if(category==="All"){

        currentProducts=[...products];

        loadProducts(products);

        return;

    }

    const filtered = products.filter(product =>

        product.category===category

    );

    currentProducts = filtered;

    loadProducts(filtered);

}

// =========================
// START WEBSITE
// =========================

loadProducts();
