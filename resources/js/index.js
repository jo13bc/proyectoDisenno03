//import categories from "./category";
/*const products = [];
const categories = [];
const stores = [];

function loadData() {
  products = JSON.parse(localStorage.getItem("PRODUCTS"));
  categories = JSON.parse(localStorage.getItem("CATEGORIES"));
  stores = JSON.parse(localStorage.getItem("STORES"));
}*/

function createRow(columns) {
  return `<div class="row mb-3">
                        ${columns}
                    </div>`;
}

function createColum(body) {
  return `<div class="col">
                        ${body}
                    </div>`;
}

function createCard(title, image, description = "", url= "#", id=undefined) {
  return `<a class="text-dark" href="${url}" ${id ? ' onclick="showProduct(' + id + ')"' : ''}><div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="../resources/img/${image}" alt="${title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title w-100 text-center">${title}</h5>
                            <p class="card-text w-100 text-center">${description}</>
                        </div>
                    </div></a>`;
}

function loadCategories() {
  let container = document.getElementById("categories");
  container.innerHTML = "";
  let cards = categories.map(c => createCard(`Categoría: ${c.name}`, c.image, undefined, `category.html?id=${c.id}`));
  const chunkSize = 3;
  for (let i = 0; i < cards.length; i += chunkSize) {
    const chunk = cards.slice(i, i + chunkSize);
    container.innerHTML += createRow(chunk.map(createColum).join(""));
  }
}

function createCaruselItem(body, isActive, n) {
  let indicator = document.getElementById("productsIndicator");
  indicator.innerHTML = `<li data-target="#products" data-slide-to="${n}"${isActive
    ? " class='active'"
    : ""}></li>`;
  return `<div class="carousel-item${isActive ? " active" : ""}">
  <div class="d-flex justify-content-around">${body}</div>
  </div>`;
}

function loadProducts() {
  let inner = document.getElementById("productsInner");
  inner.innerHTML = "";
  let cards = products.filter(p => p.bestSeller)
    .map(p => createCard(p.name, p.image, p.price, '#products', p.id));
  const chunkSize = 3;
  for (let i = 0, n = 0; i < cards.length; i += chunkSize, n++) {
    const chunk = cards.slice(i, i + chunkSize);
    inner.innerHTML += createCaruselItem(chunk.join(""), i === 0, n);
  }
}

function showProduct(id) {
  let product = products.find(p => p.id === id);
  let name = document.getElementById("productName");
  let description = document.getElementById("productDescription");
  let price = document.getElementById("productPrice");
  let image = document.getElementById("productImage");
  name.innerHTML = product.name;
  description.innerHTML = product.description;
  price.innerHTML = product.price;
  image.src = `../resources/img/${product.image}`;
  image.alt = product.name;
  $("#productModal").modal("show");
}

function addProduct() {
  let id = document.getElementById("productId");
  let count = document.getElementById("productCount");
  shoppingCar.push({ id, count: parseInt(count.value) });
  count.value = 0;
  $("#productModal").modal("hide");
}

function countAlter(action) {
  let count = document.getElementById("productCount");
  let num = count.value ? parseInt(count.value) : 0;
  if (action === "add") {
    count.value = `${num+1}`;
  } else if (num > 0) {
    count.value = `${num-1}`;
  }
}

function init() {
  //loadData();
  loadCategories();
  loadProducts();
  $('[data-toggle="tooltip"]').tooltip();
}

window.onload = init;
