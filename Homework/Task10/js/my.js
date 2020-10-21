let user1 = {
	name: "Masha",
	surname: "Kulakova",
	age: 21,
	isMaster: false,
	course: 4
};

let user2 = {
	name: "Lilit",
	surname: "Atanesyan",
	age: 21,
	isMaster: false,
	course: 4
};

let user3 = {
	name: "Rodion",
	surname: "Kostin",
	age: 21,
	isMaster: false,
	course: 3
};

for (let key in user1) {
  // ключи + значение ключей
  alert( key + " " + user1[key]);
}