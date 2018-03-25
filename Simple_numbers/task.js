/*
Просто́е число́ — это натуральное число, 
большее единицы, имеющее ровно два натуральных делителя: 
1 и само себя.
Метод нахождения простых чисел- 
Перебор делителей (пробное деление).
Перебор делителей заключается в переборе всех целых 
(как вариант: простых) чисел от 2 до квадратного корня 
из факторизуемого числа n и в вычислении остатка от 
деления n на каждое из этих чисел. Если остаток от деления 
на некоторое число i равен 0, то i является делителем n. 
В этом случае n объявляется составным, и алгоритм 
заканчивает работу.
По достижении квадратного корня из n и невозможности 
сократить n ни на одно из меньших чисел n объявляется простым.*/

function simple() {
  var currentNumber = 0;
  var simpleNumbers = [];
  var border = prompt('Вывести простые числа от 0 до: ', 100);
    while (border <= 1 || isNaN(border) == true) {
      alert('Введите число >1 !');
      border = +prompt('Вывести простые числа от 0 до: ', 100);
    }

  while (currentNumber <= border) {
    var root = parseInt(Math.sqrt(currentNumber));
    //начальный делитель = 2
    var divisor = 2;

    if (currentNumber == 2 || currentNumber == 3) {
    	simpleNumbers.push(currentNumber);
    }
    else {
      while (divisor <= root) {
        if (currentNumber % divisor == 0) {
          break;
        }
        else if (divisor == root) {
          simpleNumbers.push(currentNumber);
          break;
        }
        else {
          divisor++;
        }
      }
    }
    currentNumber++;
  }

  document.getElementById('task1').rows = Math.ceil((simpleNumbers.length)*0.05);
  document.getElementById('task1').value = simpleNumbers + '.';
  document.getElementById('task1_quantity').innerHTML = simpleNumbers.length;
}

//Задание №2
function even_odd() {
  var currentNumber = +prompt('Вывести числа от 0 до:', 10);
  while (currentNumber < 1 || isNaN(currentNumber) == true) {
    alert('Введите число > 0 !');
    currentNumber = +prompt('Вывести числа от 0 до:', 10);
  }
  var arr = [];
  var i = 0;
  do {
    if (i == 0) {
      // document.write('0 - это ноль. <br>');
      arr.push('0 - это ноль');
      i++;
    }
    else if (i % 2 !== 0) {
      // document.write(i + ' - это нечетное число. <br>');
      arr.push(i + ' - нечетное число');
      i++;
    }
    else {
      // document.write(i + ' - это четное число. <br>');
      arr.push(i + ' - четное число');
      i++;
    }
  }
  while (i <= chislo);
  document.getElementById('task2').value = arr.join('\n') + '.';
}

//Задание №3
function write_numbers() {
  for (var i = 0, arr = []; i <= 9; arr.push(i++), document.getElementById('task3').value = arr + '.');
}

//Задание №4
function pyramid() {

  //Очистка консоли перед запуском
  console.API;
  if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI; //chrome
  } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI; //Safari
  } else if (typeof console.clear !== 'undefined') {
    console.API = console;
  }
  console.API.clear();


  //задание
  var levels = +prompt('Введите количество уровней пирамиды', 20);
  while (levels < 1 || isNaN(levels) == true) {
    alert('Введите число > 0 !');
    levels = +prompt('Введите количество уровней пирамиды', 20);
  }
  var block = '';
  for (i = 1; i <= levels; i++) {
    console.log(block += 'x');
  }
}

//another two
//only one