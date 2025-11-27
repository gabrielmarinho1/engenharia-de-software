class FileNoComposite {
    constructor(public name: string) {}
}

class FolderNoComposite {
    constructor(public name: string, public files: FileNoComposite[]) {}
}

function printFolderNoComposite(folder: FolderNoComposite) {
    console.log(`📁 Pasta: ${folder.name}`);
    for (const file of folder.files) {
        console.log(`   📄 Arquivo: ${file.name}`);
    }
}

const fileA = new FileNoComposite("a.txt");
const fileB = new FileNoComposite("b.txt");
const folder = new FolderNoComposite("Documentos", [fileA, fileB]);

printFolderNoComposite(folder);

/*
- Estrutura rígida, não é possível colocar pastas dentro de pastas facilmente.
- Se quiser subpastas, precisa adicionar novas classes e mudar várias funções.
- A função printFolderNoComposite só funciona para um tipo específico de árvore.
- Torna o código propenso a IFs encadeados e duplicação de código.
*/