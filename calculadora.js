let sumar = require("./operaciones/suma");
let restar = require("./operaciones/resta");
let multiplicar = require("./operaciones/multiplicacion");
let dividir = require("./operaciones/division");


console.log(sumar(2,2));   //2 + 2 = 4
console.log(restar(2,2));  //2 - 2 = 0
console.log(multiplicar(2,2)); //2 * 2= 4
console.log(multiplicar(0,2)); //0 * 2= no
console.log(multiplicar(2,0)); // 2 * 0= no
console.log(dividir(2,2));  // 2 / 2= 1
console.log(dividir(2,-10));  // 2 / -10 = no
console.log(dividir(0,2));  //0 / 2 = no
