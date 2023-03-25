class ClienteEspecial extends Cliente{
    private _dependentes: Cliente[];

    constructor(nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    adicionarDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    removerDependente(cpf: string): boolean | undefined {
        const index: number = this._dependentes.findIndex(
            dependente => dependente.cpf == cpf
        );

        if (index != -1) {
            this._dependentes.splice(index, 1);

            return true;
        }
        
        return undefined;
    }

    listarDependentes(): Cliente[] {
        return this._dependentes;
    }
}   
