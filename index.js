// clicar ALT + CTRL para o cursor interagir com mais de umalinha 

// declaração para importar classes que estão em pastas separadas ( obs: ficar atento as nomenclaturas das pastas)
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",44455533309);

const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteRicardo.transferir(200,conta2);

console.log(ContaCorrente.numeroDeContas);
