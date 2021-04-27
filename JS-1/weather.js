//today forecast
const kelvin = 0;
// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;
// Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);