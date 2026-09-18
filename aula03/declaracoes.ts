// Declarações de variáveis
let nome: string = 'Vinicius';
let idade: number = 19;
let estaAtivo: boolean = true;

// Arrays
let numero: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Rato', 'Miku'];
let misto1: (string | number)[] = ['Rato', 27, 'Miku', 39];
let misto2: Array<string | number> = ['Rato', 27, 'Miku', 39];

// Tuplas
let pessoa: [string, number] = ['Vênus', 19];

// Union Types
let id: number | string = 123;
id = 'ABC123';

// Interfaces - São usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Opcional
}

// Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Hellen',
    idade: 19
};