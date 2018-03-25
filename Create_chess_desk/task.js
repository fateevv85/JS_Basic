function chess() {
	//создаем тэг стилей 
	document.head.appendChild(document.createElement('style'));
	//наполняем его стилями
	styles();
	//создаем таблицу
	var table = document.createElement("table");
	table.className = "table outline rotate";
	//размещаем таблицу
	document.getElementsByTagName('fieldset')[0].appendChild(table);
	//создаем строки и разделяем ячейки четных и нечетных строк
	for (var i = 1; i <= 10; i++) {
		var row = document.createElement("tr");
		table.appendChild(row);
		if (i == 1) {
			//верхние буквы
			row.className = 'edge bottom rotate';
			//добавляем ячейки с помощью функции
			cells('edge-top');
		}
		else if (i == 10) {
			//нижние буквы
			row.className = 'edge top rotate';
			cells('edge-bottom');
		}
		else if (i % 2 == 0) {
			//row.className = 'even' + i;
			//ячейки четных строк
			cells('even');
		}
		else {
			//row.className = 'odd' + i;
			//ячейки нечетных строк
			cells('odd');
		}
	}
	document.getElementsByTagName('button')[0].remove();
	//------функция добавления ячеек--------------------
	function cells(parity) {
		//массив для букв
		var abc = ['A','B','C','D','E','F','G','H'];
		for (var j = 1; j <= 10; j++) {
			var cell = document.createElement('td');
			row.appendChild(cell);
				//вставляем буквы
				if ((parity == 'edge-top' || parity == 'edge-bottom') && j !== 1 && j !== 10) {
					cell.innerText = abc[j-2];
				}
				if (parity == 'edge-bottom') {
					cell.className = 'rotate';
				}
				//вставляем фигуры, цифры и раскрашиваем поля.
				else {
					if (j == 1 && parity !== 'edge-bottom' && parity !== 'edge-top') {
						cell.className = 'edge';
						cell.innerText = i-1;
					}
					else if (j == 10 && parity !== 'edge-bottom' && parity !== 'edge-top') {
						cell.className = 'edge rotate';
						cell.innerText = i-1;
					}
					else if (parity == 'even') {
						if (i == 8) {
							//вставляем фигуры функцией
							cell.innerHTML = figure('b_pawn');
						}
						if (i == 2) {
							if (j == 2 || j == 9) {
								cell.innerHTML = figure('rook');
							}
							else if (j == 3 || j == 8) {
								cell.innerHTML = figure('knight');
							}
							else if (j == 4 || j == 7) {
								cell.innerHTML = figure('bishop');
							}
							else if (j == 6) {
								cell.innerHTML = figure('queen');
							}
							else if (j == 5) {
								cell.innerHTML = figure('king');
							}
						}
						if (j % 2 !== 0) {
							cell.className = 'black';
						}
					}
					else if (parity == 'odd') {
						if (i == 3) {
							cell.innerHTML = figure('pawn');
						}
						if (i == 9) {
							if (j == 2 || j == 9) {
								cell.innerHTML = figure('b_rook');
							}
							else if (j == 3 || j == 8) {
								cell.innerHTML = figure('b_knight');
							}
							else if (j == 4 || j == 7) {
								cell.innerHTML = figure('b_bishop');
							}
							else if (j == 6) {
								cell.innerHTML = figure('b_queen');
							}
							else if (j == 5) {
								cell.innerHTML = figure('b_king');
							}
						}
						if (j % 2 == 0) {
							cell.className = 'black';
						}
					}
				}
		}
		//функция вставки фигуры----------------------
		function figure(name) {
			//создаем массив для тэга div, чтобы вставить в него код фигуры
			var div = ['<div class="figure rotate">','</div>'];
			switch(name) {
				case 'pawn': div.splice(1,0,'\u2659');
				break;
				case 'b_pawn': div.splice(1,0,'\u265F');
				break;
				case 'knight': div.splice(1,0,'\u2658');
				break;
				case 'b_knight': div.splice(1,0,'\u265E');
				break;
				case 'bishop': div.splice(1,0,'\u2657');
				break;
				case 'b_bishop': div.splice(1,0,'\u265D');
				break;
				case 'rook': div.splice(1,0,'\u2656');
				break;
				case 'b_rook': div.splice(1,0,'\u265C');
				break;
				case 'queen': div.splice(1,0,'\u2655');
				break;
				case 'b_queen': div.splice(1,0,'\u265B');
				break;
				case 'king': div.splice(1,0,'\u2654');
				break;
				case 'b_king': div.splice(1,0,'\u265A');
			}
			return div.join('');
		}
	}
	//-------------функция вставки стилей в тэг head----------
	function styles() {
		//массив стилей
		var css = [
		'.border {\nborder: 1px solid black;}',
		'.black {\nbackground-color: gray;}',
		'.rotate {\ntransform: rotate(180deg);}',
		'td {\ntext-align: center;}',
		'.edge {\nbackground-color: darkseagreen;\nfont-weight: 100;\ncursor: default;}',
		'.outline {\noutline: 1px solid black;}',
		'.figure {\nfont-size: 27px;\nheight: 21px;\nwidth: 33px;\nline-height: 25px;\ncursor: default;}',
		'.table {\nwidth: 350px;\nheight: 350px;\nborder-collapse: collapse;\ntable-layout: fixed;\nbox-shadow: -6px -7px 14px #000000;}'
		];
		//ищем тэг стилей и наполняем его значениями из массива
		var style = document.getElementsByTagName('style')[0];
		for (var i in css) {
			style.appendChild(document.createTextNode(css[i]));
		}
	}
}