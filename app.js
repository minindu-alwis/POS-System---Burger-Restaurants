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
      <div class="sidebar-logo">FAVBurger</div>
      <nav class="navbar-menu">
    <a href="#" class="nav-item active">Home</a>
    <a href="#remove" class="nav-item">Remove</a>
    <a href="#additems" class="nav-item">Add Items</a>
    <a href="#" class="nav-item">Promos</a>
    <a href="#" class="nav-item">Settings</a>
    <section class="completed-orders">
</nav>

    </aside>

  <main class="main-content">
  <header class="header">
    <h1 class="restaurant-name">Mos Burger</h1>
    <input type="text" class="search-bar" id="search-bar" placeholder="Search menu by ID..." />
    <button class="search-btn" id="search-btn" onClick="reding()">Search</button>
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


<div id="additems">
<div id="item-creation-section" class="item-form">
  <h2>Create Menu Item</h2>
  <input type="text" id="new-item-id" placeholder="Enter Burger ID">
  <input type="text" id="new-item-name" placeholder="Enter Item Name">
  <input type="number" id="new-item-price" placeholder="Enter Price">
  <input type="file" id="new-item-image" accept="image/*">
  <button type="button" onclick="addNewItem()">Add Menu Item</button>
</div>

</div>


    `;
}
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
  { id: "B1001", name: "Classic Burger (Large)", price: 750.00, image: "img/111.jpg" },
  { id: "B1002", name: "Classic Burger (Regular)", price: 1500.00, image: "img/111.jpg" },
  { id: "B1003", name: "Turkey Burger", price: 1600.00, image: "img/111.jpg" },
  { id: "B1004", name: "Chicken Burger (Large)", price: 1400.00, image: "img/111.jpg" },
  { id: "B1005", name: "Chicken Burger (Regular)", price: 800.00, image: "img/111.jpg" },
  { id: "B1006", name: "Cheese Burger (Large)", price: 1000.00, image: "img/111.jpg" },
  { id: "B1007", name: "Cheese Burger (Regular)", price: 600.00, image: "img/111.jpg" },
  { id: "B1008", name: "Bacon Burger", price: 650.00, image: "img/111.jpg" },
  { id: "B1009", name: "Shawarma Burger", price: 800.00, image: "img/111.jpg" },
  { id: "B1010", name: "Olive Burger", price: 1800.00, image: "img/111.jpg" },
  { id: "B1012", name: "Double-Cheese Burger", price: 1250.00, image: "img/111.jpg" },
  { id: "B1013", name: "Crispy Chicken Burger (Regular)", price: 1200.00, image: "img/111.jpg" },
  { id: "B1014", name: "Crispy Chicken Burger (Large)", price: 1600.00, image: "img/111.jpg" },
  { id: "B1015", name: "Paneer Burger", price: 900.00, image: "img/111.jpg" },
  { id: "B1016", name: "Crispy Chicken Submarine (Large)", price: 2000.00, image: "img/111.jpg" },
  { id: "B1017", name: "Crispy Chicken Submarine (Regular)", price: 1500.00, image: "img/111.jpg" },
  { id: "B1018", name: "Chicken Submarine (Large)", price: 1800.00, image: "img/111.jpg" },
  { id: "B1019", name: "Chicken Submarine (Regular)", price: 1400.00, image: "img/111.jpg" },
  { id: "B1020", name: "Grinder Submarine", price: 2300.00, image: "img/111.jpg" },
  { id: "B1021", name: "Cheese Submarine", price: 2200.00, image: "img/111.jpg" },
  { id: "B1022", name: "Double Cheese n Chicken Submarine", price: 1900.00, image: "img/111.jpg" },
  { id: "B1023", name: "Special Horgie Submarine", price: 2800.00, image: "img/111.jpg" },
  { id: "B1024", name: "MOS Special Submarine", price: 3000.00, image: "img/111.jpg" },
  { id: "B1025", name: "Steak Fries (Large)", price: 1200.00, image: "img/111.jpg" },
  { id: "B1026", name: "Steak Fries (Medium)", price: 600.00, image: "img/111.jpg" },
  { id: "B1027", name: "French Fries (Large)", price: 800.00, image: "img/111.jpg" },
  { id: "B1028", name: "French Fries (Medium)", price: 650.00, image: "img/111.jpg" },
  { id: "B1029", name: "French Fries (Small)", price: 450.00, image: "img/111.jpg" },
  { id: "B1030", name: "Sweet Potato Fries (Large)", price: 600.00, image: "img/111.jpg" },
  { id: "B1031", name: "Chicken n Cheese Pasta", price: 1600.00, image: "img/111.jpg" },
  { id: "B1032", name: "Chicken Penne Pasta", price: 1700.00, image: "img/111.jpg" },
  { id: "B1033", name: "Ground Turkey Pasta Bake", price: 2900.00, image: "img/111.jpg" },
  { id: "B1034", name: "Creamy Shrimp Pasta", price: 2000.00, image: "img/111.jpg" },
  { id: "B1035", name: "Lemon Butter Pasta", price: 1950.00, image: "img/111.jpg" },
  { id: "B1036", name: "Tagliatelle Pasta", price: 2400.00, image: "img/111.jpg" },
  { id: "B1037", name: "Baked Ravioli", price: 2000.00, image: "img/111.jpg" },
  { id: "B1038", name: "Fried Chicken (Small)", price: 1200.00, image: "img/111.jpg" },
  { id: "B1039", name: "Fried Chicken (Regular)", price: 2300.00, image: "img/111.jpg" },
  { id: "B1040", name: "Fried Chicken (Large)", price: 3100.00, image: "img/111.jpg" },
  { id: "B1041", name: "Hot Wings (Large)", price: 2400.00, image: "img/111.jpg" },
  { id: "B1042", name: "Devilled Chicken (Large)", price: 900.00, image: "img/111.jpg" },
  { id: "B1043", name: "BBQ Chicken (Regular)", price: 2100.00, image: "img/111.jpg" },
  { id: "B1044", name: "Pepsi (330ml)", price: 990.00, image: "img/111.jpg" },
  { id: "B1045", name: "Coca-Cola (330ml)", price: 1230.00, image: "img/111.jpg" },
  { id: "B1046", name: "Sprite (330ml)", price: 1500.00, image: "img/111.jpg" },
  { id: "B1047", name: "Mirinda (330ml)", price: 850.00, image: "img/111.jpg" }
];


// Debug log to check menuItems before rendering
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
  
    // Check if menuItems is an array
    if (!Array.isArray(menuItems)) {
      console.error("menuItems is not an array or is undefined");
      return;
    }
  
    // Check if the menuItems array is empty
    if (menuItems.length === 0) {
      console.error("menuItems array is empty");
      return;
    }
  
    // Get the container where the menu items will be displayed
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
      console.error("menu-grid container not found");
      return;
    }
  
    // Create a fragment to append all items efficiently
    const fragment = document.createDocumentFragment();
    let itemsFound = false;
  
    // Iterate through each item in the menuItems array
    menuItems.forEach((item) => {
      // Check if the searchQuery matches the item ID or name (case-insensitive)
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
        // If no search query is provided, display all items
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
  
    // If no items are found based on the search query
    if (!itemsFound) {
      menuGrid.innerHTML = '<p style="color:red;">No items found</p>'; 
    } else {
      menuGrid.innerHTML = '';  // Clear current menu items
      menuGrid.appendChild(fragment);  // Add filtered items to the grid
    }
  }
  
}