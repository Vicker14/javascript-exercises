const convertToCelsius = function(farenheitTemperature) {
  const result = ((farenheitTemperature - 32) * 5 / 9);
  return Number(
    result.toFixed(
      Number.isInteger(result) ? 0 : 1
    )
  );
};

const convertToFahrenheit = function(celsiusTemperature) {
  const result = ((celsiusTemperature * 9 / 5) + 32);

  return Number(
    result.toFixed(
      Number.isInteger(result) ? 0 : 1
    )
  );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
