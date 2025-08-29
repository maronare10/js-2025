//Los objetos son una agrupación de datos que hacen sentido tenerlos juntos

//Ejemplo con personaje de TV

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
  nombre: "Tanjiro", //par llave-valor en otros lenguajes lo que se enccuentra a la izquierda se llama atributo, en js le decimos propiedad
  anime: "Demon slayer",
  edad: 16,
}; // objeto literal

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

personaje['edad'] = 15

delete personaje.anime;

console.log(personaje);

