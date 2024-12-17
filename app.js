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
        renderMenuItems();
        renderEditItemsTable();
        renderOrdersTable();
        renderCustomersTable();

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
    <a href="#top" class="scroll-to-top" id="scroll-to-top">↑</a>
    <div id="top">
         <div class="pos-system">
    <aside class="sidebar">
      <div class="sidebar-logo" style="color:white;">Best Burgers </div>
      <nav class="navbar-menu">
    <a href="#" class="nav-item active">Home</a>
    <a href="#additems" class="nav-item">Add Items</a>
    <a href="#edititems" class="nav-item">Edit Items</a>
    <a href="#orders" class="nav-item">Orders</a>
    <a href="#customers" class="nav-item">Customers</a>
</nav>

    </aside>

  <main class="main-content">
  <header class="header">
    <h1 class="restaurant-name">Mos Burger</h1>
    <input type="text" class="search-bar" id="search-bar" placeholder="Search menu by ID..." />
    <button class="search-btn" id="search-btn" onClick="reding()" style="margin-bottom: 19px;">Search</button>
  </header>
  <section class="categories">
    <button class="category-tab active">Burger</button>
    <button class="category-tab">Noodles</button>
    <button class="category-tab">Drinks</button>
    <button class="category-tab">Desserts</button>
  </section>
      <section class="menu-grid">
        <!-- Menu items -->
        





      </section>
    </main>
    
   <aside class="order-summary">
  <h2 class="order-title">Order</h2>
  <div class="order-actions">
    <label for="customer-name">Customer Name:</label>
    <input type="text" id="customer-name" placeholder="Enter customer name">
  </div>
  <div class="order-actions">
    <label for="phone-number">Customer Phone Number:</label>
    <input type="text" id="phone-number" placeholder="Enter phone number">
  </div>
  <div id="order-list"></div>
  <div class="order-total">
    <p class="subtotal">Sub Total: <span id="subtotal">$0.00</span></p>
    <p class="total">Total: <span id="total">$0.00</span></p>
  </div>
  <div class="order-info">
    <p class="current-order">Order Number: <span id="current-order-number">ODR0001</span></p>
  </div>
  <button class="print-btn" onclick="printBill()">Print Bill</button>
</aside>

</div>


<div id="additems">
<div id="item-creation-section" class="item-form">
  <h2 style="margin-top: 16px;">Create Menu Item</h2>
  <input type="text" id="new-item-id" placeholder="Enter Burger ID">
  <input type="text" id="new-item-name" placeholder="Enter Item Name">
  <input type="number" id="new-item-price" placeholder="Enter Price">
  <input type="file" id="new-item-image" accept="image/*">
  <button type="button" onclick="addNewItem()">Add Menu Item</button>
</div>

</div>

<div id="edititems">
  <h2>Edit Item</h2>
  <table id="items-table">
    <thead>
      <tr>
        <th>Item ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- Item rows will be populated here dynamically -->
    </tbody>
  </table>
</div>
</div>


<div id="orders">
  <h2>All Orders</h2>

  <!-- Search Section -->
  <div class="search-section">
    <input type="text" id="search-input" placeholder="Search by Order ID or Phone Number">
    <button onclick="searchOrders()">Search</button>
  </div>

  <table id="orders-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer Name</th>
        <th>Customer Phone</th>
        <th>Order Items</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <!-- Orders will be dynamically added here -->
    </tbody>
  </table>
</div>

<div id="customers">
  <h2>Customer Details</h2>
  
  
  <div class="customer-search-container">
    <input type="text" id="customer-search-bar" class="customer-search-bar" placeholder="Search by phone number...">
    <button id="customer-search-btn" class="customer-search-btn" onclick="searchCustomer()">Search</button>
  </div>
  

  <table id="customers-table">
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Phone Number</th>
        <th>Total Spend</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
     
    </tbody>
  </table>
</div>









    `;
}
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
  { id: "B1001", name: "Classic Burger (Large)", price: 750.00, image: "img/1.jpeg" },
  { id: "B1002", name: "Classic Burger (Regular)", price: 1500.00, image: "img/2.jpeg" },
  { id: "B1003", name: "Turkey Burger", price: 1600.00, image: "img/3.jpeg" },
  { id: "B1004", name: "Chicken Burger (Large)", price: 1400.00, image: "img/4.jpeg" },
  { id: "B1005", name: "Chicken Burger (Regular)", price: 800.00, image: "img/5.jpeg" },
  { id: "B1006", name: "Cheese Burger (Large)", price: 1000.00, image: "img/6.jpeg" },
  { id: "B1007", name: "Cheese Burger (Regular)", price: 600.00, image: "img/7.jpg" },
  { id: "B1008", name: "Bacon Burger", price: 650.00, image: "img/8.jpeg" },
  { id: "B1009", name: "Shawarma Burger", price: 800.00, image: "img/9.jpeg" },
  { id: "B1010", name: "Olive Burger", price: 1800.00, image: "img/10.jpeg" },
  { id: "B1012", name: "Double-Cheese Burger", price: 1250.00, image: "img/11.jpeg" },
  { id: "B1013", name: "Crispy Chicken Burger (Regular)", price: 1200.00, image: "img/12.jpeg" },
  { id: "B1014", name: "Crispy Chicken Burger (Large)", price: 1600.00, image: "img/13.jpeg" },
  { id: "B1015", name: "Paneer Burger", price: 900.00, image: "img/14.jpeg" },
  { id: "B1016", name: "Crispy Chicken Submarine (Large)", price: 2000.00, image: "img/15.jpeg" },
  { id: "B1017", name: "Crispy Chicken Submarine (Regular)", price: 1500.00, image: "img/16.jpeg" },
  { id: "B1018", name: "Chicken Submarine (Large)", price: 1800.00, image: "img/17.jpeg" },
  { id: "B1019", name: "Chicken Submarine (Regular)", price: 1400.00, image: "img/18.jpeg" },
  { id: "B1020", name: "Grinder Submarine", price: 2300.00, image: "img/19.jpeg" },
  { id: "B1021", name: "Cheese Submarine", price: 2200.00, image: "img/20.jpeg" },
  { id: "B1022", name: "Double Cheese n Chicken Submarine", price: 1900.00, image: "img/21.jpeg" },
  { id: "B1023", name: "Special Horgie Submarine", price: 2800.00, image: "img/22.jpeg" },
  { id: "B1024", name: "MOS Special Submarine", price: 3000.00, image: "img/23.jpeg" },
  { id: "B1025", name: "Steak Fries (Large)", price: 1200.00, image: "img/24.jpeg" },
  { id: "B1026", name: "Steak Fries (Medium)", price: 600.00, image: "img/25.jpeg" },
  { id: "B1027", name: "French Fries (Large)", price: 800.00, image: "img/26.jpeg" },
  { id: "B1028", name: "French Fries (Medium)", price: 650.00, image: "img/27.jpeg" },
  { id: "B1029", name: "French Fries (Small)", price: 450.00, image: "img/28.jpeg" },
  { id: "B1030", name: "Sweet Potato Fries (Large)", price: 600.00, image: "img/29.jpeg" },
  { id: "B1031", name: "Chicken n Cheese Pasta", price: 1600.00, image: "img/30.jpeg" },
  { id: "B1032", name: "Chicken Penne Pasta", price: 1700.00, image: "img/31.jpeg" },
  { id: "B1033", name: "Ground Turkey Pasta Bake", price: 2900.00, image: "img/32.jpeg" },
  { id: "B1034", name: "Creamy Shrimp Pasta", price: 2000.00, image: "img/33.jpeg" },
  { id: "B1035", name: "Lemon Butter Pasta", price: 1950.00, image: "img/34.jpeg" },
  { id: "B1036", name: "Tagliatelle Pasta", price: 2400.00, image: "img/35.jpeg" },
  { id: "B1037", name: "Baked Ravioli", price: 2000.00, image: "img/36.jpeg" },
  { id: "B1038", name: "Fried Chicken (Small)", price: 1200.00, image: "img/37.jpeg" },
  { id: "B1039", name: "Fried Chicken (Regular)", price: 2300.00, image: "img/38.jpeg" },
  { id: "B1040", name: "Fried Chicken (Large)", price: 3100.00, image: "img/39.jpeg" },
  { id: "B1041", name: "Hot Wings (Large)", price: 2400.00, image: "img/40.jpeg" },
  { id: "B1042", name: "Devilled Chicken (Large)", price: 900.00, image: "img/41.jpeg" },
  { id: "B1043", name: "BBQ Chicken (Regular)", price: 2100.00, image: "img/42.jpeg" },
  { id: "B1044", name: "Pepsi (330ml)", price: 990.00, image: "img/43.jpeg" },
  { id: "B1045", name: "Coca-Cola (330ml)", price: 1230.00, image: "img/44.jpeg" },
  { id: "B1046", name: "Sprite (330ml)", price: 1500.00, image: "img/45.jpeg" },
  { id: "B1047", name: "Mirinda (330ml)", price: 850.00, image: "img/46.jpeg" }
];



console.log("Initial menu items:", menuItems);

function renderMenuItems() {
  console.log("Rendering menu items:", menuItems);

  if (!Array.isArray(menuItems)) {
    console.error("menuItems is not an array or is undefined");
    return;
  }

  const menuGrid = document.querySelector('.menu-grid');
  if (!menuGrid) {
    console.error("menu-grid container not found");
    return;
  }

  const fragment = document.createDocumentFragment();

  menuItems.forEach((item) => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    menuItemElement.setAttribute('onclick', `addToOrder('${item.name}', ${item.price})`);

    menuItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="menu-img" />
      <h3 class="menu-title">${item.name}</h3>
      <p class="menu-price">$${item.price.toFixed(2)}</p>
    `;

    fragment.appendChild(menuItemElement);
  });

  menuGrid.innerHTML = '';
  menuGrid.appendChild(fragment);
}


function addNewItem() {
  const id = document.getElementById('new-item-id').value.trim();
  const name = document.getElementById('new-item-name').value.trim();
  const price = parseFloat(document.getElementById('new-item-price').value);
  const imageInput = document.getElementById('new-item-image');

  // Validate the inputs
  if (id && name && price && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const newItem = {
              id: id,               
              name: name,
              price: price,
              image: e.target.result 
          };

          menuItems.push(newItem); 
          localStorage.setItem('menuItems', JSON.stringify(menuItems)); 
          renderMenuItems(); 

          document.getElementById('new-item-id').value = '';
          document.getElementById('new-item-name').value = '';
          document.getElementById('new-item-price').value = '';
          document.getElementById('new-item-image').value = '';
      };

      reader.readAsDataURL(imageInput.files[0]); 
      renderEditItemsTable();
  } else {
      alert("Please fill in all fields and upload an image.");
  }
}

function reding(){

  document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-bar').value.trim().toLowerCase();
    render(searchQuery);
  });
  
  function render(searchQuery = '') {
    console.log("Rendering menu items:", menuItems);
  
    
    if (!Array.isArray(menuItems)) {
      console.error("menuItems is not an array or is undefined");
      return;
    }
  
    
    if (menuItems.length === 0) {
      console.error("menuItems array is empty");
      return;
    }
  
  
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
      console.error("menu-grid container not found");
      return;
    }
  
    
    const fragment = document.createDocumentFragment();
    let itemsFound = false;
  
   
    menuItems.forEach((item) => {
     
      if (searchQuery !== '') {
        if (item.id.toLowerCase().includes(searchQuery) || item.name.toLowerCase().includes(searchQuery)) {
          itemsFound = true;
  
          const menuItemElement = document.createElement('div');
          menuItemElement.classList.add('menu-item');
          menuItemElement.setAttribute('onclick', `addToOrder('${item.name}', ${item.price})`);
  
          menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-img" />
            <h3 class="menu-title">${item.name}</h3>
            <p class="menu-price">$${item.price.toFixed(2)}</p>
          `;
  
          fragment.appendChild(menuItemElement);
        }
      } else {
       
        itemsFound = true;
  
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.setAttribute('onclick', `addToOrder('${item.name}', ${item.price})`);
  
        menuItemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="menu-img" />
          <h3 class="menu-title">${item.name}</h3>
          <p class="menu-price">$${item.price.toFixed(2)}</p>
        `;
  
        fragment.appendChild(menuItemElement);
      }
    });
  
    
    if (!itemsFound) {
      menuGrid.innerHTML = '<p style="color:red;">No items found</p>'; 
    } else {
      menuGrid.innerHTML = '';  
      menuGrid.appendChild(fragment);  
    }
  }
  
}

function renderEditItemsTable() {
  const tableBody = document.querySelector('#items-table tbody');
  tableBody.innerHTML = '';  
  
  menuItems.forEach((item, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td><input type="text" class="edit-item-field" value="${item.id}" disabled /></td>
      <td><input type="text" class="edit-item-field" value="${item.name}" /></td>
      <td><input type="number" class="edit-item-field" value="${item.price}" /></td>
      <td><input type="file" class="edit-item-field" /></td>
      <td>
        <button class="edit-item-btn" onClick="saveEditedItems()">Save</button>
        <button class="remove-item-btn" onClick="removeItem(${index})">Remove</button>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

function saveEditedItems() {
  const rows = document.querySelectorAll('#items-table tbody tr');
  
  rows.forEach((row, index) => {
    const inputs = row.querySelectorAll('.edit-item-field');
    const idInput = inputs[0];
    const nameInput = inputs[1];
    const priceInput = inputs[2];
    const imageInput = inputs[3];
    
    if (idInput && nameInput && priceInput && imageInput) {
      menuItems[index].name = nameInput.value;
      menuItems[index].price = parseFloat(priceInput.value);
      
      if (imageInput.files.length > 0) {
        const newImageUrl = URL.createObjectURL(imageInput.files[0]);
        menuItems[index].image = newImageUrl;
      }
    }
  });

  renderMenuItems();
  alert('Changes saved successfully!');
}


function removeItem(index) {
  menuItems.splice(index, 1);

  renderEditItemsTable();
  alert('Item removed successfully!');
  renderMenuItems();
}

let orderItems = [];
let currentOrderNumber = getNextOrderNumber();


function getNextOrderNumber() {
  const lastOrderId = localStorage.getItem('lastOrderId') || 'ODR00000';
  const lastNumber = parseInt(lastOrderId.replace('ODR', ''), 10);
  return `ODR${String(lastNumber + 1).padStart(5, '0')}`;
}


function addToOrder(name, price) {
  const existingItem = orderItems.find(item => item.name === name);

  if (existingItem) {
    existingItem.qty += 1; 
  } else {
    orderItems.push({ name, price, qty: 1 }); 
  }

  updateOrderList();
}


function updateOrderList() {
  const orderList = document.getElementById('order-list');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');

  let subtotal = 0;

  orderList.innerHTML = '';

  orderItems.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const orderItemElement = document.createElement('div');
    orderItemElement.classList.add('order-item');
    orderItemElement.innerHTML = `
      <p>${item.name} x${item.qty} - $${itemTotal.toFixed(2)}</p>
    `;
    orderList.appendChild(orderItemElement);
  });

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  totalElement.textContent = `$${subtotal.toFixed(2)}`;
}


function saveOrderToLocalStorage(customerName, phoneNumber) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  const order = {
    id: currentOrderNumber,
    customerName: customerName || 'N/A', 
    phoneNumber: phoneNumber || 'N/A',  
    items: orderItems,
    subtotal: orderItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    total: orderItems.reduce((acc, item) => acc + item.price * item.qty, 0),
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  
  localStorage.setItem('lastOrderId', currentOrderNumber);
  console.log(orders);
}



function printBill() {
  const customerName = document.getElementById('customer-name').value.trim();
  const phoneNumber = document.getElementById('phone-number').value.trim();

  if (!customerName || !phoneNumber) {
    alert('Please enter the customer name and phone number before printing the bill.');
    return;
  }
  saveOrderToLocalStorage(customerName, phoneNumber);
  renderOrdersTable();
  renderCustomersTable();
  let billContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; width: 300px; margin: auto; text-align: center;">
      <h2 style="margin-bottom: 10px;">Mos Burger</h2>
      <p>Order Number: <strong>${currentOrderNumber}</strong></p>
      <p>Customer Name: <strong>${customerName}</strong></p>
      <p>Customer Phone: <strong>${phoneNumber}</strong></p>
      <hr>
      <div style="text-align: left; margin-top: 10px;">
        <h3>Order Summary</h3>
  `;

  let subtotal = 0;
  orderItems.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    billContent += `
      <p>${item.name} x${item.qty} - $${itemTotal.toFixed(2)}</p>
    `;
  });

  billContent += `
        <hr>
        <p><strong>Sub Total:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>Total:</strong> $${subtotal.toFixed(2)}</p>
      </div>
    </div>
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Order Bill</title>
      </head>
      <body>
        ${billContent}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();

  // Save order to local storage



  
  orderItems = [];
  currentOrderNumber = getNextOrderNumber();
  updateOrderList();
  document.getElementById('current-order-number').textContent = currentOrderNumber;
  document.getElementById('customer-name').value = '';
  document.getElementById('phone-number').value = '';
}


function renderOrdersTable() {
  const ordersTableBody = document.querySelector('#orders-table tbody');
  ordersTableBody.innerHTML = '';  
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  orders.forEach((order, orderIndex) => {
    const row = document.createElement('tr');

    
    const itemsHtml = order.items.map((item, itemIndex) => {
      return `
        <div class="order-item">
          <input type="text" value="${item.name}" class="edit-item-name" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
          <input type="number" value="${item.qty}" class="edit-item-qty" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
          <input type="number" value="${item.price}" class="edit-item-price" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
        </div>`;
    }).join('');

    row.innerHTML = `
      <td>${order.id}</td>
      <td>
        <input type="text" value="${order.customerName}" class="edit-customer-name" data-order-index="${orderIndex}" />
      </td>
      <td>
        <input type="text" value="${order.phoneNumber}" class="edit-customer-phone" data-order-index="${orderIndex}" />
      </td>
      <td>
        ${itemsHtml}
      </td>
      <td>$${order.total.toFixed(2)}</td>
      <td>
        <button onclick="saveOrder(${orderIndex})">Save Changes</button>
        <button onclick="removeOrder(${orderIndex})">Remove</button>
      </td>
    `;

    ordersTableBody.appendChild(row);
  });

  
  document.querySelectorAll('.edit-customer-name').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].customerName = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-customer-phone').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].phoneNumber = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  
  document.querySelectorAll('.edit-item-name').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].name = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-item-qty').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].qty = parseInt(e.target.value);
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-item-price').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].price = parseFloat(e.target.value);
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });
}

function saveOrder(orderIndex) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const order = orders[orderIndex];

  
  order.total = order.items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  
 
  localStorage.setItem('orders', JSON.stringify(orders));

  renderOrdersTable(); 
  
}

function removeOrder(orderIndex) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.splice(orderIndex, 1);  
  localStorage.setItem('orders', JSON.stringify(orders));
  renderOrdersTable(); 
}

renderOrdersTable();


function renderOrdersTable(filteredOrders) {
  const ordersTableBody = document.querySelector('#orders-table tbody');
  ordersTableBody.innerHTML = ''; 

  const orders = filteredOrders || JSON.parse(localStorage.getItem('orders')) || [];

  orders.forEach((order, orderIndex) => {
    const row = document.createElement('tr');

    
    const itemsHtml = order.items.map((item, itemIndex) => {
      return `
        <div class="order-item">
          <input type="text" value="${item.name}" class="edit-item-name" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
          <input type="number" value="${item.qty}" class="edit-item-qty" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
          <input type="number" value="${item.price}" class="edit-item-price" data-order-index="${orderIndex}" data-item-index="${itemIndex}" />
        </div>`;
    }).join('');

    row.innerHTML = `
      <td>${order.id}</td>
      <td>
        <input type="text" value="${order.customerName}" class="edit-customer-name" data-order-index="${orderIndex}" />
      </td>
      <td>
        <input type="text" value="${order.phoneNumber}" class="edit-customer-phone" data-order-index="${orderIndex}" />
      </td>
      <td>
        ${itemsHtml}
      </td>
      <td>$${order.total.toFixed(2)}</td>
      <td>
        <button onclick="saveOrder(${orderIndex})">Save Changes</button>
        <button onclick="removeOrder(${orderIndex})">Remove</button>
      </td>
    `;

    ordersTableBody.appendChild(row);
  });

  
  document.querySelectorAll('.edit-customer-name').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].customerName = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-customer-phone').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].phoneNumber = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  
  document.querySelectorAll('.edit-item-name').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].name = e.target.value;
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-item-qty').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].qty = parseInt(e.target.value);
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });

  document.querySelectorAll('.edit-item-price').forEach(field => {
    field.addEventListener('input', (e) => {
      const orderIndex = e.target.getAttribute('data-order-index');
      const itemIndex = e.target.getAttribute('data-item-index');
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      orders[orderIndex].items[itemIndex].price = parseFloat(e.target.value);
      localStorage.setItem('orders', JSON.stringify(orders));
    });
  });
}


function searchOrders() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchInput) || 
    order.phoneNumber.includes(searchInput)
  );

  if (filteredOrders.length === 0) {
    alert('No orders found with the provided Order ID or Phone Number.');
  } else {
    renderOrdersTable(filteredOrders);  
  }
}



function renderCustomersTable() {
  const customersTableBody=document.querySelector('#customers-table tbody');
  customersTableBody.innerHTML='';
  const orders=JSON.parse(localStorage.getItem('orders'))||[];
  const customersMap={};
  orders.forEach(order=>{
    if(!customersMap[order.phoneNumber]){
      customersMap[order.phoneNumber]={
        name:order.customerName,
        phoneNumber:order.phoneNumber,
        totalSpend:0
      };
    }
    customersMap[order.phoneNumber].totalSpend+=order.total;
  });
  const customers=Object.values(customersMap);
  customers.forEach((customer,index)=>{
    const row=document.createElement('tr');
    row.innerHTML=`
      <td>
        <input type="text" value="${customer.name}" class="edit-customer-name" data-index="${index}" />
      </td>
      <td>
        <input type="text" value="${customer.phoneNumber}" class="edit-customer-phone" data-index="${index}" />
      </td>
      <td>$${customer.totalSpend.toFixed(2)}</td>
      <td>
        <button onclick="saveCustomerDetails(${index},'${customer.phoneNumber}')">Save</button>
      </td>
    `;
    customersTableBody.appendChild(row);
  });
  localStorage.setItem('customersData',JSON.stringify(customers));
}

function saveCustomerDetails(index,oldPhoneNumber){
  const customers=JSON.parse(localStorage.getItem('customersData'))||[];
  const orders=JSON.parse(localStorage.getItem('orders'))||[];
  const newName=document.querySelectorAll('.edit-customer-name')[index].value;
  const newPhone=document.querySelectorAll('.edit-customer-phone')[index].value;
  orders.forEach(order=>{
    if(order.phoneNumber===oldPhoneNumber){
      order.customerName=newName;
      order.phoneNumber=newPhone;
    }
  });
  localStorage.setItem('orders',JSON.stringify(orders));
  alert('Customer details updated successfully!');
  renderCustomersTable();
}


function searchCustomer() {
  const searchInput = document.getElementById('customer-search-bar').value.trim();
  const customersTableBody = document.querySelector('#customers-table tbody');

  if (!searchInput) {
    alert("Please enter a phone number to search.");
    return;
  }

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  

  const filteredCustomers = orders.filter(order => order.phoneNumber.includes(searchInput));

  customersTableBody.innerHTML = '';

  if (filteredCustomers.length > 0) {
    filteredCustomers.forEach(order => {
      const row = `
        <tr>
          <td>${order.customerName}</td>
          <td>${order.phoneNumber}</td>
          <td>$${order.total.toFixed(2)}</td>
          <td>
            <button onclick="editCustomer('${order.phoneNumber}')">Edit</button>
          </td>
        </tr>
      `;
      customersTableBody.insertAdjacentHTML('beforeend', row);
    });
  } else {
    alert("No customer found with the entered phone number.");
  }
}
