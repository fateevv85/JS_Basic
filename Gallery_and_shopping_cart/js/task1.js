//создаем переменные
var bigPicture = document.createElement("img");
var bigPictureBlock = document.getElementById("big_picture_block");
var leftButton = document.querySelector('.left');
var rightButton = document.querySelector('.right');
//добавляем слушателся на клик кнопок
leftButton.addEventListener('click',toLeft);
rightButton.addEventListener('click',toRight);
//добавляем класс тэгу img
bigPicture.className = "big_picture";
//при загрузке окна
function init() {
    //ищем элементы с классом "img-small"
    var images = document.getElementsByClassName("img-small");
    //путь картинки по умолчанию
    bigPicture.src = "img/1.jpg";
    bigPictureBlock.appendChild(bigPicture);
    //функция при нажатии маленьких картинок
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
//выполняется при нажатии на маленькую картинку
function changeBigPicture(object) {
    //обнуляем большую картинку
    bigPictureBlock.innerHTML = "";
    //извлекаем из атрибута src номер картинки
    var imageNumber = object.currentTarget.getAttribute("src").split("/")[1];
    bigPicture.className = "big_picture";
    //создаем путь для большой картинки
    bigPicture.src = "img/" + imageNumber.split("-")[0] + ".jpg";
    bigPictureBlock.appendChild(bigPicture);
    bigPicture.onerror = function() {
        bigPicture.classList.add("error");
    }
}
//функция toLeft() выполняет функцию next('left');
function toLeft() {
    next('left');
}
//функция toRight() выполняет функцию next('right');;
function toRight() {
    next('right');
}
//функция перелистывания слайдов, принимает значения left и right
function next(side) {
    //ищем тэг с классом .big_picture
    var sourse = document.querySelector(".big_picture");
    //смотрим номер картинки
    var sourseParts = sourse.attributes.src.value.split("/");
    var number = parseInt((sourseParts[1].split(".", 1))[0]);
    //узнаем, сколько картинок есть в налиии
    var imagesNumber = document.querySelectorAll(".img-small");
    //в зависимости от направления выполняем действия
    if (side == 'right') {
        //добавляем проверку на наличие картинки
        sourse.onerror = function() {
            this.classList.add("error");
        }
        //листаем вправо
        if (number < imagesNumber.length) {
            sourse.src = "img/" + (number + 1) + ".jpg";
            leftButton.className = "left active";
            // sourse.className = "big_picture show";
        }
        //если номер картинки последний, то делаем стрелку неактивной
        if (number == (imagesNumber.length - 1)) {
            rightButton.className = "right inactive";
        }
    }
    else if (side == 'left') {
        sourse.onerror = function() {
            this.classList.add("error");
        }
        if (number > 1) {
            sourse.src = "img/" + (number - 1) + ".jpg";
            rightButton.className = "right active";
            // sourse.className = "big_picture show";
        }
        if (number == 2) {
            leftButton.className = "left inactive";
        }
    }
}
//выполняем функцию при загрузке окна
window.onload = init();

