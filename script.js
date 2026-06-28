// ======================================
// JANNAT HOSIERY & COSMETICS
// script.js
// ======================================

// Replace with your WhatsApp number
const phone = "917006694870";

let selectedCategory = "All";

// ======================================
// OPEN WHATSAPP
// ======================================

function askPrice(productName) {

    const message =
        "Hello! I want to know the price of " + productName;

    const url =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}

// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(productList) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    if (productList.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center">
                <h3>No Products Found</h3>
            </div>
        `;

        return;
    }

    productList.forEach(product => {

        container.innerHTML += `

<div class="col-lg-3 col-md-4 col-sm-6 mb-4">

<div class="product-card position-relative">

<span class="badge-custom">${product.badge}</span>

<div class="wishlist">❤</div>

<img src="${product.image}" class="img-fluid" alt="${product.name}">

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

// ======================================
// LOAD CATEGORIES
// ======================================

function loadCategories() {

    const box = document.getElementById("categories");

    if (!box) return;

    box.innerHTML = "";

    const categoryCount = {};

    products.forEach(product => {

        categoryCount[product.category] =
            (categoryCount[product.category] || 0) + 1;

    });

    box.innerHTML +=
        `<button class="btn btn-outline-danger"
        onclick="filterCategory('All')">
        All (${products.length})
        </button>`;

    Object.keys(categoryCount).forEach(category => {

        box.innerHTML +=
            `<button class="btn btn-outline-danger"
            onclick="filterCategory('${category}')">
            ${category} (${categoryCount[category]})
            </button>`;

    });

}

// ======================================
// FILTER CATEGORY
// ======================================

function filterCategory(category) {

    selectedCategory = category;

    updateProducts();

}

// ======================================
// SEARCH
// ======================================

function updateProducts() {

    const searchBox = document.getElementById("search");

    const search = searchBox
        ? searchBox.value.toLowerCase()
        : "";

    const filtered = products.filter(product => {

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;

    });

    displayProducts(filtered);

}

// ======================================
// START WEBSITE
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    loadCategories();

    displayProducts(products);

    const searchBox = document.getElementById("search");

    if (searchBox) {

        searchBox.addEventListener("input", updateProducts);

    }

});
