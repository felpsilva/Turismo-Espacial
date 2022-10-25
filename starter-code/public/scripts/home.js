let menu = document.querySelector('.menu');
let checkbox = document.querySelector('input[type="checkbox"]');

function disparaMenu(){
if(checkbox.checked === true){
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';

}else{
    menu.style.display = 'none';
}
}

