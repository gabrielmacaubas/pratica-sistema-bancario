let contaController = new ContaController();
let clienteController = new ClienteController();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
contaController.contas.inserir(c1);
contaController.contas.inserir(p1);
contaController.contas.inserir(cb1);
/*
const cls: Clientes = new Clientes;
const cl1: Cliente = new Cliente("a", "00000000001", c1);
const c2 = new Conta('2', 200);
const cl2: Cliente = new Cliente("b", "00000000002", c2);
cls.inserir(cl1);
cls.inserir(cl2);
console.log(cls.listar());
console.log(cls.remover("00000000001"));
console.log(cls.pesquisar("00000000002"));
*/
