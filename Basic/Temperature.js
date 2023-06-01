let temperature = Math.random() * 30 - 5;
temperature = temperature.toFixed(2);

if (temperature >= -5 && temperature <= 10) {
  console.log("The weather is cold");
} else {
  console.log("The weather is moderate");
}
