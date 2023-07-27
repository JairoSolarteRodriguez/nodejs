const path = require('node:path')

console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('carpeta', 'subcarpeta', 'password.txt')
console.log(filePath)

const extension = path.extname('image.jpg')
console.log(extension)