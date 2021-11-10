function parque (altura, vemAcompanhado) {
    
    if (altura>1.4 && altura<2 || altura>1.2 && vemAcompanhado =="S" ) {
        console.log("Pode subir")
    }


    else console.log("Hoje não!")

};


function parque2 (altura2, vemAcompanhado2) {
    
    if (altura2>1.4 && altura2<2 ) {
        console.log("Pode subir")
    }

    else if (altura2>1.2 && vemAcompanhado2 =="S") {
        console.log("Só acompanhado")
    }


    else console.log("Hoje não!")

};

console.log(parque2 (1.3, "S"));