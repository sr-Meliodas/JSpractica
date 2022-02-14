let modal = document.querySelector('.modal-background');
let abrir = document.querySelector('#Abrir');
let cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', function(){
    modal.classList.add("show");
});

cerrar.addEventListener('click', function(){
    modal.classList.remove("show");
});