let tecnologia1 = {
    "name": "VEÍCULO DE LANÇAMENTO",
    "images": {
      "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
      "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    "description": "Um veículo de lançamento ou foguete transportador é um veículo movido a foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita da Terra ou além. Nosso foguete transportador WEB-X é o mais potente em operação. Com 150 metros de altura, é uma visão inspiradora na plataforma de lançamento!"
  };

let tecnologia2 = {
    "name": "ESPAÇOPORTO",
    "images": {
      "portrait": "./assets/technology/image-spaceport-portrait.jpg",
      "landscape": "./assets/technology/image-spaceport-landscape.jpg"
    },
    "description": "Um espaçoporto ou cosmódromo é um local para lançamento (ou recebimento) de naves espaciais, por analogia ao porto marítimo para navios ou aeroporto para aeronaves. Com sede no famoso Cabo Canaveral, nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para o lançamento."
  };
  
let tecnologia3 = {
    "name": "CÁPSULA ESPACIAL",
    "images": {
      "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
      "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
    },
    "description": "Uma cápsula espacial é uma espaçonave frequentemente tripulada que usa uma cápsula de reentrada de corpo rombudo para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você passará seu tempo durante o voo. Inclui uma academia espacial, cinema e muitas outras atividades para mantê-lo entretido."
  };

  let bot1 = document.querySelector('#b1');
  let bot2 = document.querySelector('#b2');
  let bot3 = document.querySelector('#b3');

  let tecnologiaNome = document.querySelector('#tecnologiaNome');
  let tecnologiaDescricao = document.querySelector('#descricao');
  let tecnologiaImg = document.querySelector('#tecnoImg')

  let controler = 0

  function sizeOfThings(){
    var telaL = window.innerWidth;
   
    selectTecnologyStyle()  
  
  function selectTecnologyStyle(){
        bot1.addEventListener('click', () => {
            bot2.style.background = "rgba(0,0,0, 00%)"
            bot2.style.color = "#fff"
            bot1.style.background = "#fff"
            bot1.style.color = "#000"
            bot3.style.background = "rgba(0,0,0, 00%)"
            bot3.style.color = "#fff"
    })
        bot2.addEventListener('click', () => {
            bot2.style.background = "#fff"
            bot2.style.color = "#000"
            bot1.style.background = "rgba(0,0,0, 00%)"
            bot1.style.color = "#fff"
            bot3.style.background = "rgba(0,0,0, 00%)"
            bot3.style.color = "#fff"
    })
        bot3.addEventListener('click', () => {
            bot2.style.background = "rgba(0,0,0, 00%)"
            bot2.style.color = "#fff"
            bot1.style.background = "rgba(0,0,0, 00%)"
            bot1.style.color = "#fff"
            bot3.style.background = "#fff"
            bot3.style.color = "#000"
    })
  }


  
  // let telaL = window.addEventListener('onresize', ()=>{
  //   return window.innerWidth;
  // })

  

  selectTecnology()

  function selectTecnology(){
    

    
    bot1.addEventListener('click', ()=>{
        let nome = tecnologia1.name;
        let descricao = tecnologia1.description;
        
        if(telaL < 990){
          let img = tecnologia1.images.portrait;
          tecnologiaImg.src = img
        }else{
          let img = tecnologia1.images.landscape;
          tecnologiaImg.src = img
        }
        tecnologiaNome.innerHTML = nome;
        tecnologiaDescricao.innerHTML = descricao;

        controler = 1

 

        
    });
    bot2.addEventListener('click', ()=>{
        let nome = tecnologia2.name;
        let descricao = tecnologia2.description;
        
        if(telaL< 990){
          let img = tecnologia2.images.portrait;
          tecnologiaImg.src = img
        }else{
          let img = tecnologia2.images.landscape;
          tecnologiaImg.src = img
        }
        tecnologiaNome.innerHTML = nome;
        tecnologiaDescricao.innerHTML = descricao;

        controler = 2
    });

    bot3.addEventListener('click', ()=>{
        let nome = tecnologia3.name;
        let descricao = tecnologia3.description;

        if(telaL < 990){
          let img = tecnologia3.images.portrait;
          tecnologiaImg.src = img
        }else{
          let img = tecnologia3.images.landscape;
          tecnologiaImg.src = img
        }
        tecnologiaNome.innerHTML = nome;
        tecnologiaDescricao.innerHTML = descricao;

        controler = 3
    });

    function resposividade(){
      if(controler == 0){
        if(telaL < 990){
          tecnologiaImg.src = tecnologia1.images.portrait;
        }else{
          tecnologiaImg.src = tecnologia1.images.landscape;
        }
      }
      
      else if(controler == 1){
        if(telaL < 990){
          tecnologiaImg.src = tecnologia1.images.portrait;
        }else{
          tecnologiaImg.src = tecnologia1.images.landscape;
        }
      }
      
      else if(controler == 2){
        if(telaL < 990){
          tecnologiaImg.src = tecnologia2.images.portrait;
        }else{
          tecnologiaImg.src = tecnologia2.images.landscape;
        }
      }
      
      else if(controler == 3){
        if(telaL < 990){
          tecnologiaImg.src = tecnologia3.images.portrait;
        }else{
          tecnologiaImg.src = tecnologia3.images.landscape;
        }
      }
    }
    
    resposividade()

  }

}
sizeOfThings();

window.addEventListener('resize',function(){
  sizeOfThings();

})


  

  
  telaLarg = window.innerWidth
  function upData(){
    let nome = tecnologia1.name;
    let descricao = tecnologia1.description;

    if(telaLarg < 990){
      let img = tecnologia1.images.portrait;
      tecnologiaImg.src = img
    }else{
      let img = tecnologia1.images.landscape;
      tecnologiaImg.src = img
    }
    tecnologiaNome.innerHTML = nome;
    tecnologiaDescricao.innerHTML = descricao;
  }

