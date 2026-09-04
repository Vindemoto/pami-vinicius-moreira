console.log("Hello world!")

var Var01 = "Nós"; // Variáveis 'var' são mutáveis
let Var02 = "somos os"; // Variáveis 'let' são mutáveis
const Var03 = "ratos";// Variáveis 'const' são imutáveis

// Concatenação de variáveis
console.log(Var01 + Var02 + Var03); // Inserção de espaços manual
console.log(Var01, Var02, Var03); // Inserção de espaços automático

let Teste = "texto";
console.log("Tipo da variável:", typeof(Teste));
Teste = 2;
console.log("Tipo da variável:", typeof(Teste));
Teste = {nome: "Vinni", idade: 19};
console.log("Tipo da variável:", typeof(Teste));