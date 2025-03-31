const radius = Math.random() * 10 + 1;
console.log(`Radius is: ${radius.toFixed(2)}`);

const circleArea = +(Math.PI * Math.pow(radius, 2)).toFixed(2);
console.log(`Circle area = ${circleArea}`);