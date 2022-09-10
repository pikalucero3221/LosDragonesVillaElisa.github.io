const menu = document.querySelector(".menu");
const abrirMenuBtn = document.querySelector(".abrir-menu");
const cerrarMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu() {
    menu.classList.toggle("menu_abierto");
}

abrirMenuBtn.addEventListener("click", toggleMenu);
cerrarMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_abierto");
    })
})