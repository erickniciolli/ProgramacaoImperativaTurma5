// dados = {
//     numero: 555,
//     conta: "corrente",
//     saldo: 1000,
//     titular: "Erick"
// }

// function Dados(cadastro, numero, conta, saldo, titular) {
//     this.cadastro, cadastro;
//     this.numero=numero;
//     this.conta=conta;
//     this.saldo=saldo;
//     this.titular=titular
// }

// let minhaConta = new Dados(1, 123, "corrente", 0.50, "Erickkk")
// let abigail = new Dados(2, 5486273622, "Conta Corrente",	27771,	"Abigael Natte")
// let ramon = new Dados(3, 1183971869, "Conta Poupança",	8675,	"Ramon Connell")
// let jarret = new Dados(4, 9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente")

// console.log(Dados)

// function lista () {
//     for (i=0, ;i<4; i++) {
//         console.log
//     }
// }



// 5486273622	Conta Corrente	27771	Abigael Natte
// 1183971869	Conta Poupança	8675	Ramon Connell
// 9582019689	Conta Poupança	27363	Jarret Lafuente
// 1761924656	Conta Poupança	32415	Ansel Ardley
// 7401971607	Conta Poupança	18789	Jacki Shurmer
// 630841470	Conta Corrente	28776	Jobi Mawtus
// 4223508636	Conta Corrente	2177	Thomasin Latour
// 185979521	Conta Poupança	25994	Lonnie Verheijden
// 3151956165	Conta Corrente	7601	Alonso Wannan
// 2138105881	Conta Poupança	33196	Bendite Huggett

const Abigail = [5486273622, 0, 27771, "Abigael Natte"];
const Ramon = [1183971869, 1, 8675, "Ramon Connell"];
const Jarret = [9582019689, 1, 27363, "Jarret Lafuente"];
const Ansel = [1761924656, 1, 32415, "Ansel Ardley"];
const Jacki = [7401971607, 1, 18789, "Jacki Shurmer"];
const Jobi = [630841470, 0, 28776, "Jobi Mawtus"];
const Thomasim = [4223508636, 0, 2177, "Thomasin Latour"];
const Lonnie = [185979521, 1, 25994, "Lonnie Verheijden"];
const Alonso = [3151956165, 0, 7601, "Alonso Wannan"];
const Bendite = [2138105881, 1, 33196, "Bendite Huggett"];


function Conta (vetor) {
    let dados = {
        num: vetor[0],
        tipo: ["Corrente", "Poupança"],
        saldo: vetor[2],
        nome: vetor[3],
    };

    let tipoIndex = dados.tipo[vetor[1]];

    return console.log(`Conta Bancária
        Titular: ${dados.nome}
        Tipo da Conta: ${tipoIndex}
        Nº: ${dados.num}
        Saldo Atual: R$ ${dados.saldo}
    `);
};

// Testando a função com os Vetores com dados dos Clientes.

Conta(Abigail);
Conta(Ramon);



const Lista = {
    Abigail: Abigail,
    Ramon: Ramon,
    Jarret: Jarret,
    Ansel: Ansel,
    Jacki: Jacki,
    Jobi: Jobi,
    Thomasim: Thomasim,
    Lonnie: Lonnie,
    Alonso: Alonso,
    Bendite: Bendite
};

let banco = {
    clientes: Lista,
    consultarCliente (nomeTitular) {
        return Conta(listaTitular)
    }
    
}

console.log(banco)

