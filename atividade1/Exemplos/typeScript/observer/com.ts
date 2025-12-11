
class Observer {
    update(data) {}
}

class LojaComObserver {
    private observers: Observer[] = [];

    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        for (const obs of this.observers) {
            obs.update(data);
        }
    }

    venderProduto(produto) {
        console.log(`Loja vendeu: ${produto}`);
        this.notify(produto);
    }
}


class EmailObserver extends Observer {
    update(produto) {
        console.log(`[EMAIL] Cliente notificado sobre: ${produto}`);
    }
}

class LogObserver extends Observer {
    update(produto) {
        console.log(`[LOG] Venda registrada: ${produto}`);
    }
}

console.log("\n=== COM OBSERVER ===");
const loja2 = new LojaComObserver();

loja2.subscribe(new EmailObserver());
loja2.subscribe(new LogObserver());

loja2.venderProduto("Smartphone");
