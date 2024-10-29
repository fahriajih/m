// script.js

// Simpan elemen penting
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(product, price) {
    // Tambahkan produk ke array cart
    cart.push({ product, price });
    
    // Render ulang cart
    renderCart();
}

// Fungsi untuk menampilkan isi keranjang
function renderCart() {
    // Kosongkan container keranjang sebelum render ulang
    cartItemsContainer.innerHTML = '';

    // Hitung total harga
    let total = 0;

    // Looping produk yang ada di cart
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - Rp${item.price}`;
        cartItemsContainer.appendChild(div);
        total += parseInt(item.price);
    });

    // Update total harga di DOM
    cartTotal.textContent = total;
}

// Event listener untuk tombol "Add to Cart"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        const price = e.target.getAttribute('data-price');
        addToCart(product, price);
    });
});
