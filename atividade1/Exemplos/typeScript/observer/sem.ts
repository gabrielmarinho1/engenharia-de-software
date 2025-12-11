class LojaSemObserver {
    venderProduto(produto) {
        console.log(`Loja vendeu: ${produto}`);

        const emailService = new EmailService();
        const logService = new LogService();

        emailService.enviarEmail(produto);
        logService.registrarLog(produto);
    }
}

class EmailService {
    enviarEmail(produto) {
        console.log(`[EMAIL] Cliente notificado sobre: ${produto}`);
    }
}

class LogService {
    registrarLog(produto) {
        console.log(`[LOG] Venda registrada: ${produto}`);
    }
}

// Uso
console.log("=== SEM OBSERVER ===");
const loja1 = new LojaSemObserver();
loja1.venderProduto("Notebook");
