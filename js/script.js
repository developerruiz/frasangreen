let modalAlert = document.getElementById('modal_alerta')
let boton =  document.getElementById('cerrar_modal')

boton.addEventListener('click', function(){

    modalAlert.classList = ('d-none')
    modalAlert.style.transition = "all 2s";

})



addEventListener('DOMContentLoaded', () => {

    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 1000

    const animarContadores = () => {
        for ( const contador of contadores) {
            const actualizar_contador = () =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 10)
                }else{
                    contador.innerText = cantidad_maxima
                }
            }

            actualizar_contador()
        }

    }
    
 
//     //IntersectionObserver

    const mostrarContadores =  elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add ('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores,500)
            }
        });
    }
    const observer = new IntersectionObserver(mostrarContadores,{
        threshold: 0.75 //0 - 1
    }) 

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    }) 


})



var propMenu ={

  burger_menu: document.getElementById('burger_menu'),
  slideMenu: document.getElementById('slideMenu'),
  menuActivo: false,
  elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')

}
// objeto con metodos
var metMenu = {


  inicio: function(){

      propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);

      for (let i = 0; i < propMenu.elem_menu.length; i++) {
          propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
          
      }
  },

  toggleMenu: function(){

      if(propMenu.menuActivo == false){

          propMenu.menuActivo = true;
          propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
      }else{
          propMenu.menuActivo = false;
          propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');
      }

  },

  ocultarMenu: function() { 

      propMenu.menuActivo = false;
      propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active','');
   }


}

metMenu.inicio();




let globoChat = document.getElementById('chat')
let globoStatus = 0
let chatBox = document.getElementById('chat_box')
let botonMin = document.querySelector('.fa-window-minimize')
let botonMax = document.querySelector('.fa-window-restore')
let contenedorPreguntas = document.getElementById('preguntas')
let pregunta = document.querySelectorAll('.pregunta')
let respuesta = document.querySelectorAll('.respuesta')
let botonCerrar= document.querySelector('.fa-times')
let contenido = null
let botonRegresar =  document.querySelectorAll('.fa-arrow-left' )

globoChat.addEventListener('click', function () {

    
    mostrarChat: {
        chatBox.className = chatBox.className + (' active')
        chatBox.style.opacity = 0

        setTimeout(function () {
            
            chatBox.style.opacity = 1
        },100)
    }
        globoStatus = 1
        globoChat.classList = ('d-none')
        globoChat.style.transition= '.3s ease-in'

    for (let i = 0; i < pregunta.length; i++) {
        pregunta[i].addEventListener('click', evento);
        
    }
  
    for (let i = 0; i < botonRegresar.length; i++) {
        botonRegresar[i].addEventListener('click', regresar)
        
    }
})

evento = function (e) {
    e.preventDefault();
    for (let i = 0; i < respuesta.length; i++) {
        respuesta[i].className = '';

    }

    this.parentElement.classList = ('preguntas text-center mt-5')
    contenido = this.getAttribute('href');
    document.querySelector(contenido).className = 'd-block'
    contenedorPreguntas.classList = ('d-none')
    document.querySelector(contenido).style.opacity = '0';
    document.querySelector(contenido).style.transition = '.2s ease-in';
    

    setTimeout(function(){
        document.querySelector(contenido).style.opacity = '1';
        document.querySelector(contenido).style.transition = '.2s ease-in';

    }, 100)

}
regresar = function() {
    contenedorPreguntas.classList = ('preguntas text-center')
    document.querySelector(contenido).className = 'd-none'
    contenedorPreguntas.style.opacity = '0';
    contenedorPreguntas.style.transition = '.2s ease-in';

    setTimeout(function(){
        contenedorPreguntas.style.opacity = '1';
        contenedorPreguntas.style.transition = '.5s ease-in';

    }, 100)
}

botonMin.addEventListener('click', () => {
    chatBox.classList = ('chat-box min')
    chatBox.style.transition = '.3s ease-in';
})

botonMax.addEventListener('click', () =>{
    chatBox.classList = ('chat-box active')
})

botonCerrar.addEventListener('click', () =>{
    chatBox.classList = 'chat-box'
    chatBox.style.transition= '.3s ease-in'
    
    globoChat.classList = ('chat')
    globoChat.style.opacity = 0
    globoStatus = 0 

    setTimeout(function(){
        globoChat.style.opacity = 1
    })

})
