
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) { // Vérification de l'existence des éléments
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Bascule l'icône du menu (animation)
        navbar.classList.toggle('active'); // Affiche ou masque le menu
    };
}
