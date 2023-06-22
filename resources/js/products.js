//import categories from "./category";
/*const products = [];
const categories = [];
const stores = [];

function loadData() {
  products = JSON.parse(localStorage.getItem("PRODUCTS"));
  categories = JSON.parse(localStorage.getItem("CATEGORIES"));
  stores = JSON.parse(localStorage.getItem("STORES"));
}*/
let category = undefined;

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

function createCard(title, image, description = "", id = undefined) {
  return `<a class="text-dark" href="#" onclick="showProduct(${id})"><div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="../resources/img/${image}" alt="${title}">
                          <div class="card-body d-flex flex-column">
                              <h5 class="card-title w-100 text-center">${title}</h5>
                              <p class="card-text w-100 text-center">${description}</p>
                          </div>
                      </div></a>`;
}

function createTabItem(body, isActive, n) {
  let indicator = document.getElementById("products");
  indicator.innerHTML += `<li class="page-item">
    <a class="page-link${isActive ? ' active' : ''}" data-toggle="tab" href="#tab${n}" role="tab">${n}</a>
    </li>`;
  return `<div class="tab-pane ${isActive ? 'show' : 'fade'} ${isActive ? ' active' : ''}" id="tab${n}" role="tabpanel">
  <div class="d-flex justify-content-around">${body}</div>
  </div>`;
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

function loadProducts() {
  let container = document.getElementById("productsContent");
  container.innerHTML = "";
  let cards = products.map(p => createCard(p.name, p.image, p.price, p.id));
  const chunkSize = 3;
  for (let i = 0, n = 0; i < cards.length; i += chunkSize, n++) {
    const chunk = cards.slice(i, i + chunkSize);
    container.innerHTML += createTabItem(chunk.join(""), i === 0, n);
  }
}

function init() {
  loadProducts();
  $('[data-toggle="tooltip"]').tooltip();
}

window.onload = init;
