let j = 0;
while (j < 5) {
  let a = +prompt("O'ylagan soningizni kiriting");
  j++;
  if (a === (Math.floor(Math.random() * 10) + 1)) {
    console.log("Qoyil topdingiz!");
    break;
  }else if(j === 5){
    console.log(" Topolmadingiz, sizda urunishlar tugadi");
    break;
  } 
  else {
    console.log("Topolmadingiz, yana urunib ko'ring");
  }
}

