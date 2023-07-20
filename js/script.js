let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
          let top = sec.scrollBy;
          let offset = sec.offsetTop - 100;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if(top >= offset && top < offset + height) {
               //active navbar
               navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
               });
               //active section for animation on scroll

               sec.classList.add('show-animate');
          }
          else{
               sec.classList.remove('show-animate');
          }
     });

     menuIcon.classList.toggle('bx-x');
     navbar.classList.toggle('active');

}
