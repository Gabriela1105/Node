function getUsuario(){
    return new Promise((resolve, reject) => {
        resolve(['Caio','Gabriela','Bruno','Matheus'])
    });}


 function getUsuarioPorNome(nome){
    return new Promise((resolve, reject) => {
        resolve({nome, idade: 20})
    })
 }

async function fethUsuario() {
    const usuarios = await getUsuario();
    const usuario = await getUsuarioPorNome(usuarios[0]);

    console.log(usuario);
}

fethUsuario();


    // getUsuario()
    //     .then(usuario => getUsuarioPorNome(usuario[0])
    //     .then(usuario => console.log(usuario))
    //     ) ;


// function getUsuario(){
//     return['Caio','Gabriela','Bruno','Matheus']
// }

//console.log(getUsuario()[0]);