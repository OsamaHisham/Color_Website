const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show Active Menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollpos = window.scrollY;
  // console.log(scrollpos);

  // Adds the 'highlight' class to my menu items
  if(window.innerWidth > 960 && scrollpos < 645) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }
  else if(window.innerWidth > 960 && scrollpos < 1440) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  }
  else if(window.innerWidth > 960 && scrollpos < 2427) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  };

  if((elem && window.innerWidth < 960 && scrollpos < 645) || elem) {
    elem.classList.remove('highlight');
  };

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close mobile Menu when clicking on a menu item.
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);