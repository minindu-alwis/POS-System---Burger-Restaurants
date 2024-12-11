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
        <a href="#remove" class="menu-item">Remove the Order</a>
        <a href="#" class="menu-item">History</a>
        <a href="#" class="menu-item">Promos</a>
        <a href="#" class="menu-item">Settings</a>
        <section class="completed-orders">
  
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
      <div class="order-actions">
  <label for="phone-number">Customer Phone Number:</label>
  <input type="text" id="phone-number" placeholder="Enter phone number">
</div>
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
</div>




<div id="remove">
  <section class="completed-orders">
    <h2>Completed Orders</h2>
    
    <!-- Input field for entering the order number -->
    <label for="order-number-input">Enter Order Number:</label>
    <input type="text" id="order-number-input" placeholder="Enter Order Number" />
    <button id="search-order-btn" onclick="searchOrderByNumber()">Search Order</button>
    
    <button id="refresh-orders-btn" onclick="renderCompletedOrders()">Refresh</button>
    
    <div id="completed-orders-list">
      <!-- Completed orders table will be dynamically generated here -->
    </div>
  </section>
</div>
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
  
    // Get the phone number from the input field
    const phoneNumberInput = document.getElementById('phone-number');
    const customerPhone = phoneNumberInput.value.trim();
  
    if (!customerPhone) {
      alert('Phone number is required to complete the order!');
      return;
    }
  
    // Save current order to completed orders
    const orderData = {
      orderNumber: `ODR${currentOrderNumber.toString().padStart(4, '0')}`,
      customerPhone: customerPhone,
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
  
    // Clear phone number field
    phoneNumberInput.value = '';
  
    alert(`Order ${orderData.orderNumber} completed for ${customerPhone}!`);
  
    // Reset background or text color (if changed)
    document.body.style.backgroundColor = '#ffffff'; // Example reset
  }
  
  // Function to print bill (simulate)
  function printBill() {
    completeOrder();
  }
  






  //remove part

  // Function to render completed orders in a table format
function renderCompletedOrders() {
    const completedOrdersList = document.getElementById('completed-orders-list');
    completedOrdersList.innerHTML = ''; // Clear the list before rendering
  
    if (completedOrders.length === 0) {
      completedOrdersList.innerHTML = '<p>No completed orders found!</p>';
      return;
    }
  
    // Create the table structure
    const table = document.createElement('table');
    table.classList.add('completed-orders-table');
    
    // Add the table header
    const tableHeader = `
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Phone Number</th>
          <th>Timestamp</th>
          <th>Items</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
    `;
    table.innerHTML = tableHeader;
    
    // Add the table body with completed orders
    const tableBody = document.createElement('tbody');
    
    completedOrders.forEach((order, index) => {
      const row = document.createElement('tr');
      
      // Calculate total price for the order
      const totalPrice = order.items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
      
      // Create a row for each completed order
      row.innerHTML = `
        <td>${order.orderNumber}</td>
        <td>${order.customerPhone}</td>
        <td>${order.timestamp}</td>
        <td>
          <ul>
            ${order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}
          </ul>
        </td>
        <td>$${totalPrice}</td>
        <td><button class="remove-completed-btn" onclick="removeCompletedOrder(${index})">Remove</button></td>
      `;
      
      tableBody.appendChild(row);
    });
    
    // Append the body to the table
    table.appendChild(tableBody);
    
    // Append the table to the completed orders list
    completedOrdersList.appendChild(table);
  }
  
  // Function to search for a specific order by number
  function searchOrderByNumber() {
    const orderNumberInput = document.getElementById('order-number-input').value.trim().toUpperCase();
    const completedOrdersList = document.getElementById('completed-orders-list');
  
    if (!orderNumberInput) {
      alert('Please enter an order number!');
      return;
    }
  
    // Find the order based on the order number
    const order = completedOrders.find(o => o.orderNumber === orderNumberInput);
  
    if (!order) {
      completedOrdersList.innerHTML = '<p>Order not found!</p>';
      return;
    }
  
    // Render the found order
    renderFoundOrder(order);
  }
  
  // Function to render a single found order
  function renderFoundOrder(order) {
    const completedOrdersList = document.getElementById('completed-orders-list');
    completedOrdersList.innerHTML = ''; // Clear the list before rendering
  
    const orderDiv = document.createElement('div');
    orderDiv.classList.add('completed-order-item');
    
    // Calculate total price for the order
    const totalPrice = order.items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  
    orderDiv.innerHTML = `
      <h3>Order Details</h3>
      <p><strong>Order Number:</strong> ${order.orderNumber}</p>
      <p><strong>Phone Number:</strong> ${order.customerPhone}</p>
      <p><strong>Timestamp:</strong> ${order.timestamp}</p>
      <p><strong>Items:</strong></p>
      <ul>
        ${order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}
      </ul>
      <p><strong>Total:</strong> $${totalPrice}</p>
      <button class="remove-completed-btn" onclick="removeCompletedOrder(${completedOrders.indexOf(order)})">Remove Order</button>
    `;
    
    completedOrdersList.appendChild(orderDiv);
  }
  
  // Function to remove a completed order
  function removeCompletedOrder(index) {
    if (confirm('Are you sure you want to remove this order?')) {
      // Remove the order from the array
      completedOrders.splice(index, 1);
  
      // Update the local storage
      saveCompletedOrders();
  
      // Re-render the completed orders list
      renderCompletedOrders();
  
      alert('Order removed successfully!');
    }
  }
  