// ítem 1

function converter (medidapolegadas) {
    return medidapolegadas * 2.54
    };

console.log(converter(2));

// ítem 2

function stringurl (string) {
    return "http://www." + string + ".com.br"
    };

console.log(stringurl("globoesporte"));

// ítem 3

function exclamacao (frase) {
    return frase + "!"
};

console.log(exclamacao("Oi"));

// ítem 4

function idadecachorro (idade) {
    return idade * 7
};

console.log(idadecachorro(2));

// ítem 5

function horatrabalho (salario) {
    return salario / 160
};

console.log(horatrabalho(3000));

// ítem 6

function calculadoraimc(peso, altura) {
    return peso/(altura*altura)
};

console.log(calculadoraimc(80, 1.8))

// ítem 7

function maiuscula (texto) {
    return texto.toUpperCase()
};

console.log(maiuscula("esse é um teste"));

// ítem 8

function tipo (dado) {
   return typeof dado
};

console.log(tipo(40));

// ítem 9

function circunferencia (raio) {
    return 2 * Math.PI * raio
};

console.log(circunferencia(2))