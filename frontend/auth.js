async function register(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

let res=await fetch("http://127.0.0.1:5000/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username:u,password:p})
});

let data=await res.json();
document.getElementById("msg").innerText=data.message;
}

async function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

let res=await fetch("http://127.0.0.1:5000/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username:u,password:p})
});

let data=await res.json();

document.getElementById("msg").innerText=data.message;

if(data.message==="Login Success"){
window.location.href="index.html";
}
}