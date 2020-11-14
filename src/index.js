import { pageLoad } from "./modules/pageLoad";
import './style.scss';
import { navigation } from './modules/nav';
import { homepage } from "./modules/home";
import { menuPage } from "./modules/menu";
import { aboutPage } from "./modules/about";
import {clearPage} from "./modules/helpers";

pageLoad();
homepage();

const home_btn = document.querySelector('#home-page');
const menu_btn = document.querySelector('#menu-page');
const about_btn = document.querySelector('#about-page');

home_btn.addEventListener('click', () => {
    clearPage();
    navigation();
    homepage();
});

menu_btn.addEventListener('click', () => {
    clearPage();
    navigation();
    menuPage();
});

about_btn.addEventListener('click', () => {
    clearPage();
    navigation();
    aboutPage();
});