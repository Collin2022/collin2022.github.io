document.getElementById('menuIcon').addEventListener('click', function () {
    var navbar = document.getElementById('nav');
    navbar.classList.toggle('open');
});

function loginJump() {
    window.location.host = "./html/login.html"
}