// Importar 
const fs = require('fs') //  'fs' file system

fs.readFile('arquivo.txt1', 'utf8', (err, data) => {

    if(err) {
        console.log(err)
    }
    console.log(data)

})

// readFile -- Leitura de um arquivo 'txt'
