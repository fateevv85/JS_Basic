var buttons = document.getElementsByClassName('addtocart_button');
var shp_cart = document.querySelector(".shp_cart__list");
var items_number = document.querySelector(".items_number");
// добавляем событие по клику на кнопку покупки
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = addToCart;
}

// удаляем элемент из корзины при нажатии на крестик
function removeItem() {
    //при удалении элемента из корзины он снова становится активным
    var dataId = this.parentElement.getAttribute("data_id");
    var gooditem = document.querySelectorAll(".showcase .gooditem");
    for (i = 0; i < gooditem.length; i++) {
        if (gooditem[i].getAttribute("data_id") == dataId) {
            gooditem[i].classList.remove("incart");
        }
    }
    this.parentElement.remove();
    numberOfItems();
    totalPrice();
    //сообщение "Товар удален!"
    appearingMessage("cancel");
    //если в корзине нет элементов, то видно сообщение "корзина пуста"
    if (!shp_cart.querySelector(".gooditem")) {
        shpCartEmpty();
    }
}

//для создания сообщения при добавлении и удалении товара
function appearingMessage(name) {
    var message = document.createElement("div");
    if (name == "cancel") {
        message.classList.add("cancel", "active");
        message.innerText = "Товар удален!";
    }
    else {
        message.classList.add("success", "active");
        message.innerText = "Товар добавлен!";
    }
    document.querySelector(".hidden_block").appendChild(message);
    setTimeout(function () {
        message.remove()
    }, 2000);
}

//для переключения сообщения "корзина пуста"
function shpCartEmpty() {
    document.querySelector(".shp_cart__empty").classList.toggle("delete");
    document.querySelector(".shp_cart__checkout").classList.toggle("delete");
    document.querySelector(".shp_cart__gotocart").classList.toggle("delete");
    document.querySelector(".shp_cart__total").classList.toggle("hidden");
}

//подсчитываем количество товаров в корзине и отображаем их в красном кружке
function numberOfItems() {
    var number = shp_cart.querySelectorAll(".gooditem");
    items_number.className = "items_number visible";
    items_number.innerText = number.length;
}

//считаем общую стоимость товаров
function totalPrice() {
    var item_cost = shp_cart.querySelectorAll(".item_cost");
    var total = document.querySelector(".shp_cart__total");
    var price = 0;

    for (var i = 0; i < item_cost.length; i++) {
        //ищем тэг ".item_cost" и извлекаем из него число (стоимость)
        price += parseInt(item_cost[i].textContent.split('$')[1]);
    }
    total.innerText = "Total: $" + price + ".00";
}

//функция добавления товара в корзину
function addToCart() {
    if (!this.parentElement.classList.contains("incart")) {
        this.parentElement.classList.add("incart");
        //назначаем новый атрибут для связки элемента в корзине и в магазине
        if (!this.parentElement.hasAttribute("data_id")) {
            this.parentElement.setAttribute("data_id", Date.now());
        }
        //копируем элемент, в котором была нажата кнопка, в корзину
        var gooditem = this.parentElement.cloneNode(true);
        shp_cart.appendChild(gooditem);
        //нажатие на крестик запускает функцию removeItem()
        var item_cross = document.querySelectorAll(".item_cross");
        for (var i = 0; i < item_cross.length; i++) {
            item_cross[i].onclick = removeItem;
        }
        //если корзина не пуста, то видны кнопки Checkout, GoToCart, а также видна общая сумма заказов.
        if (!document.querySelector(".shp_cart__empty").classList.contains("delete")) {
            shpCartEmpty();
        }
        //Сообщение о добавлении товара в корзину
        appearingMessage("success");
        numberOfItems();
        totalPrice();
    }
}