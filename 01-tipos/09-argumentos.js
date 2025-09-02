/* function suma(a) {
return a + 2;
}

let resultado = suma(5);
console.log(resultado); */

function suma(a, b) {
  console.log(arguments);
  return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);

