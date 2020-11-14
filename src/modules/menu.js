const content = document.querySelector('#content');

const container = document.createElement('div');

container.classList.add('menu-container');

const imgHeader = document.createElement('div');
imgHeader.classList.add('img-header');

const heading_cont = document.createElement('div');
heading_cont.classList.add('img-title');

const heading = document.createElement('h2');
heading.textContent = 'Menu';
heading.classList.add('title');

heading_cont.append(heading);

imgHeader.append(heading_cont);

const menu_section = document.createElement('section');
menu_section.classList.add('menu-section');

const menu_list = document.createElement('ul');

const menu_arr = ['ESPRESSO', 'LATTE', 'HOT CHOCOLATE', 'ICED TEA', 'PECAN STICKY BUNS'];
const price_arr = [2.75, 3.75, 3, 4.50, 2.75];

menu_arr.forEach((item, index) => {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const price = document.createElement('span');

    name.textContent = item;
    price.textContent = price_arr[index];

    li.append(name, price);
    menu_list.append(li);
});

menu_section.append(menu_list);

container.append(imgHeader, menu_section);

export const menuPage = () => {
    content.append(container);
}
