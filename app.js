console.log("Minidu");


const username="miniduminidu@gmail.com"
const password="20040331";

function login(){
    let userinputemail=document.getElementById("email").value;
    let userinputpassword=document.getElementById("password").value;
    console.log(userinputemail);
    console.log(userinputpassword);

    if(userinputemail==username && userinputpassword==password){

        document.getElementById("root").innerHTML=mainburgerpage();
        document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

        window.addEventListener('resize', handleResize);

        handleResize();


    }else{
        alert("Password / Username Incorrect ");
    }

}


document.getElementById("root").innerHTML=comp();

function comp(){
    return(
        ` 
       <video id="background-video" autoplay muted loop>
    <source src="videos/123.mp4" type="video/mp4">
</video>

<div class="main">
    <div class="login">
        <form>
            <label for="chk" aria-hidden="true">Admin Login</label>
            <input type="email" name="email" placeholder="Email" required="" id="email">
            <input type="password" name="pswd" placeholder="Password" required="" id="password">
            <button onclick="login()">Login</button>
            <img src="img/123.png" alt="User Avatar">
            <h2 id="heading">Mos Burger</h2>
        </form>
    </div>
</div>
`
    )
  
}


function mainburgerpage() {
    return `
         <div class="pos-system">
    <aside class="sidebar">
      <div class="sidebar-logo">POSFood</div>
      <nav class="sidebar-menu">
        <a href="#" class="menu-item active">Home</a>
        <a href="#" class="menu-item">Menu</a>
        <a href="#" class="menu-item">History</a>
        <a href="#" class="menu-item">Promos</a>
        <a href="#" class="menu-item">Settings</a>
      </nav>
    </aside>
    <main class="main-content">
      <header class="header">
        <h1 class="restaurant-name">Mos Burger</h1>
        <span class="date">August 21, 2022</span>
        <input type="text" class="search-bar" placeholder="Search menu here..." />
      </header>
      <section class="categories">
        <button class="category-tab active">Burger</button>
        <button class="category-tab">Noodles</button>
        <button class="category-tab">Drinks</button>
        <button class="category-tab">Desserts</button>
      </section>
      <section class="menu-grid">
        <!-- Menu items -->
        <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>


         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>

         <div class="menu-item" onclick="addToOrder('Original Burger', 5.99)">
          <img src="img/111.jpg" alt="Original Burger" class="menu-img" />
          <h3 class="menu-title">Original Burger</h3>
          <p class="menu-price">$5.99</p>
          <p class="menu-stock">11 items</p>
        </div>
        <div class="menu-item" onclick="addToOrder('Double Burger', 10.99)">
          <img src="img/111.jpg" alt="Double Burger" class="menu-img" />
          <h3 class="menu-title">Double Burger</h3>
          <p class="menu-price">$10.99</p>
          <p class="menu-stock">8 items</p>
        </div>
        <!-- Add more menu items -->
      </section>
    </main>
    <aside class="order-summary">
      <h2 class="order-title">Order</h2>
     <div id="order-list"></div>
<div class="order-total">
  <p class="subtotal">Sub Total: <span id="subtotal">$0.00</span></p>
  <p class="tax">Tax (10%): <span id="tax">$0.00</span></p>
  <p class="total">Total: <span id="total">$0.00</span></p>
</div>
<div class="order-info">
  <p class="current-order">Order Number: <span id="current-order-number">ODR0001</span></p>
</div>
<button class="print-btn" onclick="printBill()">Print Bill</button>

    `;
}



// Initialize orders array and load from local storage
let orders = JSON.parse(localStorage.getItem('currentOrder')) || [];
let completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
let currentOrderNumber = parseInt(localStorage.getItem('orderNumber')) || 1;

// Function to update the displayed order number
function updateOrderNumberDisplay() {
  const orderNumberElement = document.getElementById('current-order-number');
  if (orderNumberElement) {
    orderNumberElement.innerText = `ODR${currentOrderNumber.toString().padStart(4, '0')}`;
  }
}

// Function to add item to the order
function addToOrder(itemName, itemPrice) {
  const newItem = { name: itemName, price: itemPrice };
  orders.push(newItem);

  saveCurrentOrder();
  renderOrder();
  updateTotal();
}

// Function to save the current order to local storage
function saveCurrentOrder() {
  localStorage.setItem('currentOrder', JSON.stringify(orders));
}

// Function to save completed orders to local storage
function saveCompletedOrders() {
  localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
}

// Function to save order number
function saveOrderNumber() {
  localStorage.setItem('orderNumber', currentOrderNumber.toString());
}

// Function to render orders in the UI
function renderOrder() {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = '';

  orders.forEach((order, index) => {
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = `
      <p class="item-name">${order.name}</p>
      <span class="item-price">$${order.price.toFixed(2)}</span>
      <button class="remove-btn" onclick="removeOrder(${index})">Remove</button>
    `;
    orderList.appendChild(orderItem);
  });
}

// Function to remove an item from the order
function removeOrder(index) {
  orders.splice(index, 1);
  saveCurrentOrder();
  renderOrder();
  updateTotal();
}

// Function to update totals
function updateTotal() {
  const subtotal = orders.reduce((acc, item) => acc + item.price, 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

// Function to complete the current order
function completeOrder() {
  if (orders.length === 0) {
    alert('No items in the order to complete!');
    return;
  }

  // Save current order to completed orders
  const orderData = {
    orderNumber: `ODR${currentOrderNumber.toString().padStart(4, '0')}`,
    items: orders,
    timestamp: new Date().toLocaleString(),
  };
  completedOrders.push(orderData);

  // Save to local storage
  saveCompletedOrders();

  // Increment order number and save
  currentOrderNumber++;
  saveOrderNumber();

  // Update displayed order number
  updateOrderNumberDisplay();

  // Reset current order
  orders = [];
  saveCurrentOrder();
  renderOrder();
  updateTotal();

  alert(`Order ${orderData.orderNumber} completed!`);

  // Reset background or text color (if changed)
  document.body.style.backgroundColor = '#ffffff'; // Example reset
}

// Load and render orders from local storage on page load
window.onload = function () {
  updateOrderNumberDisplay(); // Update the displayed order number
  renderOrder();
  updateTotal();
};

// Function to print bill (simulate)
function printBill() {
  completeOrder();
}
