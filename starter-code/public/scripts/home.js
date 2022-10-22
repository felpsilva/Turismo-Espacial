let menu = document.querySelector('.menu');
let checkbox = document.getElementsByName('cb')


function disparaMenu(){
if(checkbox.checked){
    menu.style.display = 'flex'
    menu.style.flexDirection = 'column'
    console.log('checado')
}else{
    menu.style.display = 'none'   
}
}

