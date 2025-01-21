const scrollContainer = document.querySelector('.scroll-content');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

scrollLeftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
});