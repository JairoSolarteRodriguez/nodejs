// process objeto global que proporciona info y control sobre el proceso actual de ejecucion

// argumentos de entrada
// console.log(process.argv) // argumentos que recibe la linea de comandos

//controlar el proceso y su salida
// process.exit(0) // todo ha ido bien
// process.exit(1) // ha habido algun error y se requiere que salga el proceso


// // controlar eventos del proceso
// process.on('exit', () => {
//     // ej. limpiar recursos
// })

console.log(process.cwd()) // current working directory

console.log(process.env.PEPITO)