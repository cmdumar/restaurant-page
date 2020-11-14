import { pageLoad } from './modules/pageLoad';
import './style.scss';
import { navigation } from './modules/nav';
import { homepage } from './modules/home';
import { menuPage } from './modules/menu';
import { aboutPage } from './modules/about';
import { clearPage } from './modules/helpers';

pageLoad();
homepage();

const homeBtn = document.querySelector('#home-page');
const menuBtn = document.querySelector('#menu-page');
const aboutBtn = document.querySelector('#about-page');

homeBtn.addEventListener('click', () => {
  clearPage();
  navigation();
  homepage();
});

menuBtn.addEventListener('click', () => {
  clearPage();
  navigation();
  menuPage();
});

aboutBtn.addEventListener('click', () => {
  clearPage();
  navigation();
  aboutPage();
});