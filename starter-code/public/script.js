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

// const data = require('data.json')
// console.log(data)

let imgTec = document.querySelector('#imgTec');
let func = document.querySelector('#func');
let nome = document.querySelector('#nome');
let resumo = document.querySelector('#resumo');


function selectTec(){
  comandante.addEventListener('click', () => {
    imgTec.src = equipe1.images.png;
    let role = equipe1.role;
     let name = equipe1.name;
     let bio = equipe1.bio;

     func.innerHTML = role;
     nome.innerHTML = name;
     resumo.innerHTML = bio;

  });
  especialista.addEventListener('click', () => {
    imgTec.src = equipe2.images.png;
    let role = equipe2.role;
    let name = equipe2.name;
    let bio = equipe2.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
  piloto.addEventListener('click', () => {
    imgTec.src = equipe3.images.png;
    let role = equipe3.role;
    let name = equipe3.name;
    let bio = equipe3.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
  engenheira.addEventListener('click', () => {
    imgTec.src = equipe4.images.png;
    let role = equipe4.role;
    let name = equipe4.name;
    let bio = equipe4.bio;

    func.innerHTML = role;
    nome.innerHTML = name;
    resumo.innerHTML = bio;
  });
}



let equipe1 = {
    "name": "Douglas Hurley",
    "images": {
      "png": "./assets/crew/image-douglas-hurley.png",
      "webp": "./assets/crew/image-douglas-hurley.webp"
    },
    "role": "COMMANDER",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  }

  let equipe2 = {
    "name": "Mark Shuttleworth",
    "images": {
      "png": "./assets/crew/image-mark-shuttleworth.png",
      "webp": "./assets/crew/image-mark-shuttleworth.webp"
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  }

  let equipe3 = {
    "name": "Victor Glover",
    "images": {
      "png": "./assets/crew/image-victor-glover.png",
      "webp": "./assets/crew/image-victor-glover.webp"
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  }

  let equipe4 = {
    "name": "Anousheh Ansari",
    "images": {
      "png": "./assets/crew/image-anousheh-ansari.png",
      "webp": "./assets/crew/image-anousheh-ansari.webp"
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
