const users = [
	{ name: 'Daniel Cooper', email: 'daniel.cooper@example.com', age: 34 },
	{ name: 'Emma Richardson', email: 'emma.richardson@example.com', age: 27, children: 2 },
	{ name: 'Lucas Bennett', email: 'lucas.bennett@example.com', age: 31 },
	{ name: 'Ava Mitchell', email: 'ava.mitchell@example.com', age: 24, children: 1 },
	{ name: 'Noah Harris', email: 'noah.harris@example.com', age: 36, property: 'car' },
];

for (const { name, email, age, ...rest } of users) {
	console.log(`${name} - ${age} years, email: ${email}`, rest);
}
