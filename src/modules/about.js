const content = document.querySelector('#content');

const container = document.createElement('div');
container.classList.add('about-container');

const imgHeader = document.createElement('div');
imgHeader.classList.add('img-header', 'about-header');

const heading_cont = document.createElement('div');
heading_cont.classList.add('img-title');

const heading = document.createElement('h2');
heading.textContent = 'About';
heading.classList.add('title');

const aboutTxt = document.createElement('p');
aboutTxt.textContent = 'Fox in the Snow Cafe is a bakery, ' +
    'coffee shop serving up rustic-style baked goods and ' +
    'hand-poured drinks out of three quaint shops in ' +
    'the Italian Village, German Village and New Albany ' +
    'neighborhoods of Columbus, Ohio.';

heading_cont.append(heading, aboutTxt);

imgHeader.append(heading_cont);

container.append(imgHeader);

export const aboutPage = () => {
    content.append(container);
}