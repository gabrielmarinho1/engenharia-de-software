const fs = require("fs");

let arquivo = "db.json";
let dados = [];

// tenta carregar "do jeito que der"
if (fs.existsSync(arquivo)) {
    try {
        let conteudo = fs.readFileSync(arquivo).toString();
        dados = JSON.parse(conteudo);
    } catch (e) {
        dados = [];
    }
} else {
    dados = [];
}

// input sujo via readline-sync
const rl = require("readline-sync");

while (true) {
    console.log("\n=== SISTEMA DE CADASTRO LEGADO (JS) ===");
    console.log("1 - Cadastrar novo");
    console.log("2 - Sair");

    let opcao = rl.question("Opcao: ");

    if (opcao == "1") {
        console.log("\n--- Novo Cadastro ---");
        let nome = rl.question("Nome: ");
        let idade = rl.question("Idade: ");
        let email = rl.question("Email: ");

        let registro = {
            nome: nome,
            idade: idade,
            email: email
        };

        dados.push(registro);

        try {
            fs.writeFileSync(arquivo, JSON.stringify(dados, null, 4));
            console.log("\nCadastro salvo!");
        } catch (e) {
            console.log("Erro ao salvar, mas vida que segue.");
        }
    }

    else if (opcao == "2") {
        console.log("Saindo...");
        break;
    }

    else {
        console.log("Opcao invalida.");
    }
}
