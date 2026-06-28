function askPrice(productName) {
    const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp number
    const message = "Hello! I want to know the price of " + productName;
    window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank");
}
