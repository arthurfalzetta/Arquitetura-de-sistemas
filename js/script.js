const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo) {
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(`Conteúdo: ${conteudo.toString()}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = function(erro){
                if(erro){
                    console.log(`Erro tentando salvar o dobro: ${erro}`)
                }
                else{
                    console.log("Salvou o dobro com sucesso")
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
            const triplo = Number(conteudo.toString()) * 3
            const finalizar2 = function(erro){
                if(erro){
                    console.log(`Erro ao salvar o triplo: ${erro}`)
                }
                else{
                    console.log(`Salvou o triplo com sucesso`)
                }
            }
            fs.writeFile('triplo.txt', triplo.toString(), finalizar2)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Continuando...')
}
abrirArquivo('arquivo.txt')

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000;
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4;
//     return d;
// }

// const a = 2 + 5;
// const b = 5 + 9;
// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)
// const e = 2 + a + b;
// console.log(`e: ${e}`);


//comparação
// == compara os valores, caso sejam tipos diferentes acontece a coerção implícita
// === true se os valores e tipos forem iguais
// console.log(1 == 1)// true
// console.log(1 == '1')//true
// console.log(1 === 1)//true
// console.log(1 === '1')//false
// console.log (true == 1) //true
// console.log (1 == [1])//true
// console.log (null == null)//true
// console.log (null == undefined)//true
// console.log([] == false)//true
// console.log ([] == [])//false

//aqui não ocorre o casting, compara objetos
// console.log([1] == [1])//false

//aqui ocorre coerção, compara os valores
// console.log( 1 == [1])//true

// a1 = [1]
// a2 = a1
// console.log(a1 === a2) // para conseguir fazer console.log([1] === [1]) sem dar problema

//coerção
// const n1 = 2;
// const n2 = '3';
// //coerção implícita de n1, concatenação acontece
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita, soma acontece
// const n4 = n1 + Number (n2)
// console.log(n4)





// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);
// //nome pode ser redeclarada
// var linguagem = "Java";
// console.log("Aprendendo, " + linguagem);
// //escopo não restrito a bloco
// var idade = 18;
// //exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
// //Ela é içada - do inglês hoist - para fora do bloco if
// console.log(`Oi, ${nome}`);
// if (idade >= 18) {
// var nome = "João";
// console.log(`Parabéns, ${nome}. Você pode dirigir`);
// }
// //ainda existe aqui
// console.log(`Até mais, ${nome}.`);
// // usar o let no lugar do var torna o código mais intuitivo e "normal"


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
