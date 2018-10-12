document.addEventListener('DOMContentLoaded', function(){
    let menuItems = document.getElementsByClassName('menu-item'),
        menu = document.querySelector('.menu'),
        title = document.getElementById('title'),
        adv = document.querySelectorAll('.adv'),
        column = document.querySelectorAll('.column'),
        promptElem = document.getElementById('prompt');

    menu.insertBefore(menuItems[2], menuItems[1]);
    document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
    title.innerHTML = 'Мы продаем только подлинную технику Apple';
    column[1].removeChild(adv[0]);
    promptElem.innerHTML = prompt('Как вы относитесь к технике Apple?', '');
});