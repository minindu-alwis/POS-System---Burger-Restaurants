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

comp().then(res=>res.text()).then(data=>{
    document.getElementById("root").innerHTML=data
    console.log(data)
})


async function comp(){
   return await fetch("/login.html");
  
}

function mainburgerpage(){
    return(
        ` 
       <div class="background-container">
        <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
<div>
`
     )

}