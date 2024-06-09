function abrirmodal(){

const modal=document.getElementById('pagina-contato');
modal.classList.add('abrir');

modal.addEventListener('click',(e)=>{
    if(e.target.id=='pagina-contato'){
        modal.classList.remove('abrir');
    }
})

}
