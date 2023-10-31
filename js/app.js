// function declaration
// function kvadrat() {
//   let a = +prompt("son kiriting");
//   console.log(a * a);
// }

// function expression
// let kv = function kvadrat() {
//   let a = +prompt("son kiriting");
//   console.log(a * a);
// }

// arrow
// let greeting = () => {
//   let a = +prompt("son kiriting");
//   console.log(a * a);
// };

// kvadrat();
// kv();
// greeting();

// function isNegative(num) {
//   if (num < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isPositive(num) {
//   if (num > 0) {
//     console.log(true +" 0");
//   } else {
//     console.log(false + " 0");
//   }
// }

// console.log(isPositive(0));
// console.log(isNegative(0));

// setTimeout(isPositive, 3000);
// let iId = setInterval(isPositive, 3000);

// setTimeout(() => {
//   clearInterval(iId);
// }, 10_000);

// let arr = ["olma", "anor", "limon"];
// let arr1 = [];

// for (let i = 0; i < arr.length; i++) {
//   let l = "";
//   for (let j = 0; j < arr[i].length; j++) {
//     if (j % 2 === 0) {
//       l += arr[i][j].toUpperCase();
//     } else {
//       l += arr[i][j];
//     }
//   }
//   arr1.push(l);
// }

// console.log(arr1);


// const myFruits = {
//   fruits: [
//     { eng: "apple", translate: ["yabloko", "uzum"] },
//     { eng: "pear", translate: ["persik", "shaftoli"] },
//   ],
// };

// let i;

// function myTranslate(word, lang) {
//   for (i = 0, i < myFruits.fruits.length; i++; ) {
//     if (String(word.toUpperCase()) == myFruits.fruits[i].eng.toUpperCase()) {
//       for (j = 0; j < myTranslate.length; j++) {
//         if (String(lang.toUpperCase()) == "RU") {
//           console.log(myFruits.fruits[i].translate[j].toUpperCase());
//         } else if (String(lang.toUpperCase()) == "UZ") {
//           console.log(myFruits.fruits[i].translate[j].toUpperCase());
//         } else {
//           console.log(myFruits.fruits[i].eng.toUpperCase());
//         }
//       }
//     }
//   }
// }