const open = document.querySelector('[data-action="open-modal"]');
const close = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');

open.addEventListener('click', () => {
    body.classList.add('show-modal');
})

close.addEventListener('click', () => {
    body.classList.remove('show-modal');
})

backdrop.addEventListener('click', () => {
    body.classList.remove('show-modal');
})
