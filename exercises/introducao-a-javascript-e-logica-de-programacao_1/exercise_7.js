//Cria um programa que converte notas em porcentagem para conceitos de A a F.

let nota = 75;

if(nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if(nota >= 70) {
    console.log('C');
} else if(nota >= 60) {
    console.log('D');
} else if(nota >= 50) {
    console.log('E');
} else if ( nota < 50) {
    console.log('F');
} else {
    console.log('Erro');
}
