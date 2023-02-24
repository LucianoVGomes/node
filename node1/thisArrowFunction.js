function functionExpression() {
    console.log("Aponta para o global ->", this == global)
    console.log("Não aponta para o exports ->", this == exports)
    console.log("Não aponta para o module.exports", this == module.exports)

    console.log("O this nessa função é um objeto Global ->", this)
}

functionExpression()