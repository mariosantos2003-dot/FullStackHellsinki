//Definicion de variables en JS
const x = 1
let y = 5

console.log(x, y)   // se imprime 1 5
y += 10
console.log(x, y)   // se imprime 1 15
y = 'sometext'
console.log(x, y)   // se imprime 1 sometext
             // provoca un error

//Definicion de arrays en JS

//Se define el array con los valores dentro
const t = [1, -1, 3]

const t2 = t.concat(5) // crea un nuevo array

console.log(t)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]

//Se añade un valor al final del array
t.push(5)

//Se muestra el tamaño del array
console.log(t.length) // se imprime 4
//Se muestra el segundo valor del array
console.log(t[1])     // se imprime -1

//Se imprimen todos los valores del array
t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})           

//Uso del map

const m1 = t.map(value => value * 2) // crea un nuevo array multiplicando cada valor por 2
console.log(m1) // se imprime [2, -2, 6, 10]

const [first,second, ...rest] = t // se desestructura el array
console.log(first)  // se imprime 1