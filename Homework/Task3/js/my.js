let age = prompt("Введите ваш полный возраст:");
if (age < 0){
	document.write("Не обманывай, введи свой реальный возраст")
} else if (age < 13){
	document.write("Ты ребенок")
} else if (age < 18){
	document.write("Ты подросток")
} else if (age < 31){
	document.write("Ты в расцвете сил")
} else if (age < 46){
	document.write("Пора садить дерево и растить сына")
} else if (age > 60)
	document.write("Пора на пенсию")