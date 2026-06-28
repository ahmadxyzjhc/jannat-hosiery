// ==========================
// WHATSAPP NUMBER
// ==========================

const phone = "91XXXXXXXXXX"; // Replace with your number

// ==========================
// VARIABLES
// ==========================

let selectedCategory = "All";

// ==========================
// WHATSAPP
// ==========================

function askPrice(productName) {

    const message = "Hello! I want to know the price of " + productName;

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );

}

// ==========================
// DISPLAY PRODUCTS
// ==========================

function displayProducts(list) {

    const container = document.getElementById("products");

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
        <h2 style="text-align:center;width:100%;">
        No products found
        </h2>
        `;

        return;
    }

    list.forEach(product => {

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

// ==========================
// SEARCH + CATEGORY
// ==========================

function updateProducts() {

    const search = document
        .getElementById("search")
        .value
        .toLowerCase();

    const filtered = products.filter(product => {

        const matchesSearch =

            product.name.toLowerCase().includes(search) ||

            product.category.toLowerCase().includes(search) ||

            product.description.toLowerCase().includes(search);

        const matchesCategory =

            selectedCategory === "All" ||

            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayProducts(filtered);

}

// ==========================
// CATEGORY
// ==========================

function filterCategory(category) {

    selectedCategory = category;

    updateProducts();

}

// ==========================
// START WEBSITE
// ==========================

window.onload = function () {

    displayProducts(products);

    document
        .getElementById("search")
        .addEventListener("input", updateProducts);

};
