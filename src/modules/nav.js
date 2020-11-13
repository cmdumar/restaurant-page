const content = document.querySelector('#content');
const nav_container = document.createElement('nav');

const homeLink = document.createElement('a');
homeLink.setAttribute('href', "#");
homeLink.textContent = 'Home';

const menuLink = document.createElement('a');
menuLink.setAttribute('href', "#");
menuLink.textContent = 'Menu';

const aboutLink = document.createElement('a');
aboutLink.setAttribute('href', "#");
aboutLink.textContent = 'About';

export const navigation = () => {
    nav_container.append(homeLink, menuLink, aboutLink);
    content.appendChild(nav_container);
}