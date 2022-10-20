  let destino1 = {
    "name": "LUA",
    "images": {
      "png": "../assets/destination/image-moon.png",
      "webp": "../assets/destination/image-moon.webp"
    },
    "description": "Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso Luna 2 e Apollo 11.",
    "distance": "384,400 KM",
    "travel": "3 DIAS"
  }

    let destino2 = {
    "name": "MARTE",
    "images": {
      "png": "../assets/destination/image-mars.png",
      "webp": "../assets/destination/image-mars.webp"
    },
    "description": "Não se esqueça de levar suas botas de caminhada. Você precisará deles para enfrentar o Monte Olimpo, a montanha planetária mais alta do nosso sistema solar. São duas vezes e meia do tamanho do Everest!",
    "distance": "225 MIL. KM",
    "travel": "9 MÊSES"
  }



  let destino3 = {
    "name": "EUROPA",
    "images": {
      "png": "../assets/destination/image-europa.png",
      "webp": "../assets/destination/image-europa.webp"
    },
    "description": "A menor das quatro luas galileanas que orbitam Júpiter, Europa é uma o sonho do amante de inverno. Com uma superfície gelada, é perfeito para um pouco de patinação no gelo, curling, hóquei ou simples relaxamento em seu confortável cabana invernal.",
    "distance": "628 MIL. KM",
    "travel": "3 ANOS"
  }

  let destino4 = {
    "name": "TITAN",
    "images": {
      "png": "../assets/destination/image-titan.png",
      "webp": "../assets/destination/image-titan.webp"
    },
    "description": "A única lua conhecida por ter uma atmosfera densa além da Terra, Titã é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como um bônus, você obtém vistas impressionantes dos anéis de Saturno.",
    "distance": "1.6 BI. KM",
    "travel": "7 ANOS"
  }
  


let lua = document.querySelector('#lua');
let marte = document.querySelector('#marte');
let europa = document.querySelector('#europa'); 
let titan = document.querySelector('#titan');

selectTec()
selectTecStyle()

let imgDestino = document.querySelector('#destinoImg')
let destinoNome = document.querySelector('#destinoNome')
let descricao = document.querySelector('#descricao');
let distancia = document.querySelector('#distancia');
let tempoViagem = document.querySelector('#tempoViagem')



function selectTecStyle(){
  lua.addEventListener('click', ()=>{
    lua.classList.add('borda');
    marte.classList.remove('borda');
    europa.classList.remove('borda');
    titan.classList.remove('borda');


  }
  );
  marte.addEventListener('click', ()=>{
    lua.classList.remove('borda');
    marte.classList.add('borda');
    europa.classList.remove('borda');
    titan.classList.remove('borda');
  }
  );
  europa.addEventListener('click', ()=>{
    lua.classList.remove('borda');
    marte.classList.remove('borda');
    europa.classList.add('borda');
    titan.classList.remove('borda');
  }
  );
  titan.addEventListener('click', ()=>{
    lua.classList.remove('borda');
    marte.classList.remove('borda');
    europa.classList.remove('borda');
    titan.classList.add('borda');
  }
  );
}


function selectTec(){
    lua.addEventListener('click', () => {
        imgDestino.src = destino1.images.png;
    
        let name = destino1.name;
        let description = destino1.description;
        let distance = destino1.distance;
        let travel = destino1.travel;
        
        destinoNome.innerHTML = name; 
        descricao.innerHTML = description;
        distancia.innerHTML = distance;
        tempoViagem.innerHTML = travel
  
    });
    marte.addEventListener('click', () => {
        imgDestino.src = destino2.images.png;
    
        let name = destino2.name;
        let description = destino2.description;
        let distance = destino2.distance;
        let travel = destino2.travel;
        
        destinoNome.innerHTML = name; 
        descricao.innerHTML = description;
        distancia.innerHTML = distance;
        tempoViagem.innerHTML = travel
  
    });
    europa.addEventListener('click', () => {
        imgDestino.src = destino3.images.png;
    
        let name = destino3.name;
        let description = destino3.description;
        let distance = destino3.distance;
        let travel = destino3.travel;
        
        destinoNome.innerHTML = name; 
        descricao.innerHTML = description;
        distancia.innerHTML = distance;
        tempoViagem.innerHTML = travel
  
    });
    titan.addEventListener('click', () => {
        imgDestino.src = destino4.images.png;
    
        let name = destino4.name;
        let description = destino4.description;
        let distance = destino4.distance;
        let travel = destino4.travel;
        
        destinoNome.innerHTML = name; 
        descricao.innerHTML = description;
        distancia.innerHTML = distance;
        tempoViagem.innerHTML = travel
  
    });
    
  }

  function upData(){
    imgDestino.src = destino1.images.png;
    
    let name = destino1.name;
    let description = destino1.description;
    let distance = destino1.distance;
    let travel = destino1.travel;
    
    destinoNome.innerHTML = name; 
    descricao.innerHTML = description;
    distancia.innerHTML = distance;
    tempoViagem.innerHTML = travel
    
    lua.classList.add('borda');
  };

