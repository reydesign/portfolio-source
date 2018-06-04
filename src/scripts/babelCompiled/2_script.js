'use strict';

var navbar = document.querySelector('#main');
var botOfNav = navbar.offsetTop;
var dropdownMenu = document.querySelector('.mobileNav');
var dropdown = document.querySelector('.dropdownBackground');
var menuDropdown = document.querySelector('.menuDropdown');
var nav = document.querySelector('.navBar');
var home = document.querySelector('.home');
var aboutMe = document.querySelector('.aboutMe');
var skills = document.querySelector('.skills');
var contact = document.querySelector('.contact');
var image = document.querySelector('.hidden');
var toggle = document.querySelector('.toggle');
var frontpageIcon = document.querySelector('.front');
var pageMask = document.getElementById('page-mask');
var showcaseImg = document.querySelector('.showcaseImage');
var toggleImage = document.getElementById('toggleImage');
var line = frontpageIcon.offsetTop;

if (window.scrollY >= botOfNav) {
    document.body.classList.add('fixedNav');
}

function dropDown() {
    dropdownMenu.className === 'mobileNav' ? dropdownMenu.className += ' show' : dropdownMenu.className = 'mobileNav';
}

function showProject() {
    image.classList.remove('hidden');
    pageMask.style.display = 'block ';
}

function closeProject() {
    pageMask.style.display = 'none';
    showcaseImg.className = 'showcaseImage hidden';
}

function fixNav() {
    if (window.scrollY >= botOfNav) {
        document.body.classList.remove('topFix');
        document.body.classList.add('fixedNav');
    } else {
        document.body.classList.remove('fixedNav');
        document.body.classList.add('topFix');
        dropdownMenu.style.display = 'none;';
    }
}

document.querySelector('.arrowIcon').addEventListener('click', function () {
    document.querySelector('.projectsTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.home').addEventListener('click', function () {
    document.querySelector('#map').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.homeM').addEventListener('click', function () {
    document.querySelector('#map').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.contact').addEventListener('click', function () {
    document.querySelector('.contactTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.contactM').addEventListener('click', function () {
    document.querySelector('.contactTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
document.querySelector('.aboutMe').addEventListener('click', function () {
    document.querySelector('.aboutMeTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.aboutMeM').addEventListener('click', function () {
    document.querySelector('.aboutMeTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.skillsM').addEventListener('click', function () {
    document.querySelector('.skillsSectionRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.skills').addEventListener('click', function () {
    document.querySelector('.skillsTitleRow').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

window.sr = ScrollReveal();
sr.reveal('.proIcons', {
    origin: 'top',
    distance: '30%',
    duration: 1500
});
sr.reveal('.aboutMeSectionRow', {
    origin: 'left',
    distance: '30%',
    duration: 1000
});
sr.reveal('.techs', {
    origin: 'bottom',
    distance: '30%',
    duration: 1000,
    delay: 500
});
sr.reveal('.skillBarsHTML', {
    origin: 'bottom',
    distance: '40%',
    duration: 1000
});
sr.reveal('.skillBarsCSS', {
    origin: 'top',
    distance: '40%',
    duration: 1000
});
sr.reveal('.skillBarsJS', {
    origin: 'bottom',
    distance: '40%',
    duration: 1000
});

window.addEventListener('scroll', fixNav);
menuDropdown.addEventListener('click', dropDown);
toggle.addEventListener('click', showProject);
toggleImage.addEventListener('click', closeProject);