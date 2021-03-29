//Crie um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = 'biSpo';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
        console.log('Uma casa em todas as direções');
        break;
    
    case 'dama':
        console.log('Horizontal, vertical e diagonais');
        break;

    case 'bispo':
        console.log('Diagonais');
        break;

    case 'cavalo':
        console.log('Em forma de "L"');
        break;
    
    case 'torre':
        console.log('Vertical e horizontal');
        break;

    case 'peão':
        console.log('Uma casa para frente e captura peças na diagonal');
        break;
   
    default:
         console.log('Não é uma peça de Xadrez');
}