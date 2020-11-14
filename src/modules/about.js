const content = document.querySelector('#content');

const container = document.createElement('div');
container.classList.add('about-container');

const imgHeader = document.createElement('div');
imgHeader.classList.add('img-header', 'about-header');

const headingCont = document.createElement('div');
headingCont.classList.add('img-title');

const heading = document.createElement('h2');
heading.textContent = 'About';
heading.classList.add('title');

const aboutTxt = document.createElement('p');
aboutTxt.textContent = 'Fox in the Snow Cafe is a bakery, '
    + 'coffee shop serving up rustic-style baked goods and '
    + 'hand-poured drinks out of three quaint shops in '
    + 'the Italian Village, German Village and New Albany '
    + 'neighborhoods of Columbus, Ohio.';

headingCont.append(heading, aboutTxt);

imgHeader.append(headingCont);

const addressContainer = document.createElement('div');
addressContainer.classList.add('address-cont');

const hours = document.createElement('h2');
hours.textContent = 'Hours & Locations';

const address = document.createElement('p');
address.textContent = `1031 N. Fourth Street,
                        Columbus, OH 43201`;

const time = document.createElement('span');
time.textContent = 'Monday - Friday 8am - 3pm';

addressContainer.append(hours, address, time);

container.append(imgHeader, addressContainer);

export const aboutPage = () => {
  content.append(container);
};