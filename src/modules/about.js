const content = document.querySelector('#content');

const container = document.createElement('div');
container.classList.add('about-container');;;;

const heading = document.createElement('h2');
heading.textContent = 'About page';

container.append(heading);

export const aboutPage = () => {
    content.append(container);
}