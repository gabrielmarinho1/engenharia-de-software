interface Printer {
    print(msg: string): void;
}

class OldPrinterV2 {
    printText(msg: string) {
        console.log("OLD V2 printer:", msg);
    }
}

class ModernPrinter {
    send(msg: string) {
        console.log("MODERN printer:", msg);
    }
}

class ModernPrinterAdapter implements Printer {
    constructor(private modern: ModernPrinter) {}

    print(msg: string): void {
        this.modern.send(msg);
    }
}

class ReportGenerator_WithAdapter {
    constructor(private printer: Printer) {}

    generate() {
        console.log("Gerando relatório...");
        this.printer.print("Relatório enviado do sistema novo!");
    }
}

const old = new OldPrinterV2();
const appOld = new ReportGenerator_WithAdapter({
    print: (msg) => old.printText(msg)
});
appOld.generate();

const modern = new ModernPrinter();
const adapted = new ModernPrinterAdapter(modern);

const appModern = new ReportGenerator_WithAdapter(adapted);
appModern.generate();
