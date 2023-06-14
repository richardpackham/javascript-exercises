// fahrenheit to Celsius	x °F ≘ (x − 32) × 5/9 °C	
// celsius to Fahrenheit x °C ≘ (x × 9/5 + 32) °F

const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit-32)/9)*5
  celsius = Math.round(celsius*10)/10
  return celsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ((celsius/5)*9) + 32
  fahrenheit = Math.round(fahrenheit*10)/10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
