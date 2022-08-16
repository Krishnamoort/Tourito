let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

let serachIcons = document.querySelector('#serach-icon');
let searchForm = document.querySelector('.search-form');

serachIcons.onclick = () => {
    serachIcons.classList.toggle('fa-times')
    searchForm.classList.toggle('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    serachIcons.classList.remove('fa-times')
    searchForm.classList.remove('active')

}