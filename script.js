const products = [
    {
        id: 1,
        name: "Classic Leather Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1589987591831-14b2b2a0c7c4"
    },
    {
        id: 2,
        name: "Smart Watch Series 6",
        price: 15999,
        image: "https://images.unsplash.com/photo-1598300054281-82829b7c8706"
    },
    {
        id: 3,
        name: "Elegant Rose Gold",
        price: 4999,
        image: "https://images.unsplash.com/photo-1611078483566-3e1e0fc9ce69"
    },
    {
        id: 4,
        name: "Sporty Digital Watch",
        price: 1999,
        image: "https://images.unsplash.com/photo-1593968391884-81255ba78e4b"
    },
    {
        id: 5,
        name: "Luxury Black Watch",
        price: 8999,
        image: "https://images.unsplash.com/photo-1617093727308-3e0730e1a7ed"
    },
    {
        id: 6,
        name: "Stylish Blue Watch",
        price: 6499,
        image: "https://images.unsplash.com/photo-1589987591831-6d7b24b7a5ea"
    },
    {
        id: 7,
        name: "Premium Silver Watch",
        price: 9999,
        image: "https://images.unsplash.com/photo-1504707748692-419802cf939d"
    },
    {
        id: 8,
        name: "Casual Analog Watch",
        price: 1299,
        image: "https://images.unsplash.com/photo-1576871337632-7c02a4e73322"
    }
];

const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cartBtn');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');

let cartData = [];

// Display products
products.forEach(product => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');
    productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productEl);
});

// Add to cart function
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cartData.push(product);
    updateCart();
}

// Remove from cart function
function removeFromCart(index) {
    cartData.splice(index, 1);
    updateCart();
}

// Update cart UI
function updateCart() {
    cartItems.innerHTML = "";
    cartData.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });
    cartCount.textContent = cartData.length;
}

// Toggle Cart
cartBtn.addEventListener('click', () => {
    cart.classList.toggle('hidden');
});

closeCart.addEventListener('click', () => {
    cart.classList.add('hidden');
});