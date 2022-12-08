//exemplo 1
// const pessoa = {
//     nome: 'Gabriela Alves',
//     idade: 27,
//     altura: 1.56,
// }
//console.log(pessoa)
//console.log(pessoa.altura)

//exemplo 2
// const pessoa = {
//     nome: 'Gabriela Alves',
//     idade: 27,
//     altura: 1.56,
// }
// pessoa.telefone = '00123456';
// console.log(pessoa)

//exemplo 3
const pessoa = {
    nome: 'Gabriela Alves',
    idade: 27,
    altura: 1.56,
    peso: 60,

    mostrarIMC() {
        return this.peso / (this.altura * this.altura)
    }
}
console.log(pessoa.mostrarIMC())