let equipe1 = {
    "name": "DOUGLAS HURLEY",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "COMANDANTE",
    "bio": "Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2."
  }

  let equipe2 = {
    "name": "MARK SHUTTLEWORTH",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "ESPECIALISTA EM MISSÃO",
    "bio": "Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar para o espaço como turista espacial."
  }

  let equipe3 = {
    "name": "VICTOR GLOVER",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "PILOTO",
    "bio": "Piloto no primeiro voo operacional da SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é um comandante da Marinha dos EUA, onde pilota um F/A-18. Ele foi membro da tripulação da Expedição 64 e serviu como engenheiro de voo de sistemas de estação."
  }

  let equipe4 = {
    "name": "ANOUSHEH ANSARI",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "ENGENHEIRA DE VOO",
    "bio": "Anousheh Ansari é uma engenheira iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço."
  }
  
let comandante = document.querySelector('#comandante');
let especialista = document.querySelector('#especialista');
let piloto = document.querySelector('#piloto');
let engenheira = document.querySelector('#engenheira');
comandante.style.background = '#fff'


selectAparence();
selectTec();

function selectAparence(){
  comandante.addEventListener('click', () =>{
    comandante.style.background = '#fff'
    especialista.style.background = 'rgba(255, 255, 255, 0.144)'
    piloto.style.background = 'rgba(255, 255, 255, 0.144)'
    engenheira.style.background = 'rgba(255, 255, 255, 0.144)'

  })
  especialista.addEventListener('click', () =>{
    especialista.style.background = '#fff'
    comandante.style.background = 'rgba(255, 255, 255, 0.144)'
    piloto.style.background = 'rgba(255, 255, 255, 0.144)'
    engenheira.style.background = 'rgba(255, 255, 255, 0.144)'
  });
  piloto.addEventListener('click', () =>{
    piloto.style.background = '#fff'
    especialista.style.background = 'rgba(255, 255, 255, 0.144)'
    comandante.style.background = 'rgba(255, 255, 255, 0.144)'
    engenheira.style.background = 'rgba(255, 255, 255, 0.144)'
  })
  engenheira.addEventListener('click', () =>{
    engenheira.style.background = '#fff'
    especialista.style.background = 'rgba(255, 255, 255, 0.144)'
    piloto.style.background = 'rgba(255, 255, 255, 0.144)'
    comandante.style.background = 'rgba(255, 255, 255, 0.144)'
  })

}; 


let imgTec = document.querySelector('#imgTec');
let func = document.querySelector('#func');
let nome = document.querySelector('#nome');
let resumo = document.querySelector('#resumo');


function selectTec(){
  comandante.addEventListener('click', () => {
    imgTec.src = equipe1.images.png;
    imgTec.style.width = '475px';
    imgTec.style.height = '650px';
    let role = equipe1.role;
    let name = equipe1.name;
    let bio = equipe1.bio;

     func.innerHTML = role;
     nome.innerHTML = name;
     resumo.innerHTML = bio;

  });
  especialista.addEventListener('click', () => {
    imgTec.src = equipe2.images.png;
    imgTec.style.width = '440px';
    imgTec.style.height = '616px';
    let role = equipe2.role;
    let name = equipe2.name;
    let bio = equipe2.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
  piloto.addEventListener('click', () => {
    imgTec.src = equipe3.images.png;
    imgTec.style.width = '495px';
    imgTec.style.height = '615px';
    let role = equipe3.role;
    let name = equipe3.name;
    let bio = equipe3.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
  engenheira.addEventListener('click', () => {
    imgTec.src = equipe4.images.png;
    imgTec.style.width = '500px'
    let role = equipe4.role;
    let name = equipe4.name;
    let bio = equipe4.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
}






  function upData(){
    imgTec.src = equipe1.images.png;
    let role = equipe1.role;
     let name = equipe1.name;
     let bio = equipe1.bio;

     func.innerHTML = role;
     nome.innerHTML = name;
     resumo.innerHTML = bio;

  }