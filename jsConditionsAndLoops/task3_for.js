const number = Math.round(Math.random() * 10);
console.log(`Число: ${number}`);


for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
};