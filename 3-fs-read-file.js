const fs = require('node:fs')

console.log('Leyendo el primer archivo');
fs.readFile('./archivo.txt', 'utf-8', (err, txt) => { // <-- Se ejecuta el callback cuando termine 
    console.log(txt)
})

console.log('Haciendo cosas asincronas...')

console.log('Leyendo el segundo archivo');
fs.readFile('./archivo2.txt', 'utf-8', (err, txt) => { // <-- Se ejecuta el callback cuando termine 
    console.log(txt)
})