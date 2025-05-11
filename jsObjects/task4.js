const person = {
	firstName: 'Olivia',
	lastName: 'Bennett',
	age: 28,
};

person['email'] = 'bennett28@gmail.com';

delete person.age;

console.log(person);
