//import categories from "./category";
/*const products = [];
const categories = [];
const stores = [];

function loadData() {
  products = JSON.parse(localStorage.getItem("PRODUCTS"));
  categories = JSON.parse(localStorage.getItem("CATEGORIES"));
  stores = JSON.parse(localStorage.getItem("STORES"));
}*/
let customer = undefined;
let methodsBuy = [
  { text: "Efectivo", value: 1 },
  { text: "Transferencia", value: 2 }
];

function createOption(text, value) {
  return `<option value ="${value}">
                          ${text}
                      </option>`;
}

function init() {
  customer = {};
  $("#methodBuy").html(
    methodsBuy.map(mb => createOption(mb.text, mb.value)).join("")
  );
  $("#store").html(stores.map(mb => createOption(mb.name, mb.id)).join(""));
  let now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);

  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#retirementDate").val(today);
  $('[data-toggle="tooltip"]').tooltip();
}

window.onload = init;
