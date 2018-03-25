function nto() {
	var number = +prompt('Введите число от 0 до 999');
	while (number < 0 || isNaN(number) || !isFinite(number)) {
      alert('Введите число >0 !');
      number = +prompt('Введите число от 0 до 999');
    }
  number = Math.floor(number);
  var object = {};
  if (number > 999) {
  	console.log('Число больше 999, обьект пуст.');
  	console.log(object);
  }
  else {
  	var hundreds = parseInt(number / 100); //134
  	//var dozens = (parseInt(number / 10) - hundreds*10);  //number%100 / 10
    var dozens = parseInt((number%100)/10);
  	//var units = (number - (hundreds*100 + dozens*10)); //number%10
    var units = number%10;
  	object.units = units;
  	object.dozens = dozens;
  	object.hundreds = hundreds;
  	console.log(object);
    // for (var i in object) {
    //   console.log(i, object[i]);
    // }
  }
}