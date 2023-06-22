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
  
  function createCard(title, image, description = "", url= "#") {
    return `<a class="text-dark" href="${url}"><div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="../resources/img/${image}" alt="${title}">
                          <div class="card-body d-flex flex-column">
                              <h5 class="card-title w-100 text-center">${title}</h5>
                              <p class="card-text w-100 text-center">${description}</>
                          </div>
                      </div></a>`;
  }
  
  function loadStores() {
    let container = document.getElementById("stores");
    container.innerHTML = "";
    let cards = stores.map(c => createCard(c.name, 'store.jpg', undefined, `store.html?id=${c.id}`));
    const chunkSize = 3;
    for (let i = 0, n = 0; i < cards.length; i += chunkSize, n++) {
      const chunk = cards.slice(i, i + chunkSize);
      container.innerHTML += createRow(chunk.map(createColum).join(""));
    }
  }
  
  function init() {
    loadStores();
    $('[data-toggle="tooltip"]').tooltip();
  }
  
  window.onload = init;
  