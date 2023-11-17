const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

alert('welcome')
const d = new Date();
document.getElementById("Matcha").innerHTML
= d.toDateString();

$(document).ready(function(){
    let h1 = $('h1')
    h1.html("ENJOY WITH MATCHA")
    h1.before('<h3>Welcome</h3>')
    h1.after('<h2>The Best Matcha? Disini Tempatnya!!')
    })

document.querySelector('h1').style.color = '#a3e3ae'

