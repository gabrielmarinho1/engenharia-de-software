class OldPrinter {
    printText(text: string) {
        console.log("OLD printer says:", text);
    }
}

class ReportGenerator_NoAdapter {
    constructor(private legacyPrinter: OldPrinter) {}

    generate() {
        console.log("Gerando relatório...");
        this.legacyPrinter.printText("Relatório gerado com sucesso!");
    }
}

// USO
const oldPrinter = new OldPrinter();
const appNoAdapter = new ReportGenerator_NoAdapter(oldPrinter);
appNoAdapter.generate();
