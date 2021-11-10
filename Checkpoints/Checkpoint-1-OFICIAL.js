function microondas (Prato, tempoinformado) {
    switch (Prato) {

        case "Pipoca":
            if (tempoinformado>(3*10)) {
            console.log("Kabum!")
            }
            else if (tempoinformado>(2*10)) {
            console.log("A comida queimou")
            }
            else if (tempoinformado<10) {
            console.log('Tempo insuficiente')
            }
            else {
            console.log('Prato pronto, bom apetite!!!')
            };
            break;

        case "Macarrão":
            if (tempoinformado>(3*8)) {
            console.log("Kabum!")
            }
            else if (tempoinformado>(2*8)) {
            console.log("A comida queimou")
            }
            else if (tempoinformado<8) {
            console.log('Tempo insuficiente')
            }
            else {
            console.log('Prato pronto, bom apetite!!!')
            };
            break;
                
        case "Carne":
            if (tempoinformado>(3*15)) {
            console.log("Kabum!")
            }
            else if (tempoinformado>(2*15)) {
            console.log("A comida queimou")
            }
            else if (tempoinformado<15) {
            console.log('Tempo insuficiente')
            }
            else {
            console.log('Prato pronto, bom apetite!!!')
            };
            break;

        case "Feijão":
            if (tempoinformado>(3*12)) {
            console.log("Kabum!")
            }
            else if (tempoinformado>(2*12)) {
            console.log("A comida queimou")
            }
            else if (tempoinformado<12) {
            console.log('Tempo insuficiente')
            }
            else {
            console.log('Prato pronto, bom apetite!!!')
            };
            break;
            
        case "Brigadeiro":
            if (tempoinformado>(3*8)) {
            console.log("Kabum!")
            }
            else if (tempoinformado>(2*8)) {
            console.log("A comida queimou")
            }
            else if (tempoinformado<8) {
            console.log('Tempo insuficiente')
            }
            else {
            console.log('Prato pronto, bom apetite!!!')
            };
            break;            
        
        default:
            console.log("Prato Inexistente")
    }    
};

// Prato pronto, bom apetite!!!

microondas ("Pipoca", 10)
microondas ("Feijão", 12)
microondas ("Macarrão", 8)
microondas ("Carne", 15)
microondas ("Brigadeiro", 8)

// Kabum

microondas ("Pipoca", 31)
microondas ("Feijão", 37)
microondas ("Macarrão", 25)
microondas ("Carne", 46)
microondas ("Brigadeiro", 25)

// A comida queimou

microondas ("Pipoca", 21)
microondas ("Feijão", 25)
microondas ("Macarrão", 17)
microondas ("Carne", 31)
microondas ("Brigadeiro", 17)

// Tempo insuficiente

microondas ("Pipoca", 9)
microondas ("Feijão", 11)
microondas ("Macarrão", 7)
microondas ("Carne", 14)
microondas ("Brigadeiro", 7)

// Prato Inexistente

microondas ("Bolo", 15)