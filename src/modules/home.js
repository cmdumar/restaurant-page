import imgLogo from '../images/home.jpg'
import imgPrimary from '../images/imgprimary.jpg'
import imgSec from '../images/imgsec.jpg'


const content = document.querySelector('#content');
const home = document.createElement('div');
home.classList.add('home-container');

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');

const grid_div_1 = document.createElement('div');
grid_div_1.classList.add('grid-1');

const img_logo = document.createElement('img');
img_logo.src = imgLogo;

grid_div_1.append(img_logo);

const grid_div_2 = document.createElement('div');
grid_div_2.classList.add('grid-2');

const img_primary = document.createElement('img');
img_primary.src = imgPrimary;

const img_secondary = document.createElement('img');
img_secondary.src = imgSec;

grid_div_2.append(img_primary, img_secondary);

imgContainer.append(grid_div_1, grid_div_2);

const textContainer = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = 'Welcome To Lazeez Restaurant!';
heading.classList.add('title');

textContainer.append(heading);

export const homepage = () => {
    home.append(textContainer, imgContainer);
    content.append(home);
}