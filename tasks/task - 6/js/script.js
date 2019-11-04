let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName('menu-item'),
    li = document.createElement('li'),
    h1 = document.querySelector('.title'),
    del = document.querySelector('.adv'),
    inputInfo = prompt('как вы относитесь с технике apple?',''),
    ask = document.querySelector('#prompt'),
    commentBox = document.createElement('div');


menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

li.classList.add('menu-item');
li.textContent = 'Пятый элемент';

menu.appendChild(li); // добавили пункт 5

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat'; // заменили картинку заднего фона на другую из папки img

h1.innerHTML = 'Мы продаем только подлинную технику Apple'; // сменили заголовок на "Мы продаем только подлинную технику Apple"

del.remove(); // удалили рекламу со страницы

commentBox.innerHTML = inputInfo;
ask.appendChild(commentBox); // спросили у пользователя отношение к технике apple и записали ответ в блок на странице с id "prompt"

function call(a,b,c,d,e,f,g) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
}
call(menu,menuItem,li,h1,del,ask,commentBox);



