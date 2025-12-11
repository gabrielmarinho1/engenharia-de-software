class PedidoSemStrategy {
    constructor(private valor: number, private tipoFrete: string) {}

    calcularFrete(): number {
        if (this.tipoFrete === "normal") {
            return this.valor * 0.05;
        } else if (this.tipoFrete === "expresso") {
            return this.valor * 0.10;
        } else if (this.tipoFrete === "ultrarapido") {
            return this.valor * 0.20;
        } else {
            throw new Error("Tipo de frete inválido");
        }
    }
}

const pedido1 = new PedidoSemStrategy(100, "normal");
console.log("Frete pedido1:", pedido1.calcularFrete());

const pedido2 = new PedidoSemStrategy(100, "expresso");
console.log("Frete pedido2:", pedido2.calcularFrete());
