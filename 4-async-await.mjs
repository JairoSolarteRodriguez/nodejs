import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo');
const firstText = await readFile('./archivo.txt', 'utf-8')
console.log(firstText)

console.log('------> Haciendo cosas asincronas... <--------')

console.log('Leyendo el segundo archivo');
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log(secondText)


// IIFE - Inmediatly Invoked Function Expression
// ;(
//   async () => {
//     console.log('Leyendo el primer archivo...')
//     const text = await readFile('./archivo.txt', 'utf-8')
//     console.log('primer texto:', text)
//     console.log('--> Hacer cosas mientras lee el archivo...')
    
//     console.log('Leyendo el segundo archivo...')
//     const secondText = await readFile('./archivo2.txt', 'utf-8')
//     console.log('segundo texto:', secondText)    
//   }
// )()