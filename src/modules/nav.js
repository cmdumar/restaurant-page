const content = document.querySelector('#content');
const nav_container = document.createElement('nav');

const homeLink = document.createElement('a');
homeLink.setAttribute('href', "#");
homeLink.id = 'home-page';
homeLink.textContent = 'Home';

const menuLink = document.createElement('a');
menuLink.setAttribute('href', "#");
menuLink.id = 'menu-page';
menuLink.textContent = 'Menu';

const aboutLink = document.createElement('a');
aboutLink.setAttribute('href', "#");
aboutLink.id = 'about-page';
aboutLink.textContent = 'About';

export const navigation = () => {
    nav_container.append(homeLink, menuLink, aboutLink);
    content.appendChild(nav_container);
}