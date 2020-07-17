// Дан массив строк, который содержит цены товаров. Необходимо написать функцию, 
// которая считает сумму для указанной валюты.
// Пример: Для массива ["$11", "$1.5", "36₽", "$4", "6₽"] сумма для доллара будет 16.5, а для рубля 42

let arr = ["$11", "$1.5", "36₽", "$4", "6₽"];
const dollar = 16.5;
const ruble = 45;


function modifPrice(str, dollar, ruble) {
  let lastSimbol = str.length - 1;
  if (str[0] === "$") {
    return dollar * str.slice(1);
  }
  if (str[lastSimbol] === "₽") {
    return ruble * str.slice(0, lastSimbol);
  }

}

function changePrice(arr) {
  let res = [];
  arr.forEach(function (price) {
    res.push(modifPrice(price, dollar, ruble));
  });
  return res;
}

console.log(changePrice(arr));