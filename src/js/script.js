window.addEventListener('DOMContentLoaded', () => {

    //?Меню бургер
    const headerList = document.querySelector('.header__list');
    const headerItem = document.querySelectorAll('.header__item');
    const headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        headerBurger.classList.toggle('header__burger_active');
        headerList.classList.toggle('header__list_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            headerBurger.classList.toggle('header__burger_active');
            headerList.classList.toggle('header__list_active');
        });
    });

    //Табы
    document.querySelectorAll('.tabs__item').forEach(el => {
        el.addEventListener('click', function (e) {
            var target = e.target.dataset.target;
            document.querySelectorAll('.tabs__item').forEach(el => el.classList.remove('tabs__item_active'));
            document.querySelectorAll('.tabs__block').forEach(el => el.classList.remove('tabs__block_active'));
            e.target.classList.add('tabs__item_active');
            document.querySelector('.' + target).classList.add('tabs__block_active');
        });
    });

});