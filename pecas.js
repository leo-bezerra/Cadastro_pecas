// Variáveis, são um espaço na memória do computador para guardar algum valor.
// pesoPeca = Camel Case
// peso_peca = Snake Case
// PesoPeca = Pascal Case

let pesoPeca = 100

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, a peça pode ser cadastrada!")
} else {
    console.log("Peso insuficiente, não é possível cadastrar a peça!")
}

let numeroPecas = 10

if(numeroPecas < 10) {
console.log("Ainda há espaço na caixa, a peça pode ser cadastrada.")
} else {
    console.log("Não há espaço disponível na caixa.")
}

let nomePeca = "Disco"

console.log("O comprimento no nome da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possível efetuar o cadastro")
} else {
    console.log("Nome de peça em conformidade, pode ser cadastrada!")
}
