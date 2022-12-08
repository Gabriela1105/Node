//anonymous function
const mostrarNomeCompleto = function (nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

//arrow function
const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
}

//console.log(mostrarNomeCompleto('Gabriela', 'Alves'));
console.log(calcularIMC(65, 1.53));


//outro exemplo
// function somar(valor1, valor2){
//     return valor1 + valor2;
//  }
//  function subtrair(valor1, valor2){
//     return valor1 - valor2;
//  }
// function chamarFuncao(funcao){
//     return funcao(2,3);
// }

// console.log('Soma')
// console.log(chamarFuncao(somar));

// console.log('Subtração')
// console.log(chamarFuncao(subtrair))



//outro exemplo 2
function chamarFuncao(funcao){
    return funcao(2,3);
}

console.log('Soma')
const resultadoFuncaoAnonima = chamarFuncao(function(valor1, valor2){
    return valor1 + valor2;
})
console.log(resultadoFuncaoAnonima);

 console.log('Subtração')
 const resultadaArrowFunction = chamarFuncao((valor1, valor2) =>{
    return valor1 - valor2;
 })
 console.log(resultadaArrowFunction)