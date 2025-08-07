// function hello (){
//     console.log('Oi')
// }

// hello('Arthur')

// function hello(nome) {
//     console.log('Hello, ' + nome)
// }

// hello('Pedro')

//A última definição é a que será usada


// function soma(a, b) {
//     return a + b;
// }
// const res = soma(2, 3)
// console.log(res)


//Funções anônimas
// const dobro = function(n){
//     return n * 2
// }
// const res = dobro(4);
// console.log(res)

// //valor padrão para parâmetro
// const triplo = function (n = 5) {
//     return 3*n
// }

// console.log(triplo())
// console.log(triplo(10))


//arrow function

const hello = () => console.log("Hello");
hello();

const dobro = (valor) => valor *2;
console.log(dobro(100))

const triplo = (valor) => {
    return valor * 3
}

console.log(triplo(300))

// se abriu chaves precisa do return, sem ele devolve undefined
const ehPar = (n) => {
    return n % 2 === 0;
}
console.log(ehPar(10))