const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Abrir/Fechar Menu da barra de navegação no Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Fechar o menu da barra de navegação ao clicar nos links do menu
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Alterar plano de fundo do header ao rolar
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Menu da barra de navegação corrigido no redimensionamento da janela
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});
