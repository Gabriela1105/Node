const idade = 70;


// if (idade < 12){
//     if (idade <= 2){
//         console.log('É um bebê');
//     }
//     console.log('É uma criança');
// }else if (idade < 18){
//     console.log('É um adolescente');
// }else if (idade < 65){
//     console.log('É um adulto');
// }else {
//     console.log('É um idoso');
// }

// os dois exemplos, tem o mesmo resultado:

//Operador ternário:
const podeBeber = idade >= 18 ? 'Pode Beber' : 'Não pode beber';
console.log(podeBeber);

// if (idade >= 18) {
//     console.log ('Pode Beber');
// }else{
//     console.log('Não pode beber')
// }
