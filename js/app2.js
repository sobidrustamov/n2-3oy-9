
let BMI = function (h, w) {
 let bmi = w / (h * h);
  if (18.4 < bmi && bmi < 25) {
    return +bmi.toFixed(1) + " is normal";
  } else if (24.9 < bmi && bmi < 30) {
    return +bmi.toFixed(1) + " is overweight";
  } else if (29.9 < bmi && bmi < 40) {
    return +bmi.toFixed(1) + " is obese";
  } else if (bmi > 40) {
    return +bmi + " is morbidly";
  } else {
    return +bmi.toFixed(1) + " is thin";
  }
};
