
        const navbar = document.querySelector('#main');
        const botOfNav = navbar.offsetTop;
        const dropdownMenu = document.querySelector('.mobileNav');
        const dropdown = document.querySelector('.dropdownBackground');
        const menuDropdown = document.querySelector('.menuDropdown');
        const nav = document.querySelector('.navBar');
        const home = document.querySelector('.home');
        const aboutMe = document.querySelector('.aboutMe');
        const skills = document.querySelector('.skills');
        const contact = document.querySelector('.contact');
        const image = document.querySelector('.hidden');
        const toggle = document.querySelector('.toggle');
        const frontpageIcon = document.querySelector('.front');
        const pageMask = document.getElementById('page-mask');
        const showcaseImg = document.querySelector('.showcaseImage');
        const toggleImage = document.getElementById('toggleImage');
        const line = frontpageIcon.offsetTop;

            if (window.scrollY >= botOfNav) {
                document.body.classList.add('fixedNav');
            }


        function dropDown() {
            dropdownMenu.className === 'mobileNav' ? dropdownMenu.className += ' show' : dropdownMenu.className = 'mobileNav';
        }

        function showProject(){
            image.classList.remove('hidden');
            pageMask.style.display = 'block ';
       }


       function closeProject(){
            pageMask.style.display = 'none';
            showcaseImg.className = 'showcaseImage hidden';
       }


        function fixNav() {
            if (window.scrollY >= botOfNav) {
                document.body.classList.remove('topFix');
                document.body.classList.add('fixedNav');
            }
            else {
                document.body.classList.remove('fixedNav');
                document.body.classList.add('topFix');
                dropdownMenu.style.display = 'none;';
            }
        }

        document.querySelector('.arrowIcon')
            .addEventListener('click', () => {
                document.querySelector('.projectsTitleRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.home')
            .addEventListener('click', () => {
                document.querySelector('#map').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.homeM')
            .addEventListener('click', () => {
                document.querySelector('#map').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.contact')
            .addEventListener('click', () => {
                document.querySelector('.contactTitleRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.contactM')
            .addEventListener('click', () => {
                document.querySelector('.contactTitleRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        document.querySelector('.aboutMe')
            .addEventListener('click', () => {
                document.querySelector('.aboutMeTitleRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.aboutMeM')
            .addEventListener('click', () => {
                document.querySelector('.aboutMeTitleRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.skillsM')
            .addEventListener('click', () => {
                document.querySelector('.skillsSectionRow').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });

        document.querySelector('.skills')
            .addEventListener('click', () => {
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