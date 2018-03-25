//стабильная версия
function millionaire() {
    var money = 0;
    var i = 0;
    var event = +prompt('Вопрос №' + (i+1) + ':\n' + array[i].text + array[i].a + 'Стоимость вопроса: '+ array[i].value + '\nВаши деньги: ' + money + '\n\n"-1" - Выход.', -1);
    var gameIsRunning = true;

    while (gameIsRunning) {
        if(parseInt(event) == -1){
            gameIsRunning = false;
        }
        else if(parseInt(event) == 0 || isNaN(event) || event > 4 || event < -1) {
            alert("Введите верное число");
            // запрашиваем по новой
            event = +prompt('Вопрос №' + (i+1) + ':\n' + array[i].text +
            array[i].a + 'Стоимость вопроса: '+ array[i].value +
             '\nВаши деньги: ' + money + '\n\n"-1" - Выход.', -1);
        }
        // ввел правильноe число от 1 до 4, проверяем ответ
        else {
            var userAnswer = isAnswer(array[i].true,event);
            //если число угадано
            if (userAnswer) {
                money = money + array[i].value;
                i++;
                if (i == array.length) {
                    alert('Поздравляем! Вы победили!');
                    break;
                }
                else {
                event = +prompt('Вопрос №' + (i+1) + ':\n' + array[i].text + array[i].a + 'Стоимость вопроса: '+ array[i].value + '\nВаши деньги: ' + money + '\n\n"-1" - Выход.', -1);
                }
            }
            //если нет, завершаем игру.
            else {
                break;
            }
        }
    }
alert ('Ваш выигрыш составил ' + money + ' рублей.\nДо свидания!');

//------------------------------------------
    function isAnswer(answer, event) {
        if (answer == event) {
            alert('Правильный ответ!' + '\nВы заработали: ' + array[i].value + ' рублей.');
            return true;
        }
        else {
            alert('Неправильный ответ, игра окончена!');
            return false;
        }
    }
}

//--------------------------------------------
/*
    function question(number) {
        event = +prompt('Вопрос №' + (number+1) + ':\n' + array[number].text + array[number].a + 'Стоимость вопроса: '+ array[number].value + '\nВаши деньги: ' + money + '\n\n"-1" - Выход.', -1);
    }
*/