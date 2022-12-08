// function somar(){
//     const valor1 = 10;
//     const valor2 = 15;

//     console.log(valor1 + valor2);
// }
// somar();

// function somar(valor1, valor2){
//    console.log(valor1 + valor2);
// }

// somar(10,5);
// somar(20,7);
// somar(12,1);

function somar(valor1, valor2){
    return valor1 + valor2;
 }

 const resultado1 = somar(10,5);
 const resultado2 = somar(resultado1,10)
 const resultado3 = somar(resultado2,resultado1)

 console.log(resultado1);
 console.log(resultado2);
 console.log(resultado3);
