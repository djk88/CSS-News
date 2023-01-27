// JavaScript Document

//const body = document.body;
const btnMenu = document.getElementById('btn-menu');
//const bar = document.getElementById('bar');
const nav = document.getElementById('main-navigation');

btnMenu.addEventListener('click', openMenu);

btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

function openMenu() {
  nav.classList.toggle('show');
}