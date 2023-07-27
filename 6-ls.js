// const fs = require('node:fs')

// fs.readdir('.', (err, files) =>{
//     if(err) {
//         console.log(err)
//     }

//     if(files){
//         files.forEach((file) => {
//             console.log(file)
//         })
//     }
// })


// ---------------------- ADVANCE ----------------------------
const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(dir){
    let files
    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(`No se puedo leer el ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(dir, file)
        let stats

        try {
            stats = await fs.stat(filePath) // Informacion del archivo.
        } catch (error) {
            console.error(`No se puedo leer el ${folder}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(30)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}


ls(folder)