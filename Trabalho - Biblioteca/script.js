const cartItemsEl = document.querySelector(".listaCompras");
const subTotalEl = document.querySelector(".shopping");
let listaCompra = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

var livros = [
  {
    id: 1,
    name: "Terror na orla dos caranguejos.",
    sumario:
      "São dias frios na Orla dos Crangueijos. Após o surgimento de uma frente fria sem explicação na cidade tropical, e uma onda de assassinatos, moradores e forças policiais se mobilizam para resolver os mistérios.",
    preco: 22.9,
    pictureURL: "/inputs/terrorNaOrlaDosCaranguejos.png",
    href: "http://127.0.0.1:5500/inputs/terrorNaOrlaDosCaranguejos.png",
    categoria: "terror",
    pdf: "/inputs/terror.txt",
  },
  {
    id: 2,
    name: "Livro muito assustador demais",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 3,
    name: "Livro muito assustador maior que tudo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 4,
    name: "Livro muito assustador cacete",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 5,
    name: "Livro muito assustador limão azedo",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    id: 6,
    name: "Livro muito assustador chico",
    sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "terror",
  },
  {
    name: "Livro jesus",
   id: 7,
     sumario:
      "Esse livro conta a historia de algo muito assustador que da medo demais aaaaa bu bu bu bu",
    preco: 22.9,
    pictureURL:
      "/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "acao",
  },
  {
    name: "aquele belo par de olhos",
   id:20 ,
     sumario:
      "Anne estava tão confusa com tudo o que estava acontecendo em sua vida, tantas mudanças e confusões, mas de repente parece que tudo se acalmou com aquele belo par de olhos olhando fixamente para ela. Aqueles olhos pareciam que sorriam para ela, e então Anne saiu do transe após duas meninas passarem em sua frente fofocando sobre algo aleatório...",
    preco: 150.9,
    pictureURL:
      "/inputs/Muteless_2.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },
  {
    name: "Um beijo à meia-noite",
   id:21 ,
     sumario:
      "Tudo começou com um beijo à meia-noite. Todos já tinham se recolhido para suas casas, mas lá estava eu, fugindo dos meus pais, por aqueles becos escuros apenas com uma pequena lamparina que mal iluminava o caminho. Ao virar um dos becos, me esbarrei com um guarda caindo sobre ele...",
    preco: 45.9,
    pictureURL:
      "/inputs/love_6.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },
  {
    name: "O campo estrelado",
   id:22 ,
     sumario:
      "Estava eu numa bela noite de sexta-feira, deitada sobre a grama do campo, observando as estrelas, quando de repente avistei no céu uma luz azul, diferente dos demais corpos estelares. Era um formato de um corpo. Não acreditei no que meus olhos estavam vendo. Era um homem esbelto com uma beleza surreal. Nunca tinha visto algo assim. Ele foi chegando perto de mim. Meu coração estava a mil mal conseguia me mover...",
    preco: 65.9,
    pictureURL:
      "/inputs/love_1.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },
  {
    name: "Não há distância para o amor",
   id:23 ,
     sumario:
      "Tudo que eu tinha era ele, e lá estava ele na porta de embarque para o outro lado do mundo, sem previsão de volta, sem aquele sorriso no rosto que eu amo. E o pior de tudo... sem mim. Tudo o que ele conseguiu dizer quando nós demos o último abraço foi: 'Não há distância para o amor, eu te amo Elise e prometo voltar por nós...",
    preco: 75.9,
    pictureURL:
      "/inputs/love.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },
  {
    name: "Detetive do amor",
   id:24 ,
     sumario:
      "E lá estava Grace, a detetive mais descolada que vocês poderiam conhecer. Ela tinha tudo que um detetive precisaria ter para conseguir desvendar os maiores casos de Tenessi. Até que, um dia, Grace se deparou com um caso do qual ela não conseguia desvendar: o roubo do Banco Central. O presidente estava maluco com tanta falta de informação sobre o roubo. Só ninguém esperava que Grace se apaixonaria pelo criminoso, que aliás, era o filho do...",
    preco: 85.9,
    pictureURL:
      "/inputs/Muteless_4.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },
  {
    name: "O amor em tempos de guerra",
   id:25 ,
     sumario:
      "Tudo estava um caos em meu país, as forças armadas da Ilha Montina estavam por todos os lados, destruindo tudo o que viam pela frente. Era um cenário catastrófico. Perdi meus pais na guerra, sentia uma falta imensa dos meus amigos, e cá estava eu, fugindo e me escondendo dos soldados Montineses, até que um dia entrou dois soldados no meu esconderijo. Um deles olhou em minha direção, mas não fez nada, apenas chamou seu companheiro dizendo: 'Vamos, Carleu, não há ninguém aqui..",
    preco: 99.9,
    pictureURL:
      "/inputs/Muteless_3.png",
    href: "http://127.0.0.1:5500/inputs/png-transparent-computer-icons-book-symbol-book-now-button-angle-rectangle-libra.png",
    categoria: "romance",
  },

];

document.querySelector(".searchButton").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
});

document.querySelector("#terror").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#terror").setAttribute("disabled", true);
  buttonTerror();
});

document.querySelector("#acao").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#acao").setAttribute("disabled", true);
  buttonAcao();
});

document.querySelector("#manga").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#manga").setAttribute("disabled", true);
  buttonManga();
});

document.querySelector("#fantasia").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#fantasia").setAttribute("disabled", true);
  buttonFantasia();
});

document.querySelector("#romance").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#romance").setAttribute("disabled", true);
  buttonRomance();
});

document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  enableButtons();
  document.querySelector("#home").setAttribute("disabled", true);
  buttonHome();
});

const enableButtons = () => {
  document.querySelector("#home").removeAttribute("disabled");
  document.querySelector("#terror").removeAttribute("disabled");
  document.querySelector("#manga").removeAttribute("disabled");
  document.querySelector("#romance").removeAttribute("disabled");
  document.querySelector("#fantasia").removeAttribute("disabled");
  document.querySelector("#acao").removeAttribute("disabled");
};

const buttonTerror = () => {
  var htmlString = "";

  var terrorAba = livros.filter((livro) => livro.categoria == "terror");
  terrorAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div><div id="pdf" hidden>${livro.pdf}</div>`;
  });

  document.querySelector("main").className = "terror";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonAcao = () => {
  var htmlString = "";

  var acaoAba = livros.filter((livro) => livro.categoria == "acao");
  acaoAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "acao";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonManga = () => {
  var htmlString = "";

  var mangaAba = livros.filter((livro) => livro.categoria == "manga");
  mangaAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "manga";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonFantasia = () => {
  var htmlString = "";

  var fantasiaAba = livros.filter((livro) => livro.categoria == "fantasia");
  fantasiaAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "fantasia";

  document.querySelector(".livros").innerHTML = htmlString;
};

const buttonRomance = () => {
  var htmlString = "";

  var romanceAba = livros.filter((livro) => livro.categoria == "romance");
  romanceAba.forEach((livro) => {
    htmlString += `<div class="livro">
    <div id="imagemLivro"> <a href="${livro.href}" target="_blank"> <img src="${livro.pictureURL}"></div></a>
    <div id="bookName"><h2 class="name">${livro.name}</h2></div>
    <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
    <div id="resume"><span class="sumario">${livro.sumario}</span></div>
    <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
    </div>`;
  });

  document.querySelector("main").className = "romance";

  document.querySelector(".livros").innerHTML = htmlString;
};

document.querySelector(".searchTerm").addEventListener("input", (e) => {
  document.querySelector(".searchButton").setAttribute("disabled", true);
  if (e.target.value.length >= 2) {
    document.querySelector(".searchButton").removeAttribute("disabled");
    handleSuggestions(e.target.value);
  } else {
    closeSuggestions();
  }
});

const handleSuggestions = (searchValue) => {
  const filteredbooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  var htmlString = "";
  filteredbooks.forEach((livro) => {
    htmlString += ` <div class='preview'><img src='${livro.pictureURL}' onclick="selectLivro('${livro.name}')" width='100px'>
    <span class='livroSuggestion' onclick="selectLivro('${livro.name}')">${livro.name}</span> </div>`;
  });

  document.querySelector("#sugestoes").innerHTML = htmlString;
  document.querySelector("#sugestoes").style.display = "flex";
};

const selectLivro = (livroName) => {
  document.querySelector(".searchTerm").value = livroName;
  document.querySelector(".searchButton").setAttribute("disabled", true);
  searchBook();
  closeSuggestions();
};

const closeSuggestions = () => {
  document.querySelector("#sugestoes").style.display = "none";
};

const searchBook = () => {
  var htmlString = "";
  const searchValue = document.querySelector(".searchTerm").value;
  const filteredBooks = livros.filter((livro) =>
    livro.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (filteredBooks.length > 0) {
    filteredBooks.forEach((livro) => {
      htmlString += `<div class="livro">
      <div id="imagemLivro"><img src="${livro.pictureURL}"></div>
      <div id="bookName"><h2 class="name">${livro.name}</h2></div>
      <div id="bookPrice"><p class="preco">R$ ${livro.preco}</p></div>
      <div id="resume"><span class="sumario">${livro.sumario}</span></div>
      <div id="shopButton"><button class="shop" onclick="addToCart(${livro.id})">Comprar</button></div>
      </div>`;
    });
  } else {
    htmlString = "<span> Nenhum livro encontrado 😒</span>";
  }

  document.querySelector(".livros").innerHTML = htmlString;
  document.querySelector(".searchTerm").value = "";
  closeSuggestions();
};

const buttonHome = () => {
  var htmlString = "";

  document.querySelector("main").className = "home";

  document.querySelector(".livros").innerHTML = htmlString;
};

function toggleShopCart() {
  if (document.querySelector(".Compras").style.display == "none") {
    document.querySelector(".Compras").style.display = "flex";
  } else {
    document.querySelector(".Compras").style.display = "none";
  }
}

function addToCart(id) {
  if (listaCompra.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = livros.find((livro) => livro.id === id);

    listaCompra.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function updateCart() {
  document.querySelector("#end").setAttribute("disabled", true);
  renderCartItems();
  renderSubTotal();

  localStorage.setItem("CART", JSON.stringify(listaCompra));
}

function renderSubTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  listaCompra.forEach((item) => {
    totalPrice += item.preco * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  if (totalPrice > 0) {
    document.querySelector("#end").removeAttribute("disabled");
  }

  subTotalEl.innerHTML = `<h3>Total: R$ ${totalPrice.toFixed(2)}</h3>`;
}

function renderCartItems() {
  cartItemsEl.innerHTML = "";
  listaCompra.forEach((item) => {
    cartItemsEl.innerHTML += `<div class='renderCart'><img src='${item.pictureURL}' width='20px'>
    <span class='livroNames'>${item.name}</span> 
    <div id="bookPrice"><p class="preco">R$ ${item.preco}</p></div> 
    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
    <div class="numberOfUnits">${item.numberOfUnits}</div>
    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
    <div class="btnRemove" onclick="removeItemFromCart(${item.id})">Remove</div>
    </div>`;
  });
}

function removeItemFromCart(id) {
  listaCompra = listaCompra.filter((item) => item.id !== id);

  updateCart();
}

function changeNumberOfUnits(action, id) {
  listaCompra = listaCompra.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

function endShopping() {
  localStorage.clear();
  alert("Compra finalizada com Sucesso");
  subTotalEl.innerHTML = `<h3>Total: R$ 0.00</h3>`;
  window.location.reload();
}

window.onload = function () {
  updateCart();

  document.querySelector(".searchButton").setAttribute("disabled", true);
};

let clip = document.querySelector(".vid");

clip.addEventListener("mouseover", function (e) {
  clip.play();
});

clip.addEventListener("mouseout", function (e) {
  clip.pause();
});
