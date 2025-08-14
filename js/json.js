let pessoa = {
    //nunca faça isso!!
    //"pessoa.nome" : "João"
    "nome" : "João",
    "idade" : 17,
}

// console.log(`Me chamo ${pessoa["nome"]}`)
// console.log(`Tenho ${pessoa.idade} anos`)

let pessoaComEndereco = {
    nome : "Maria",
    idade : 21,
    endereco : {
        logradouro : "Rua B",
        numero : 121,
    },
}

// console.log(
//     `Sou ${pessoaComEndereco.nome},
//     tenho ${pessoaComEndereco.idade} anos
//     e moro na rua ${pessoaComEndereco.endereco.logradouro}
//     número ${pessoaComEndereco.endereco['numero']}`
// )


let concessionaria = {
    cnpj : "01.112.221/0001-45",
    endereco : {
        logradouro : "Rua A",
        numero: 10,
        bairro: "Vila J",
    },
    veiculos: [
        {
            marca : "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020
        },
        {
            marca: "Volkswagen",
            modelo: "Nivus",
            anoDeFabricacao: 2020
        }
    ]
}

// for (let veiculo of concessionaria.veiculos){
//     console.log(`Marca: ${veiculo.marca}`)
//     console.log(`Modelo: ${veiculo.modelo}`)
//     console.log(`Ano de fabricacao: ${veiculo.anoDeFabricacao}`)
//     console.log()
// }

let calculadora = {
    soma: (a,b) => a+b,
    subtracao: function(a,b){
        return a-b
    }
}

console.log(` 2 + 3 = ${calculadora.soma(2,3)}`)
console.log(` 2 - 3 = ${calculadora.subtracao(2,3)}`)


