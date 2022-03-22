"use strict";

//let num = 50;

//while (num < 50) {  console.log (num);
  //  num++;
//}

//let num = 50;

//for (let i = 1; i < 33; i++) {
    //console.log(num);
    
//}
let fruit = prompt('Какой фрукт самый классный?', '');

let bag = {
  pinapple: 'Yes, okay',
  model: 45,
  price: 46500,
  data: 2022,
};
if (fruit != 'pinapple' || null) alert ('Вот ты кадр');
// else (fruit = 0) alert ('Ну как так то?');
 alert(bag[fruit]);
let meat = confirm('Мясо курицы хорошее?');
// if (meat = true) alert ('you good boy');
 // (meat = true) alert ('you bad boy');
 switch (meat) {
   case false:
   alert ('bad boyz');
   break;
   case true:
   alert ('Good boyz');
   break;
 }



alert(meat);