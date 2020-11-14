import logo from '../images/home.jpg';
import primary from '../images/imgprimary.jpg';
import imgSec from '../images/imgsec.jpg';


const content = document.querySelector('#content');
const home = document.createElement('div');
home.classList.add('home-container');

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');

const gridDiv1 = document.createElement('div');
gridDiv1.classList.add('grid-1');

const imgLogo = document.createElement('img');
imgLogo.src = logo;

gridDiv1.append(imgLogo);

const gridDiv2 = document.createElement('div');
gridDiv2.classList.add('grid-2');

const gridDiv3 = document.createElement('div');
gridDiv3.classList.add('grid-3');

const imgPrimary = document.createElement('img');
imgPrimary.src = primary;

const imgSecondary = document.createElement('img');
imgSecondary.src = imgSec;

gridDiv2.append(imgPrimary);
gridDiv3.append(imgSecondary);

imgContainer.append(gridDiv1, gridDiv2, gridDiv3);

const textContainer = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = 'Welcome To Lazeez Restaurant!';
heading.classList.add('title');

textContainer.append(heading);

export const homepage = () => {
  home.append(textContainer, imgContainer);
  content.append(home);
};