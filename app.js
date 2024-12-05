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
        <div class="background-container">
            <div style="display:flex;justify-content:space-between;align-items:center;background-color:#ff9800;padding:10px;">
                <div style="font-size:24px;font-weight:bold;color:white;">Burger Shop POS</div>
                <div id="nav-links" style="display:flex;gap:15px;">
                    <a href="#home" style="text-decoration:none;color:white;font-size:18px;">Home</a>
                    <a href="#orders" style="text-decoration:none;color:white;font-size:18px;">Orders</a>
                    <a href="#menu" style="text-decoration:none;color:white;font-size:18px;">Menu</a>
                    <a href="#settings" style="text-decoration:none;color:white;font-size:18px;">Settings</a>
                </div>
                <div id="menu-toggle" style="display:none;cursor:pointer;">
                    <span style="font-size:24px;color:white;">☰</span>
                </div>
            </div>
        </div>
    `;
}



function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'none' || navLinks.style.display === '') {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.backgroundColor = '#ff9800';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '50px';
        navLinks.style.width = '100%';
        navLinks.style.padding = '10px';
    } else {
        navLinks.style.display = 'none';
    }
}



function handleResize() {
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    if (window.innerWidth > 600) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        menuToggle.style.display = 'none';
    } else {
        navLinks.style.display = 'none';
        menuToggle.style.display = 'block';
    }
}


