window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    const aboutSection = document.getElementById('about');
    const aboutSectionTop = aboutSection.offsetTop;

    if (window.scrollY >= aboutSectionTop) {
        navbar.style.backgroundColor = 'rgb(27, 27, 32)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
let Signup = document.getElementById("Sign-up")
let Signin = document.getElementById("Sign-in")
let tiger = document.getElementById('tiger');
let cross = document.getElementById('cross');
let body = document.querySelector('body')
let secnav = document.getElementById('secnav')

Signin.addEventListener('click',function (){
    alert('sorry we are working on this feature')
})
Signup.addEventListener('click',function (){
    alert('sorry we are working on this feature')
})
// tiger.addEventListener('click',function(){
//     secnav.style.display ='inline-block'
// })
cross.addEventListener('click', function(){
    secnav.style.display='none'
});


tiger.addEventListener('click',function(){
    secnav.style.display='flex'
})
let sal = new Date().getFullYear()

let year = document.getElementById('year');
year.innerHTML=sal