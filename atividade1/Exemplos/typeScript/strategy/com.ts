interface FreteStrategy {
    calcular(valor: number): number;
}

class FreteNormal implements FreteStrategy {
    calcular(valor: number) { return valor * 0.05; }
}

class FreteExpresso implements FreteStrategy {
    calcular(valor: number) { return valor * 0.10; }
}

class FreteUltraRapido implements FreteStrategy {
    calcular(valor: number) { return valor * 0.20; }
}

class PedidoComStrategy {
    constructor(private valor: number, private estrategia: FreteStrategy) {}

    calcularFrete(): number {
        return this.estrategia.calcular(this.valor);
    }
}

// ✔️ Uso
const pedidoA = new PedidoComStrategy(100, new FreteNormal());
console.log("Frete pedido A:", pedidoA.calcularFrete());

const pedidoB = new PedidoComStrategy(100, new FreteExpresso());
console.log("Frete pedido B:", pedidoB.calcularFrete());

const pedidoC = new PedidoComStrategy(100, new FreteUltraRapido());
console.log("Frete pedido C:", pedidoC.calcularFrete());
