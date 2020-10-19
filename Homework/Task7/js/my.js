function getLeftYearsInSchool (name, classes){
	let message;
	let left = 11 - classes;
	if (left < 0){
		message = (name + ", уже окончил(а) школу");
	} else if ((left >= 5) || (left === 0)){
		message = (name + ", учиться еще " + left + " лет");
	} else if ((left > 1) && (left < 5)){
		message = (name + ", учиться еще " + left + " года");
	} else {
		message = (name + ", учиться еще " + left + " год");
	}
	return message;
}

let name = prompt('Как ваше имя?');
let classes = prompt('В каком ты классе?');
alert (getLeftYearsInSchool(name, classes));