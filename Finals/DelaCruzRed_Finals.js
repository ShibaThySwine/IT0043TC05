let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.n-list a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 175;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.n-list a[href*=' + id + ']').classList.add('active');

            });
        };

    });
};






const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.n-list');
    const navLinks= document.querySelectorAll('.n-list li');

    menu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=>{
            console.log(index);
            if(link.style.animation){
                link.style.animation= '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        menu.classList.toggle('toggle')
    });


};



navSlide();


