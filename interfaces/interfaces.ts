interface humano {
    nome: string // obrigado passar um nome
    idade?: number // opcional passar o number por causa da ?:
    [prop: string]: any // opcional passar outra chave e valor no obj
}

function saudarComOla (pessoa: humano) {
    console.log(`Olá ${pessoa.nome}`)
}

function mudarNome (pessoa: humano) {
    pessoa.nome = "Maria"
}

const pessoa = {
    nome: "Jõao",
    idade: 27
}

saudarComOla(pessoa)// Olá João
mudarNome(pessoa)// executando a função
saudarComOla(pessoa)// Olá Maria
saudarComOla({nome: "Paulo", idade: 55, endereco: 2, })// Olá Paulo