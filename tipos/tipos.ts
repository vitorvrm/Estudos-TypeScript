// STRING
let nome = "vitor"
console.log(nome)//vitor

//nome = 28  <--- [DARIA ERRO] 
/*uma das diferenças do TYPESCRIPT para o JAVASCRIPT é essa, não posso mudar o tipo da variável
dessa maneira */



//NUMBERS

let numero = 11
console.log(numero)//11

numero = 11.2
/* Nesse caso o TYPESCRIPT aceita numeros inteiros e reais apenas como number */



//BOOLEANS

let verdadeOuMentira = false
console.log(verdadeOuMentira)//false

//verdadeOuMentira = 1  <--- [DARIA ERRO]
/* É importante lembrar que caso esse código fosse gerado, o numero 1 seria impresso, porém dentro do arquivo ele continuaria mostrando erro */



// DECLARANDO O TIPO
let declarandoTipo
declarandoTipo = 21
console.log(declarandoTipo)//21

declarandoTipo = "oi"

/* Percebemos que se for declarada apenas a variável sem declarar o tipo, o compilador não acusa o erro */
let declarandoTipo2: number = 25
let declarandoTipo3: string = "olá"
/* É uma boa prática declarar dessa forma, assim evitando possíveis erros */



//ARRAY
let arr = ['uva', 'maçã', 'acerola']
console.log(arr[1]) //maçã
console.log(typeof arr)//object

//arr = [25] <--- [DARIA ERRO] (string é diferente de number)
/*Resolvendo*/
let arr2: any[] = ['uva', 'maçã', 'acerola']
console.log(arr2[0])//uva

arr2 = [25]
/* Com o "any" podemos dizer que a variável pode receber qualquer tipo, contanto que seja um array */
//arr2 = 100 <--- [DARIA ERRO]



//TUPLAS
let endereco: [string, number, string] = ['Rua Padre José', 20, 'Bloco: B']// ex: Rua, número, bloco 
console.log(endereco)// {'Rua Padre José', 20, 'Bloco: B'}

//endereco = ["Av Marcelo Jr", 35, 12] <--- [DARIA ERRO] (string, number, NUMBER)
endereco = ["Av Marcelo Jr", 35, "Bloco 12"]
/* Nesse segundo caso, a mundança da variável está respeitando a forma como foi criada a tupla (string, number, string) */



//ENUMS
enum cor {
    cinza, //0
    verde, //1
    vermelho, //2
    amarelo //3
}

let minhaCor: cor = cor.vermelho
console.log(minhaCor)// 2



//ANY
let loja: any = "C&A"
console.log(loja)//C&A

loja = {
    nome: "C&A",
    produto: "Roupas",
    quantidade: 500
}

console.log(loja)// {nome: "C&A", produto: "Roupas", quantidade: 500}

loja = ["C&A", "Renner", "Riachuelo"]
console.log(loja)// ["C&A", "Renner", "Riachuelo"]