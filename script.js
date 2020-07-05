const showButton = document.querySelector('#show-button');
const overlay = document.querySelector('.overlay');
const removeButton = document.querySelector('#remove-button');

showButton.addEventListener('click', () => {
    overlay.classList.add('show-overlay')
})

removeButton.addEventListener('click', () => {
    overlay.classList.remove('show-overlay');
})