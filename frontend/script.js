async function searchProduct(){

let query=document.getElementById("search").value;

let res=await fetch(`https://ezekart-backend.onrender.com/search?q=${query}`);
let data=await res.json();

showProducts(data);
}

function searchCategory(cat){
document.getElementById("search").value=cat;
searchProduct();
}

function showProducts(data){

let box=document.getElementById("products");
box.innerHTML="";

data.forEach(p=>{
box.innerHTML+=`
<div class="product">
<img src="${p.image}" width="180">
<h3>${p.title}</h3>
<p>${p.price}</p>
<a href="${p.link}" target="_blank">Buy Now</a>
</div>`;
});
}