function ageCalculator(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var alternativeAge = age - 1;

  return "You are either " + age + " or " + alternativeAge;
}

var birthYear = 1993;
var currentYear = 2022;
var result = ageCalculator(birthYear, currentYear);
console.log(result);
