interface FileSystemItem {
    show(indent: string): void;
}

class FileItem implements FileSystemItem {
    constructor(public name: string) {}

    show(indent: string = "") {
        console.log(`${indent}📄 Arquivo: ${this.name}`);
    }
}

class FolderItem implements FileSystemItem {
    private children: FileSystemItem[] = [];

    constructor(public name: string) {}

    add(item: FileSystemItem) {
        this.children.push(item);
    }

    show(indent: string = "") {
        console.log(`${indent}📁 Pasta: ${this.name}`);
        for (const child of this.children) {
            child.show(indent + "   ");
        }
    }
}

// Uso
const root = new FolderItem("Root");
const sub = new FolderItem("Fotos");
const foto1 = new FileItem("foto1.png");
const foto2 = new FileItem("foto2.png");

root.add(new FileItem("README.md"));
sub.add(foto1);
sub.add(foto2);
root.add(sub);

root.show("");
