 // Mais de um valor
 const x = 10
 const y = 'Pato'
 const z = [1, 2]

 console.log(x, y, z)

 // contagem de impressões 
 console.count(`o Valor de x é ${x}, contagem:`)
 console.count(`o Valor de x é ${x}, contagem:`)
 console.count(`o Valor de x é ${x}, contagem:`)
 console.count(`o Valor de x é ${x}, contagem:`)

 // variavel entre string
 console.log("o Nome é %s, e ele é programador", y)

 // limpar o console
 setTimeout(() => {
    console.clear()
 }, 2000);