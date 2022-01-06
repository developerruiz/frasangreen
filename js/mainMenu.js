// objeto con propiedads


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