class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }
    adicionarDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const index = this._dependentes.findIndex(dependente => dependente.cpf == cpf);
        if (index != -1) {
            this._dependentes.splice(index, 1);
            return true;
        }
        return undefined;
    }
    listarDependentes() {
        return this._dependentes;
    }
}
