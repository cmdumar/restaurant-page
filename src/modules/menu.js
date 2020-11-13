const content = document.querySelector('#content');

const container = document.createElement('div');

container.classList.add('menu-container');

const heading = document.createElement('h2');
heading.textContent = 'Menu Page';

container.append(heading);

export const menuPage = () => {
    content.append(container);
}
