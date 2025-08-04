var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
//nome pode ser redeclarada
var linguagem = "Java";
console.log("Aprendendo, " + linguagem);
//escopo não restrito a bloco
var idade = 18;
//exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
//Ela é içada - do inglês hoist - para fora do bloco if
console.log(`Oi, ${nome}`);
if (idade >= 18) {
var nome = "João";
console.log(`Parabéns, ${nome}. Você pode dirigir`);
}
//ainda existe aqui
console.log(`Até mais, ${nome}.`);
// usar o let no lugar do var torna o código mais intuitivo e "normal"


// //declarando constantes
// const nome = "Jose";
// const idade = 27;
// console.log(nome)
// // aspas simples e duplas têm o mesmo efeito
// const sexo = "M";
// const endereco = 'Rua K, 12'
// //declarando variáveis
// //let: variável local com escopo de bloco
// let a = 2;
// let b = "abc";
// console.log('b')
// //var: seu escopo é a função em que foi declarada ou global
// var c = 2 + 3;
// var d = "abcd"
