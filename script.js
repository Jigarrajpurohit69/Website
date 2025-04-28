const products = [
    {
        id: 1,
        name: "Classic Leather Watch",
        price: 2499,
        image: "https://sl.bing.net/dCO1xI58pzg"
    },
    {
        id: 2,
        name: "Smart Watch Series 6",
        price: 15999,
        image: "https://www.bing.com/images/search?view=detailV2&ccid=cN1zyD3E&id=4C8372B45B19FB60BD468C29C1ABEEB3FF2B297A&thid=OIP.cN1zyD3ESL7ao7EVNExEqgHaE8&mediaurl=https%3a%2f%2fs.yimg.com%2fny%2fapi%2fres%2f1.2%2fnxmFZleWCkQvsYNnXeciaw--%2fYXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-%2fhttps%3a%2f%2fs.yimg.com%2fos%2fcreatr-uploaded-images%2f2022-09%2f858128d0-3491-11ed-aeec-c03b39ac030c&exph=800&expw=1200&q=Smart+Watch+Series&simid=608051363120753352&FORM=IRPRST&ck=E2B7FBDB7CD34D889873541E273545BE&selectedIndex=2&itb=0"
    },
    {
        id: 3,
        name: "Elegant Rose Gold",
        price: 4999,
        image: "https://www.bing.com/aclk?ld=e8yBBlYk-rU5pg-F4QuCLsgzVUCUxR6r8pHeA3BVrPf3F98RFV3yEsapRx3IDsmQNKwaQ4Hfw0VcKJzKVPjs6CTpMlo6drPiS_w7VA17FJmeMM8uaDXH6TUK44UyHnWu4AvY7mu3230sP_S89-KoZmHuTmAgtGWlICPOvqEWAoBaGggphniLw7tj-d0jGeoonPqvFu5w&u=aHR0cHMlM2ElMmYlMmZ3d3cubnlrYWFtYW4uY29tJTJmZ3Vlc3MtdTE0MDJsM20td29tZW4tNDAtbW0tcm9zZS1nb2xkLWRpYWwtYW5hbG9nLXdhdGNoLW0lMmZwJTJmMTgyNjEwMTAlM2ZwdHlwZSUzZHByb2R1Y3QlMjZza3VJZCUzZDE4MjYxMDEwJTI2dXRtX2NvbnRlbnQlM2RhZHMlMjZ1dG1fc291cmNlJTNkTWljcm9zb2Z0QWRzJTI2dXRtX21lZGl1bSUzZFNTQyUyNnV0bV9jYW1wYWlnbiUzZE1TX1NTQ19DYXRjaEFsbF8xMjAxMjU&rlid=bcac9a212b9512f22e05f22e167e53f0&ntb=1"
    },
    {
        id: 4,
        name: "Sporty Digital Watch",
        price: 1999,
        image: "https://www.bing.com/aclick?ld=e8QAehKnIH88lNI_gJVif_dDVUCUwgo4G5c507cxlKakcGYP4TQe5UeDgMNnR3iGWbr7lhO4zm2LKwJFUPkHKD-UGyurD3GZOc5yST4WMTcPL_YpGFYngiMokisoZgnX09I-DF06nxUOkk0GohdPiwpbgiw3pOjvDVlbOS0_x7geeK9dHhvm43-UICFbpToqL7Qkn1Mg&u=aHR0cHMlM2ElMmYlMmZ3d3cuZmlyc3RjcnkuY29tJTJmc3Bpa3klMmZzcGlreS1zcXVhcmUtc2hhcGVkLW11bHRpLWZ1bmN0aW9uYWwtZGlnaXRhbC1zcG9ydHMtd2F0Y2gtdHVycXVvaXNlJTJmMTg1ODMwOTAlMmZwcm9kdWN0LWRldGFpbCUzZnJlZiUzZEJTTl9TaG9wcGluZ18yMl9XYXRjaGVzIUJTTi1TdGFuZGFyZF9BbGxfU2VhcmNoX0FkcyElMjZtc2Nsa2lkJTNkYTU3Yjg4NTkwYjE4MTJiZTFlNTNlMDU2MzUwZjBmN2UlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RCU04tU3RhbmRhcmRfQWxsX1NlYXJjaF9BZHMlMjZ1dG1fdGVybSUzZDQ1ODYzMzc4ODI4OTg5NjMlMjZ1dG1fY29udGVudCUzZEFkJTI1MjBncm91cCUyNTIwJTI1MjMx&rlid=a57b88590b1812be1e53e056350f0f7e&ntb=1"
    },
    {
        id: 5,
        name: "Luxury Black Watch",
        price: 8999,
        image: "https://www.bing.com/th?id=OPAC.UpMDRwHCQICDNA474C474&o=5&pid=21.1&w=148&h=260&rs=1&qlt=100&dpr=1.3&bw=6&bc=FFFFFF"
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
