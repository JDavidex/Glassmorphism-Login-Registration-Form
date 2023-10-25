let signup = document.querySelector('#signup');
let signin = document.querySelector('#signin');
let body = document.querySelector('body');

signup.onclick = function () {
    body.classList.add('signup');
}
signin.onclick = function () {
    body.classList.remove('signup');
}

let sec = document.querySelector('.sec');
let dark = document.querySelector('.dark');

dark.onclick = function(){
    sec.classList.toggle('active')
}