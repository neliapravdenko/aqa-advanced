const radius = +(0, 1 * Math.random() * 10).toFixed(2);
const height = +(0, 1 * Math.random() * 10).toFixed(2);
const cylinderVolume = +(Math.PI * radius ** 2 * height).toFixed(2);

console.log(`Cylinder radius is: ${radius}`);
console.log(`Cylinder height is: ${height}`);
console.log(`Cylinder volume is: ${cylinderVolume}`);