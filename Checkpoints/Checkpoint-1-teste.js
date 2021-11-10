
//  1 - Pipoca – 10 segundos (padrão);
//  2 - Macarrão – 8 segundos (padrão);
//  3 - Carne – 15 segundos (padrão);
//  4 - Feijão – 12 segundos (padrão);
//  5 - Brigadeiro – 8 segundos (padrão);
// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado 
// for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let pipoca = 10;
let Pipoca = 10;
let macarrao = 8;
let Macarrao = 8;
let macarrão = 8;
let Macarrão = 8;
let carne = 15;
let Carne = 15;
let feijao = 12;
let feijão = 12;
let Feijao = 12;
let Feijão =12;
let brigadeiro = 8;
let Brigadeiro = 8;



function microondas (comida, tempoinformado) {
switch (tempoinformado) {
    case "" :
        tempoinformado=comida;
        break;
}

// switch (comida) {
//     case undefined: 
//     console.log("Prato inexistente");
//     break;
// }

    if (tempoinformado>(3*comida)) {
        console.log("Kabum!")
    }
    else if (tempoinformado>(2*comida)) {
        console.log("A comida queimou")
    }
    else if (tempoinformado<comida) {
        console.log('Tempo insuficiente')
    }
    else if (tempoinformado>=comida && tempoinformado<(2*comida)) {
        console.log('Prato pronto, bom apetite!!!')
    }
    else {
      console.log("Prato Inexistente")  
    }
    
}

microondas (pipoca, "")

// a pessoa sempre precisará colocar o tempo padrão? ou o tempo padrão já vem mesmo se a pessoa não colocar nada?
//  como colocar a opção de prato inexistente
//  a pessoa é obrigada a sempre colocar um tempo?