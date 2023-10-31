let ru = ["вода", "хлеб", "сахар", "машина", "мяч"];
let uz = ["suv", "non", "shakar", "moshina", "to'p"];
let eng = ["water", "bread", "sugar", "car", "ball"];

function translate(word, lang) {
  if (lang == "ru") {
    for (let i = 0; i < eng.length; i++) {
      if (String(word) == eng[i]) {
        console.log(ru[i]);
      } else {
        continue;
      }
    }
  } else if (lang === "uz") {
    for (let i = 0; i < uz.length; i++) {
      if (String(word) == eng[i]) {
        console.log(uz[i]);
      } else {
        continue;
      }
    }
  } else {
    console.log(word);
  }
}

// translate("sugar", "uz");
