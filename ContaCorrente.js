import { Cliente } from "./Cliente.js";

// incluir a palavra export para exporta classe 
export class ContaCorrente {
    //VARIAVEL GLOBAL
    static numeroDeContas = 0;
    agencia; 
    
    //VARIAVEL PRIVADA
    //   a declaração (( #saldo )) para variaveis privadas ainda nao é regra esse dentro do java script apenas uma convenção 
    _cliente;
    _saldo = 0;
    
    //para proteger e verificar se o valor atribuido é uma instacia do objeto utiliza esse SET 
    //fazendo a verificação INSTANCEOF e para isso se faz necessario 
    //realizar o import da CLASSE CLIENTE. 
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }  
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //contrutor 
    constructor(cliente,agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    //metodos
    sacar(valor){

        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("saldo insuficiente!");
        }
    }

    depositar(valor) {

        if (valor <= 0) {
            console.log("valor nao pode ser negativo");
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        if(valor <= 0){
            console.log("valor nao pode ser negativo");
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}