const clearPage = () => {
  const content = document.querySelector('#content');

  let child = content.firstElementChild;

  while (child) {
    content.removeChild(child);
    child = content.firstElementChild;
  }
};

export default clearPage;