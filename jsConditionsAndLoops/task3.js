const number = Math.round(Math.random() * 10);
console.log(`Число для таблиці множення: ${number}`);

console.log("\nТаблиця множення через for: ");
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
};


console.log("\nТаблиця множення через while: ");
let i = 1;
while (i <= 10) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    i++;
};