// Crie um programa que retorne true ou false se as variaveis angulos representam os angulos de um triangulo.
// Se algum angulo for invalido retorna mensagem de erro.

let angulo1 = 45;
let angulo2 = -45;
let angulo3 = 90;
let soma = angulo1 + angulo2 + angulo3;
 
if(soma === 180) {
    console.log(true);
} else if ( angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('Erro');
} else {
    console.log(false);
}
