let cartLS = JSON.parse(localStorage.getItem("cart")) || [];

let container = document.getElementById("container");

let totalprice = document.getElementById("total-price");


console.log("ELEM", cartLS);

let value=0;

cartLS.forEach(function (elem, index) {

    value = value + Number(elem.price);
    totalprice.innerText = value;
  let div = document.createElement("div");
  let imge = document.createElement("img");
  imge.src = elem.img;
  let brand = document.createElement("h2");
  brand.textContent = elem.brand;
  let p = document.createElement("p");
  p.innerText = elem.name;
  let price = document.createElement("p");

  price.textContent = "₹" + elem.price;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    deleteCart(index);
  });

  div.append(imge, brand, p, price, deleteBtn);
  container.append(div);
});

function deleteCart(index) {
  let filtered = cartLS.filter((el, i) => {
    return i != index;
  });
  console.log(filtered);

  localStorage.setItem("cart", JSON.stringify(filtered));
  window.location.reload();
}
