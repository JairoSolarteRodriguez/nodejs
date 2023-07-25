const fs = require('node:fs/promises')


Promise.all([
    fs.readFile('./archivo2.txt', 'utf-8'),
    fs.readFile('./archivo.txt', 'utf-8'),
]).then(([firstText, secondText]) => {
    console.log(firstText)
    console.log(secondText)
})

// PROS: Mas rapido porque hace dos o mas trabajos en paralelo.
// 