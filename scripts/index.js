let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("container");

let navDiv = document.getElementById("nav");
let filter = document.getElementById("filter");

let signIn = JSON.parse(localStorage.getItem("signIn")) || [];
let signedUp = JSON.parse(localStorage.getItem("signUp")) || [];

let data;

// getData();

async function getData() {
  let res = await fetch(`https://api-data-vl6x.onrender.com/products`);
  data = await res.json();
  // console.log(data);

  if (signIn == null) {
    window.location.href = "signup.html";
  } else {
    console.log(data);
    appendData(data);
    navDetails(signedUp);
  }
}

function navDetails(data) {
  data.forEach((elem) => {
    // let div = document.createElement("div");
    let button = document.createElement("h1");
    button.textContent = elem.username;

    let cartPage = document.createElement("a");
    cartPage.textContent = "Cart";

    let logout = document.createElement("a");
    logout.textContent = "Logout"
    logout.addEventListener('click',function(){
      signOut();
    })

    cartPage.addEventListener("click", function () {
      setTimeout(function () {
        window.location.href = "cart.html";
      }, 2000);
    });
    // div.append(button,cartPage);
    navDiv.append(button, cartPage,logout);
  });
}

function appendData(data) {
  data.forEach((el) => {
    // container.innerHTML=null;

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;

    let name = document.createElement("h1");
    name.innerText = el.brand;

    let price = document.createElement("h3");
    price.innerText = `₹` + el.price;

    let category = document.createElement("p");
    category.innerText = el.category;

    let cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.addEventListener("click", function () {
      AddToCart(el);
    });

    div.append(img, name, price, category, cartBtn);
    container.append(div);
  });
}

filter.addEventListener("change", function () {
  // console.log('SSSSS',data,"filter",filter.value)

  if (filter.value == "") {
    appendData(data);
  } else {
    container.innerHTML = null;

    let filteredData = data.filter(function (elem) {
      // console.log("DDDD",elem.value,"Data.c0",data.category)
      return elem.category === filter.value;
    });
    console.log(filteredData);
    appendData(filteredData);
  }
});

function AddToCart(data) {
  let isCartAdded = false;

  for (let i = 0; i < cartLS.length; i++) {
    if (cartLS[i].productId === data.productId) {
      alert("Product has alreasy been added!");
      isCartAdded = true;
    }
  }

  if (isCartAdded === false) {
    cartLS.push(data);
    localStorage.setItem("cart", JSON.stringify(cartLS));
    alert("Product added successfully!");
    console.log(cartLS);
  }

  // cartLS.push(data);
  // localStorage.setItem("cart", JSON.stringify(cartLS));
  // console.log()
}


function signOut(){
  localStorage.removeItem('signIn');
  let data = JSON.parse(localStorage.getItem('signIn'))
  if(data == []){
    window.location.href = "index.html";
  }else{
    window.location.href = "signin.html";
  }
 
}