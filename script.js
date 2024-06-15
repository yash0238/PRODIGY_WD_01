/* script.js */
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
  nav.classList.toggle('open'); /* Toggle open/closed state using class manipulation */
});
