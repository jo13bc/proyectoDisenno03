const products = [
  {
    id: 1,
    name: "Ramo de Rosas Rojas",
    description:
      "Clásico y elegante ramo compuesto por hermosas rosas rojas, ideal para demostrar amor y pasión",
    price: "$59.99",
    categories: [1],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "1.jpg"
  },
  {
    id: 2,
    name: "Ramo de Margaritas y Girasoles",
    description:
      "Alegre y vibrante ramo que combina margaritas y girasoles, perfecto para transmitir felicidad y energía",
    price: "$39.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "2.png"
  },
  {
    id: 3,
    name: "Ramo de Lirios Blancos",
    description:
      "Elegante y sofisticado ramo de lirios blancos, que transmite pureza y equilibrio",
    price: "$69.99",
    categories: [3, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "3.jpg"
  },
  {
    id: 4,
    name: "Ramo de Tulipanes Multicolores",
    description:
      "Colorido y alegre ramo compuesto por tulipanes de diferentes colores, ideal para regalar en cualquier ocasión",
    price: "$49.99",
    categories: [4, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "4.jpg"
  },
  {
    id: 5,
    name: "Ramo de Orquídeas Exóticas",
    description:
      "Exótico y sofisticado ramo de orquídeas, que destaca por su belleza y elegancia",
    price: "$89.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "5.jpg"
  },
  {
    id: 6,
    name: "Ramo de Rosas y Lirios",
    description:
      "Clásico y elegante ramo que combina rosas y lirios, perfecto para demostrar amor y admiración",
    price: "$79.99",
    categories: [1, 3, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "6.jpg"
  },
  {
    id: 7,
    name: "Ramo de Flores Silvestres",
    description:
      "Romántico y delicado ramo compuesto por flores silvestres, que brinda una sensación de tranquilidad y calma",
    price: "$59.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "7.jpg",
    bestSeller: true
  },
  {
    id: 8,
    name: "Ramo de Hortensias Azules",
    description:
      "Dulce y elegante ramo de hortensias azules, que transmite una sensación de paz y serenidad",
    price: "$69.99",
    categories: [5],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "8.jpeg"
  },
  {
    id: 9,
    name: "Ramo de Rosas Blancas",
    description:
      "Elegante y delicado ramo de rosas blancas, que simboliza la pureza y la inocencia",
    price: "$59.99",
    categories: [1],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "9.jpg"
  },
  {
    id: 10,
    name: "Ramo de Flores Tropicales",
    description:
      "Exótico y vibrante ramo compuesto por flores tropicales, ideal para transmitir alegría y energía",
    price: "$89.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "10.jpg"
  },
  {
    id: 11,
    name: "Ramo de Peonías Rosadas",
    description:
      "Romántico y dulce ramo de peonías rosadas, perfecto para demostrar amor y ternura",
    price: "$79.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "11.jpg",
    bestSeller: true
  },
  {
    id: 12,
    name: "Ramo de Tulipanes Rojos",
    description:
      "Apasionado y vibrante ramo de tulipanes rojos, que simboliza el amor y la pasión",
    price: "$49.99",
    categories: [4, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "12.jpg",
    bestSeller: true
  },
  {
    id: 13,
    name: "Ramo de Flores del Campo",
    description:
      "Sencillo y hermoso ramo compuesto por flores del campo, que brinda una sensación de paz y tranquilidad",
    price: "$39.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "13.jpg"
  },
  {
    id: 14,
    name: "Ramo de Rosas y Margaritas",
    description:
      "Dulce y alegre ramo que combina rosas y margaritas, ideal para demostrar amistad y cariño",
    price: "$69.99",
    categories: [1, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "14.jpeg"
  },
  {
    id: 15,
    name: "Ramo de Iris Morados",
    description:
      "Elegante y sofisticado ramo de iris morados, que transmite sabiduría y lealtad",
    price: "$59.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "15.jpg"
  },
  {
    id: 16,
    name: "Ramo de Flores Blancas",
    description:
      "Sencillo y delicado ramo compuesto por flores blancas, que simboliza la pureza y la inocencia",
    price: "$49.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "16.jpg"
  },
  {
    id: 17,
    name: "Ramo de Rosas y Gerberas",
    description:
      "Alegre y colorido ramo que combina rosas y gerberas, perfecto para transmitir energía y vitalidad",
    price: "$79.99",
    categories: [1, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "17.jpg",
    bestSeller: true
  },
  {
    id: 18,
    name: "Ramo de Lirios y Gerberas",
    description:
      "Dulce y vibrante ramo que combina lirios y gerberas, ideal para demostrar alegría y optimismo",
    price: "$69.99",
    categories: [3, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "18.jpg"
  },
  {
    id: 19,
    name: "Ramo de Flores Exóticas y Tropicales",
    description:
      "Exótico y vibrante ramo compuesto por flores exóticas y tropicales, que transmite energía y vitalidad",
    price: "$99.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "19.jpg"
  },
  {
    id: 20,
    name: "Ramo de Rosas y Claveles",
    description:
      "Elegante y sofisticado ramo que combina rosas y claveles, perfecto para demostrar admiración y respeto",
    price: "$79.99",
    categories: [1, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "20.png",
    bestSeller: true
  },
  {
    id: 21,
    name: "Ramo de Flores de Otoño",
    description:
      "Cálido y acogedor ramo compuesto por flores de otoño, ideal para regalar en época de frío",
    price: "$59.99",
    categories: [6],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "21.jpg"
  },
  {
    id: 22,
    name: "Ramo de Margaritas Blancas",
    description:
      "Sencillo y delicado ramo de margaritas blancas, que brinda una sensación de frescura y limpieza",
    price: "$39.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "22.jpg"
  },
  {
    id: 23,
    name: "Ramo de Flores Blancas y Azules",
    description:
      "Delicado y elegante ramo compuesto por flores blancas y azules, que simboliza la pureza y la tranquilidad",
    price: "$69.99",
    categories: [5],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "23.jpg"
  },
  {
    id: 24,
    name: "Ramo de Rosas y Tulipanes",
    description:
      "Romántico y dulce ramo que combina rosas y tulipanes, perfecto para demostrar amor y admiración",
    price: "$79.99",
    categories: [1, 4, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "24.jpg"
  },
  {
    id: 25,
    name: "Ramo de Flores de Primavera",
    description:
      "Alegre y vibrante ramo compuesto por flores de primavera, que transmite energía y vitalidad",
    price: "$59.99",
    categories: [6],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "25.jpeg"
  },
  {
    id: 26,
    name: "Ramo de Flores Rosadas",
    description:
      "Dulce y delicado ramo compuesto por flores rosadas, que simboliza el amor y la ternura",
    price: "$49.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "26.jpg",
    bestSeller: true
  },
  {
    id: 27,
    name: "Ramo de Liliums Blancos",
    description:
      "Elegante y sofisticado ramo de Liliums blancos, que transmite pureza y equilibrio",
    price: "$79.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "27.jpg"
  },
  {
    id: 28,
    name: "Ramo de Flores Silvestres y Rosas",
    description:
      "Dulce y romántico ramo que combina flores silvestres y rosas, ideal para demostrar amor y cariño",
    price: "$69.99",
    categories: [1, 2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "28.jpg"
  },
  {
    id: 29,
    name: "Ramo de Flores de Invierno",
    description:
      "Cálido y acogedor ramo compuesto por flores de invierno, ideal para regalar en época de frío",
    price: "$59.99",
    categories: [6],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "29.jpg"
  },
  {
    id: 30,
    name: "Ramo de Flores de Verano",
    description:
      "Colorido y vibrante ramo compuesto por flores de verano, que transmite alegría y vitalidad",
    price: "$49.99",
    categories: [6],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "30.jpg"
  },
  {
    id: 31,
    name: "Ramo de Flores Multicolores",
    description:
      "Alegre y vibrante ramo compuesto por flores de diferentes colores, perfecto para regalar en cualquier ocasión",
    price: "$39.99",
    categories: [2],
    stores: [1, 2, 3, 4, 5, 6, 7],
    image: "31.jpg"
  }
];

const categories = [
  {
    id: 6,
    name: "Estación"
  },
  {
    id: 2,
    name: "Surtido"
  },
  {
    id: 5,
    name: "Azul"
  },
  {
    id: 1,
    name: "Rosas"
  },
  {
    id: 3,
    name: "Lirios"
  },
  {
    id: 4,
    name: "Tulipanes"
  }
].map(loadImage);

const stores = [
  {
    id: 1,
    name: "Flores del Valle",
    address: "San José",
    image: "store.jpg"
  },
  {
    id: 2,
    name: "Jardines de la Montaña",
    address: "Alajuela",
    image: "store.jpg"
  },
  {
    id: 3,
    name: "Flores del Este",
    address: "Cartago",
    image: "store.jpg"
  },
  {
    id: 4,
    name: "Flores de la Selva",
    address: "Heredia",
    image: "store.jpg"
  },
  {
    id: 5,
    name: "Flores del Mar",
    address: "Guanacaste",
    image: "store.jpg"
  },
  {
    id: 6,
    name: "Flores del Oeste",
    address: "Puntarenas",
    image: "store.jpg"
  },
  {
    id: 7,
    name: "Flores del Caribe",
    address: "Limón",
    image: "store.jpg"
  }
];

const shoppingCar = [];

function loadImage(category) {
  let product = products.find(
    p => p.categories.find(id => id === category.id)
  );
  category.image = product ? product.image : "category.png";
  return category;
}

function saveData() {
  /*localStorage.setItem("PRODUCTS", JSON.stringify(products));
  localStorage.setItem("CATEGORIES", JSON.stringify(categories.map(loadImage)));
  localStorage.setItem("STORES", JSON.stringify(stores));*/
}

function init() {
  saveData();
}

window.onload = init;
