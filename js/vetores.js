// v1 = []

// //acessando posições
// v1[0] = 3.4
// v1[10] = 2
// v1[2] = 'abc'
// console.log(v1)


// //v1 tem comprimento 11
// console.log(v1.length)

// v2 = [2, 'abc',  true]
// console.log(v2)

// //iteração

// for( let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// }

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"];

const apenasComA = nomes.filter((n) => n.startsWith("A"))
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(0));
console.log(res)

const todosComecamComA = nomes.every((n) => n.startsWith("A"))
console.log(todosComecamComA)

const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)



