function convertToF(celsius) {
  let fahrenheit = (celsius * 9)/5 + 32;
  return fahrenheit;
}
let result = convertToF(30); // Temperature in Celsius
console.log(result);
