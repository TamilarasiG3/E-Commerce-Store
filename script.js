let cartCount = 0;

function openSidebar() {
    document.getElementById("sideNavbar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("sideNavbar").style.left = "-220px";
}

function addToCart(product) {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
    alert(product + " added to cart!");
}
