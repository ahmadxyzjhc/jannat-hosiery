const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp number

// Current products shown on the page
let filteredProducts = [...products];

// WhatsApp button
function askPrice(productName) {

    const message =
        "Hello! I want to know the price of " + productName;

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

// Display products
function displayProducts(product
