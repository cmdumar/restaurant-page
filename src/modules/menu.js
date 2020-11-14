const content = document.querySelector('#content');

const container = document.createElement('div');

container.classList.add('menu-container');

const imgHeader = document.createElement('div');
imgHeader.classList.add('img-header');

const headingCont = document.createElement('div');
headingCont.classList.add('img-title');

const heading = document.createElement('h2');
heading.textContent = 'Menu';
heading.classList.add('title');

headingCont.append(heading);

imgHeader.append(headingCont);

const menuSection = document.createElement('section');
menuSection.classList.add('menu-section');

const menuList = document.createElement('ul');

const menuArr = ['ESPRESSO', 'LATTE', 'HOT CHOCOLATE', 'ICED TEA', 'PECAN STICKY BUNS'];
const priceArr = [2.75, 3.75, 3, 4.50, 2.75];

menuArr.forEach((item, index) => {
  const li = document.createElement('li');
  const name = document.createElement('p');
  const price = document.createElement('span');

  name.textContent = item;
  price.textContent = priceArr[index];

  li.append(name, price);
  menuList.append(li);
});

menuSection.append(menuList);

container.append(imgHeader, menuSection);

export const menuPage = () => {
  content.append(container);
};
